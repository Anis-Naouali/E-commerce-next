import {NextResponse,NextRequest} from 'next/server';
import prisma from "@/../../lib/prisma";

export const POST = async(req:NextRequest)=> {
  
    try {
      const body = await req.json();
      
      const {
        title,
        description,
        image_url,
        category,
        rating,
        price,
        num_reviews,
        user_id
      } = body;

      const product = await prisma.products.create({
        data: {
          title,
          description,
          image_url,
          category,
          rating,
          price,
          num_reviews,
          user_id
        },
      });
      

      if (!product) {
        return NextResponse.json({ message: 'Failed to create product' },{status:401});
      }

      return NextResponse.json({ message: 'Product created successfully' },{status:201});
    } catch (error) {
        
      return NextResponse.json({ error: 'Internal server error' },{status:500});
    
  }

}
export const PUT = async (req: NextRequest) => {
    try {
      const {searchParams} = new URL(req.url);
      const id = searchParams.has('ID') ? searchParams.get('ID') : undefined;
      const product_id =id ? parseInt(id,10) :undefined
      
      const body = await req.json();
      
      const {
        title,
        description,
        image_url,
        category,
        rating,
        price,
        num_reviews,
        user_id
      } = body;
      const product = await prisma.products.update({
        where: {id: product_id },
        data: {
            title,
            description,
            image_url,
            category,
            rating,
            price,
            num_reviews,
            user_id
          },
          });
          if (!product) {
            return NextResponse.json({ message: 'Failed to update product' }, { status: 404 });
          }
          return NextResponse.json({ message: 'Product updated successfully' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({error }, { status: 500 });
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
      const products = await prisma.products.findMany();
      return NextResponse.json(products);
    } catch (error) {
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  };