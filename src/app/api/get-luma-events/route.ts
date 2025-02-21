import { EventRecord } from '@/types/events'
import { NextRequest, NextResponse } from 'next/server'

export const fetchCache = 'force-no-store';

const LUMA_API_KEY = process.env.LUMA_API_KEY

interface GeoAddressJson {
  city: string
  type: string
  region: string
  address: string
  country: string
  latitude: string
  longitude: string
  place_id: string
  city_state: string
  description: string
  country_code: string
  full_address: string
}

interface LumaApiResponse {
  entries: Array<{
    api_id: string
    event: {
      api_id: string
      created_at: string
      cover_url: string
      name: string
      description: string
      description_md: string
      series_api_id: string | null
      start_at: string
      duration_interval: string
      end_at: string
      geo_address_json: GeoAddressJson
      geo_latitude: string
      geo_longitude: string
      url: string
      timezone: string
      event_type: string
      user_api_id: string
      visibility: string
      meeting_url: string | null
      zoom_meeting_url: string | null
    }
    tags: string[]
  }>
}

function adaptLumaEventToEventRecord(entry: LumaApiResponse['entries'][0]): EventRecord {
  const event = {
    id: entry.event.api_id,
    city: entry.event.geo_address_json?.city || '',
    community: {
      image: '/images/st-flag-logo.png',
      link: entry.event.url,
      name: 'Superteam Germany',
    },
    country: entry.event.geo_address_json?.country || null,
    description: entry.event.description,
    endTime: entry.event.end_at,
    image: entry.event.cover_url || '/images/online-event-placeholder.png',
    link: entry.event.url,
    name: entry.event.name,
    startTime: entry.event.start_at,
    tags: entry.tags,
    timeZone: entry.event.timezone,
  }
  return event
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetch(
      `https://api.lu.ma/public/v1/calendar/list-events`,
      {
        headers: {
          'Authorization': `Bearer ${LUMA_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`Lu.ma API returned ${response.status}`)
    }

    const data = await response.json() as LumaApiResponse
    const events = data.entries
      .map(adaptLumaEventToEventRecord)
      .slice(0, 6)

    return NextResponse.json(
      { events },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-cache',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching Lu.ma events:', error)
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }
} 