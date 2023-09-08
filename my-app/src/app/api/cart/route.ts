import prisma from "@/../../lib/prisma";
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const userIdParam = searchParams.get("userId");
  const productIdParam = searchParams.get("productId");

  const userId = userIdParam ? parseInt(userIdParam, 10) : 0;
  const productId = productIdParam ? parseInt(productIdParam, 10) : 0;

  try {
    if (userId === 0 || productId === 0) {
      return new Response(JSON.stringify("error params"));
    } else {
      const cartItem = await prisma.cart.create({
        data: {
          user_id: userId,
          product_id: productId
        },
      });

      if (!cartItem) {
        return new Response(JSON.stringify({ message: "Failed to create cart item" }));
      }

      return new Response(JSON.stringify({ message: "Cart item created" }));
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error creating cart item" }), { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const userIdParam = searchParams.get("userId");
  const userId = userIdParam ? parseInt(userIdParam, 10) : -1;

  try {
    if (userId === -1) {
      return new Response(JSON.stringify({ error: "Invalid params" }), { status: 400 });
    }

    const cartItems = await prisma.cart.findMany({
      where: {
        user_id: userId,
      },
    });

    const productIds = cartItems.map((item) => item.product_id);

    const products = await prisma.products.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    return new Response(JSON.stringify({ data: products }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const userIdParam = searchParams.get("userId");
  const productIdParam = searchParams.get("productId");

  const userId = userIdParam ? parseInt(userIdParam, 10) : -1;
  const productId = productIdParam ? parseInt(productIdParam, 10) : -1;

  try {
    if (userId === -1 || productId === -1) {
      return new Response(JSON.stringify({ error: "Invalid params" }), { status: 400 });
    }

    const cartItem = await prisma.cart.findFirst({
      where: {
        user_id: userId,
        product_id: productId,
      },
    });
 
    if (!cartItem) {
      return new Response(JSON.stringify({ error: "Cart item not found" }), { status: 404 });
    }

    await prisma.cart.delete({
      where: {
        id: cartItem.id,
      },
    });

    return new Response(JSON.stringify({ message: "Cart item removed" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
};
