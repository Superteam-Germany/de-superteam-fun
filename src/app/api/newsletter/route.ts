import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NewsletterGroup } from "@/types/enum";

const validNewsletterGroups = new Set<string>(Object.values(NewsletterGroup));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_BODY_BYTES = 2_048;
const MAX_EMAIL_LENGTH = 254;
const noStoreHeaders = { "Cache-Control": "no-store" };

const jsonResponse = (message: string, status: number) =>
  NextResponse.json({ message }, { status, headers: noStoreHeaders });

const getGroupRequest = (group: string) => {
  const url = `https://api.mailerlite.com/api/v2/groups/${group}/subscribers`;

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`, // Use environment variable for API key
      "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
    },
    timeout: 8_000,
  };

  return { url, headers };
};

const getStandardRequest = () => {
  const url = "https://connect.mailerlite.com/api/subscribers";

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`, // Use environment variable for API key
    },
    timeout: 8_000,
  };

  return { url, headers };
};

export async function POST(request: NextRequest) {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    const originUrl = new URL(requestOrigin);
    const requestHost = request.headers.get("host");
    const requestProtocol =
      request.headers.get("x-forwarded-proto") ??
      new URL(request.url).protocol.replace(":", "");

    if (
      !requestHost ||
      originUrl.host !== requestHost ||
      originUrl.protocol !== `${requestProtocol}:`
    ) {
      return jsonResponse("Invalid request origin", 403);
    }
  }

  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.startsWith("application/json")) {
    return jsonResponse("Content-Type must be application/json", 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_REQUEST_BODY_BYTES) {
    return jsonResponse("Request body is too large", 413);
  }

  if (!process.env.MAILERLITE_API_KEY) {
    return jsonResponse("Newsletter service is not configured", 500);
  }

  let body: { email?: unknown; group?: unknown };
  try {
    const rawBody = await request.text();
    if (rawBody.length > MAX_REQUEST_BODY_BYTES) {
      return jsonResponse("Request body is too large", 413);
    }
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse("Invalid request body", 400);
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const group =
    typeof body.group === "string" ? body.group : NewsletterGroup.DEFAULT;

  if (
    !email ||
    email.length > MAX_EMAIL_LENGTH ||
    !emailPattern.test(email)
  ) {
    return jsonResponse("Invalid email", 400);
  }

  if (!validNewsletterGroups.has(group)) {
    return jsonResponse("Invalid newsletter group", 400);
  }

  const { url, headers } =
    group === NewsletterGroup.DEFAULT
      ? getStandardRequest()
      : getGroupRequest(group);

  try {
    const response = await axios.post(url, { email }, headers);

    if (response.status === 201) {
      return jsonResponse("Success", 201);
    }

    return jsonResponse("Newsletter provider rejected the request", 502);
  } catch (error: any) {
    // Type assertion to 'any'
    if (error.response && error.response.status === 422) {
      return jsonResponse("The email must be a valid email address.", 422);
    }
    return jsonResponse("Newsletter service is unavailable", 502);
  }
}
