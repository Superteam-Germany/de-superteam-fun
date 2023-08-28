import { NextRequest, NextResponse } from "next/server";
import Axios, { isAxiosError } from "axios";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email(),
});

const axios = Axios.create({
  auth: {
    password: process.env.MAILCHIMP_API_KEY!,
    username: "anystring",
  },
});

export async function POST(request: NextRequest) {
  const listId = process.env.MAILCHIMP_LIST_ID;

  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  try {
    const parsedEmail = emailSchema.parse({ email });

    const res = await axios.post(
      `https://us11.api.mailchimp.com/3.0/lists/${listId}/members/`,
      JSON.stringify({
        email_address: parsedEmail.email,
        status: "subscribed",
      })
    );
    console.log("🚀 ~ file: route.ts:35 ~ POST ~ res:", res);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("🚀 ~ file: route.ts:37 ~ POST ~ error:", error);
    }
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }
}
