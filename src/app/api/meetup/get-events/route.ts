import { NextRequest, NextResponse } from 'next/server';

const baseUrl = 'http://localhost:3000';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    console.log('Fetching access token...');
    const result = await fetch(`${baseUrl}/api/meetup/get-access-token`);

    const data = await result.json();
    console.log("🚀 ~ GET ~ accessToken:", data)

    const groupUrlName = process.env.MEETUP_GROUP_URLNAME;

    const url = `https://api.meetup.com/${groupUrlName}/events`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${data.access_token}`
      }
    });

    const events = await response.json();

    console.log("🚀 ~ GET ~ events:", events)

    return NextResponse.json({ message: 'Ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
