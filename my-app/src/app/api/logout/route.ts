import { NextResponse, NextRequest } from 'next/server';

import { serialize } from "cookie";

export const POST = async (req: NextRequest) => {
  try {
    const accessCookie = serialize('token', '', { maxAge: 0, path: '/' });

    return NextResponse.json({ message: 'Successfully logged out' }, { headers: {'Set-Cookie': accessCookie}});
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });  }
};