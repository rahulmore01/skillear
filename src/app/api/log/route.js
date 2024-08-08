import { NextResponse, NextRequest } from "next/server";
// this api is hit when user is not logged in no id is there
export async function GET(NextRequest) {
  try {
    const blogPosts = await "user not found";
    return NextResponse.json(blogPosts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
