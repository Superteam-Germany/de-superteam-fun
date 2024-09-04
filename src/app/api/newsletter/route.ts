import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  try {
    const response = await axios.post(
      'https://connect.mailerlite.com/api/subscribers',
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`, // Use environment variable for API key
        },
      }
    );

    if (response.status === 201) {
      return NextResponse.json({ message: "Success" }, { status: 201 });
    }

    return NextResponse.json({ message: response.data.error.message }, { status: response.status });
  } catch (error: any) { // Type assertion to 'any'
    if (error.response && error.response.status === 422) {
      return NextResponse.json({ message: 'The email must be a valid email address.' }, { status: 422 });
    }
    return NextResponse.json({ message: "Error in API route" }, { status: 500 });
  }
}
