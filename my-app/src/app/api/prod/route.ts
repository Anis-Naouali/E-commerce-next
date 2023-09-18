import { NextResponse, NextRequest } from "next/server";
import prisma from "@/../../lib/prisma";


export const GET = async (req: NextRequest) => {
    try {
      const { searchParams } = new URL(req.url);
      const id = searchParams.has("ID") ? searchParams.get("ID") : undefined;
      const productId = id ? parseInt(id, 10) : undefined;
  
      if (!productId) {
        return NextResponse.json({ message: "Invalid request", status: 400 });
      }
  
      const product = await prisma.products.findUnique({
        where: { id: productId },
        include: {
          images: true,
        },
      });
  
      if (!product) {
        return NextResponse.json({ message: "Product not found", status: 404 });
      }
  
      return NextResponse.json(product);
    } catch (error) {
      console.error("Error getting product by ID:", error);
      return NextResponse.json({ error }, { status: 500 });
    }
  };
  