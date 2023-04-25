import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${process.env.DATA_API_KEY}`);
    const data = await res.json();

    return NextResponse.json({ data })
  } catch (error) {
    console.error(error);
    return;
  }
}