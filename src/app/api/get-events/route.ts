import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { EventRecord } from './../../../types/events';

export const fetchCache = 'force-no-store';

const getMeetupConfig = () => {
  const encodedKey = process.env.MEETUP_PRIVATE_KEY;
  const memberId = process.env.MEETUP_MEMBER_ID;
  const clientId = process.env.MEETUP_CLIENT_ID;
  const signingKeyId = process.env.MEETUP_SIGNING_KEY_ID;
  const groupUrlName = process.env.MEETUP_GROUP_URLNAME;

  if (!encodedKey || !memberId || !clientId || !signingKeyId || !groupUrlName) {
    throw new Error('Meetup service is not configured');
  }

  return {
    memberId,
    clientId,
    signingKeyId,
    groupUrlName,
    privateKey: Buffer.from(encodedKey, 'base64').toString('utf8'),
  };
};

const getAccessToken = async () => {
  const config = getMeetupConfig();
  
  // JWT claims
  const claims = {
    sub: config.memberId,
    iss: config.clientId,
    aud: 'api.meetup.com',
    exp: Math.floor(Date.now() / 1000) + 120,
  }

  // JWT header
  const header = {
    kid: config.signingKeyId,
    typ: 'JWT',
    alg: 'RS256',
  }

  const token = jwt.sign(claims, config.privateKey, {
    algorithm: 'RS256',
    header: header,
  });

  const data = new URLSearchParams();
  data.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
  data.append('assertion', token);

  const response = await fetch('https://secure.meetup.com/oauth2/access', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data.toString(),
  });

  if (!response.ok) {
    throw new Error(`Meetup token API returned ${response.status}`);
  }

  const tokenData = await response.json();

  return tokenData.access_token;
}

function adaptMeetupEventToEventRecord(meetupEvent: any): EventRecord {
  // Remove HTML tags
  let cleanDescription = (meetupEvent.description || '').replace(/<\/?[^>]+(>|$)/g, "");

  // Remove special characters like non-breaking spaces, etc.
  cleanDescription = cleanDescription.replace(/[\u00A0-\u9999<>\&]/gim, "");

  // Remove asterisks used for emphasis
  cleanDescription = cleanDescription.replace(/\*\*/g, "");

  // Replace multiple spaces with a single space
  cleanDescription = cleanDescription.replace(/\s+/g, ' ').trim();

  return {
    id: meetupEvent.id,
    city: meetupEvent.group.localized_location.split(',')[0] || '',
    community: {
      image: meetupEvent.group.key_photo?.photo_link || '', // Use group key photo if available
      link: meetupEvent.link,
      name: meetupEvent.group.name,
    },
    country: meetupEvent.group.country || null,
    description: cleanDescription, // Use cleaned description
    endTime: new Date(meetupEvent.time + meetupEvent.duration).toISOString(),
    image: meetupEvent.featured_photo?.photo_link || '/images/online-event-placeholder.png', 
    link: meetupEvent.link,
    name: meetupEvent.name,
    startTime: new Date(meetupEvent.time).toISOString(),
    tags: [], // Assuming no direct mapping, you might need to handle this separately
    timeZone: meetupEvent.group.timezone,
  };
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const config = getMeetupConfig();
    const token = await getAccessToken();
    const url = `https://api.meetup.com/${config.groupUrlName}/events?fields=featured_photo,group_key_photo`;

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error(`Meetup events API returned ${response.status}`);
    }

    const meetupEvents = await response.json();

    const events = (Array.isArray(meetupEvents) ? meetupEvents : [])
      .map(adaptMeetupEventToEventRecord)
      .slice(0, 6); // Limit to 6 events

    return NextResponse.json(
      { events }, 
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-cache', 
        }, 
      },
    );
  } catch (error) {
    if (error instanceof Error && error.message === 'Meetup service is not configured') {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    console.error('Error fetching events:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
