import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { NewsletterGroup } from "@/types/enum";

// MailerLite form endpoint for Solana Superteam Germany Newsletter
const MAILERLITE_FORM_URL = "https://connect.mailerlite.com/api/subscribers";

export async function POST(request: NextRequest) {
  const { email, group } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  try {
    // Use the MailerLite form API endpoint
    const response = await axios.post(
      MAILERLITE_FORM_URL,
      {
        email,
        groups: [
          group === NewsletterGroup.BUILDSTATION
            ? NewsletterGroup.BUILDSTATION
            : "default",
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
        },
      }
    );

    if (response.status === 201 || response.status === 200) {
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }

    return NextResponse.json(
      { message: response.data.error?.message || "Subscription failed" },
      { status: response.status }
    );
  } catch (error: any) {
    if (error.response && error.response.status === 422) {
      return NextResponse.json(
        { message: "The email must be a valid email address." },
        { status: 422 }
      );
    }
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { message: "Error in API route" },
      { status: 500 }
    );
  }
}
