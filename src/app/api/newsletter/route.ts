import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NewsletterGroup } from "@/types/enum";

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
  const { email, group } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
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
