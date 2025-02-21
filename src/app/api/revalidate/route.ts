import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const secret = process.env.SANITY_WEBHOOK_SECRET;

export async function POST(request: Request) {
  const body = await request.json();

  // Verify webhook secret in production
  if (process.env.NODE_ENV === "production") {
    const signature = request.headers.get("x-sanity-webhook-secret");
    if (signature !== secret) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }
  }

  // Revalidate sitemap if a blog post is published
  if (body._type === "blogPost") {
    revalidatePath("/sitemap.xml");
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({ revalidated: false });
}
