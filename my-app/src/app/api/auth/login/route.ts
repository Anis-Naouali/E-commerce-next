import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/../../lib/prisma';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();
import { serialize } from "cookie";


export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Wrong email' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const secret = process.env.JWT_SECRET;

      if (!secret) {
        throw new Error("JWT_SECRET is not defined in the .env file.");
      }

      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });

      const serialized = serialize ("token",token,{
        httpOnly: true, 
        maxAge: 60*60*24*30,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        path : "/" 
      });
    
      return NextResponse.json({ message: 'Successfully logged in',role:user.role },{headers :{"Set-Cookie" : serialized}});
    } else {
      return NextResponse.json({ message: 'Wrong password' });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
};



