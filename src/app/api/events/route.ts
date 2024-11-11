import { NextResponse } from "next/server";

const RIVER_ACCESS_KEY = process.env.RIVER_ACCESS_KEY;

export async function GET(request: Request) {

  if(!RIVER_ACCESS_KEY) {
    return NextResponse.error();
  }

  const url = 'https://app.getriver.io/api/v1alpha1/community/superteam/list-events?sort=geo&latitude=52.520008&longitude=13.404954&limit=6';
  const headers = {
    'RIVER-ACCESS-KEY': RIVER_ACCESS_KEY,
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    return NextResponse.json({ events: data.events });
  } catch (error) {
    return NextResponse.error();
  }
}
