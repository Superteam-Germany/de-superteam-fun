import { NextResponse } from "next/server";
import Axios, { isAxiosError } from "axios";

const axios = Axios.create({
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  },
});

// todo: add revalidation and static site generation

export async function GET(request: Request) {
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableId = process.env.AIRTABLE_TABLE_ID;
  try {
    const events = await axios.get(
      `https://api.airtable.com/v0/${baseId}/${tableId}`
    );
    return NextResponse.json({ events: events.data.records });
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("🚀 ~ file: route.ts:22 ~ GET ~ error:", error.message);
      return NextResponse.error();
    }
  }
}

// events response
// {
//   "id": "recqk4tZG7R69uTCi",
//   "createdTime": "2023-08-22T12:57:25.000Z",
//   "fields": {
//       "image": "https://lu.ma/night0-berlin",
//       "description": "Please join us for an evening of great food, drink, and conversation. This dinner is meant to gather the people who made this Hacker House possible before the event. ",
//       "url": "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=960,height=480/event-covers/5u/42b4d731-8893-46c7-8e17-3da1af9b92d8",
//       "event_name": "Solana Foundation Dinner",
//       "display": true
//   }
// }
