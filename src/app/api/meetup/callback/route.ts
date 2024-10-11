// pages/api/meetup/callback.js
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log("🚀 ~ GET ~ request:", request);
  console.log("🚀 ~ GET ~ request.url:", request.url);

  // Extract 'code' from the URL's query parameters
  console.log('------------------------------ hi from meetup callback');
  
  const { searchParams } = new URL(request.url);
  console.log('searchParams', searchParams);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ message: 'Authorization code is missing' }, { status: 400 });
  }

  const tokenUrl = 'https://secure.meetup.com/oauth2/access';

  const params = new URLSearchParams();
  params.append('client_id', process.env.MEETUP_CLIENT_ID || '');
  params.append('client_secret', process.env.MEETUP_CLIENT_SECRET || '');
  params.append('grant_type', 'authorization_code');
  params.append('redirect_uri', process.env.MEETUP_REDIRECT_URI || '');
  params.append('code', code);

  try {
    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const tokenData = await tokenResponse.json();
    console.log('tokenData', tokenData);

    if (tokenData.error) {
      return NextResponse.json(tokenData, { status: 400 });
    }
    
    const url = `https://secure.meetup.com/oauth2/access?client_id=${process.env.MEETUP_CLIENT_ID}&client_secret=${process.env.MEETUP_CLIENT_SECRET}&grant_type=authorization_code&redirect_uri=${encodeURIComponent(process.env.MEETUP_REDIRECT_URI || '')}&code=${code}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('data', data);
    // Store the tokens securely (e.g., in a database or encrypted session)
    // For demonstration, we'll just return them in the response
    return NextResponse.json(tokenData);
  } catch (error) {
    console.error('Error fetching access token:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
