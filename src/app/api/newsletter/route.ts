import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });
  }

  try{
    const response = await axios.post(`https://script.google.com/macros/s/AKfycbzy-hZFM6C7POgw2cs9YD0hmKeks2lg8OPZTVvuKcrOmMnvW9hdAUXN3jy_qDbsktg/exec`, null, {
      params: {
        email
      }
    });

    if (response.status === 200) {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }
  }catch (error){
    return NextResponse.json({ message: "Error in API route" }, { status: 500 });
  }
}
