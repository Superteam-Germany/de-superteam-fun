import { NextResponse } from "next/server";

export async function GET(request: Request) {

  try {
    const authorizationUrl = `https://secure.meetup.com/oauth2/authorize?client_id=${process.env.MEETUP_CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(process.env.MEETUP_REDIRECT_URI || '')}`;

    return NextResponse.redirect(authorizationUrl);
  } catch (error) {
    return NextResponse.error();
  }
}

