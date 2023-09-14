import {NextResponse,NextRequest} from 'next/server';
import prisma from "@/../../lib/prisma";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
    }

    const createdProducts = [];

    for (const productData of body) {
      const {
        title,
        description,
        category,
        rating,
        price,
        num_reviews,
        user_id,
        images
      } = productData;

      const product = await prisma.products.create({
        data: {
          title,
          description,
          category,
          rating,
          price,
          num_reviews,
          user: {
            connect: {
              id: user_id
            }
          },
          images: {
            create: images.map((image: { url: string }) => ({
              url: image.url
            }))
          }
        }
      });

      if (!product) {
        return NextResponse.json({ message: 'Failed to create product' }, { status: 401 });
      }

      createdProducts.push(product);
    }

    return NextResponse.json({ message: 'Products created successfully', createdProducts }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};





export const PUT = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.has('ID') ? searchParams.get('ID') : undefined;
    const product_id = id ? parseInt(id, 10) : undefined;

    const body = await req.json();

    const {
      title,
      description,
      category,
      rating,
      price,
      num_reviews,
      user_id,
      images: updatedImages 
    } = body;

    const product = await prisma.products.update({
      where: { id: product_id },
      data: {
        title,
        description,
        category,
        rating,
        price,
        num_reviews,
        user_id,
      },
    });

    if (!product) {
      return NextResponse.json({ message: 'Failed to update product' }, { status: 404 });
    }

    await prisma.image.deleteMany({
      where: {
        product_id: product.id,
      },
    });

    const createdImages = await prisma.image.createMany({
      data: updatedImages.map((image: { url: string }) => ({
        url: image.url,
        product_id: product.id,
      })),
    });

    return NextResponse.json({ message: 'Product updated successfully', product, images: createdImages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};


  export const DELETE = async (req: NextRequest) => {
    try {
      const { searchParams } = new URL(req.url);
      const id = searchParams.has('ID') ? searchParams.get('ID') : undefined;
      const productId = id ? parseInt(id, 10) : undefined;
  
      if (!productId) {
        return NextResponse.json({ message: 'Invalid request', status: 400 });
      }
  
      const product = await prisma.products.findUnique({
        where: { id: productId },
      });
  
      if (!product) {
        return NextResponse.json({ message: 'Product not found', status: 404 });
      }
  
      await prisma.products.delete({ where: { id: productId } });
  
      return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  };
  export const GET = async (req: NextRequest) => {
    try {
      const products = await prisma.products.findMany({
        include: {
          images: true,
        },
      });
  
      return NextResponse.json(products);
    } catch (error) {
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  };
  