import bcrypt from "bcrypt"
import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/../../lib/prisma';

export const GET = async (req: NextRequest) => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, name, password, role } = body;

    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (user?.email) {
      return new Response(JSON.stringify({ message: 'Email already exists!' }));
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newData = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role,
      },
    });

    if (!newData) {
      return new Response(JSON.stringify({ message: 'Failed to create user' }));
    }

    return new Response(JSON.stringify({ newData }));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.has('ID') ? searchParams.get('ID') : undefined;
    const users_id = id ? parseInt(id, 10) : undefined;

    const body = await req.json();

    const { name, email, password, role } = body;

    const user = await prisma.user.update({
      where: { id: users_id },
      data: {
        name,
        email,
        password,
        role,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'Failed to update user' }, { status: 404 });
    }

    return NextResponse.json({ message: 'User updated successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

// import { NextResponse, NextRequest } from 'next/server';
// import prisma from '@/../../lib/prisma';

// export const POST = async (req: NextRequest) => {
//   try {
//     const body = await req.json();
//     const { email, password } = body;
//     const user = await prisma.user.findFirst({
//       where: {
//         email: email,
//       },
//     });

//     if (!user) {
//       return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
//     }

//     const isValid = await bcrypt.compare(password, user.password);

//     if (!isValid) {
//       return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
//     }

//     return NextResponse.json({ userId: user.id, userEmail: user.email }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// };

