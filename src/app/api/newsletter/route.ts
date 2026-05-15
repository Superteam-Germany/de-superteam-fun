import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NewsletterGroup } from "@/types/enum";

const validNewsletterGroups = new Set<string>(Object.values(NewsletterGroup));
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getGroupRequest = (group: string) => {
  const url = `https://api.mailerlite.com/api/v2/groups/${group}/subscribers`;

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      //'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`, // Use environment variable for API key
      "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
    },
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
  };

  return { url, headers };
};

export async function POST(request: NextRequest) {
  if (!process.env.MAILERLITE_API_KEY) {
    return NextResponse.json(
      { message: "Newsletter service is not configured" },
      { status: 500 }
    );
  }

  let body: { email?: unknown; group?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const group =
    typeof body.group === "string" ? body.group : NewsletterGroup.DEFAULT;

  if (!email || !emailPattern.test(email)) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  if (!validNewsletterGroups.has(group)) {
    return NextResponse.json({ message: "Invalid newsletter group" }, { status: 400 });
  }

  const { url, headers } =
    group === NewsletterGroup.DEFAULT
      ? getStandardRequest()
      : getGroupRequest(group);

  try {
    const response = await axios.post(url, { email }, headers);

    if (response.status === 201) {
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }

    return NextResponse.json(
      { message: response.data.error.message },
      { status: response.status }
    );
  } catch (error: any) {
    // Type assertion to 'any'
    if (error.response && error.response.status === 422) {
      return NextResponse.json(
        { message: "The email must be a valid email address." },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { message: "Error in API route" },
      { status: 500 }
    );
  }
}
