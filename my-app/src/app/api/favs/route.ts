import prisma from "@/../../lib/prisma";
import {NextResponse,NextRequest} from 'next/server';
export const POST = async (req: Request) => {
    const {searchParams} = new URL (req.url)
    const iduser = searchParams.get("IdUser")
   const UserId = iduser ? parseInt(iduser, 10) : 0
   const idproduct = searchParams.get("IdProduct")
   const productId = idproduct ? parseInt(idproduct, 10) : 0
   try { 
   if (UserId===0 || productId ===0){return new Response(JSON.stringify("error params"))}
   else
   {const fav = await prisma.fav.create({
    data: {
        user_id: UserId,
        product_id: productId
    },
  })
if (!fav) return new Response (JSON.stringify({message:"failed to create fav"}))
return new Response(JSON.stringify({message :"favorite created"}))
}
   }
   catch (error) {
    return new Response(JSON.stringify({ message: "error create" }), { status: 500 });
  }
}
export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);
    const iduser = searchParams.get("IdUser");
    const UserId = iduser ? parseInt(iduser, 10) : -1;

    try {
      if (UserId === -1) {
        return new Response(JSON.stringify({ error: "Invalid params" }), {
          status: 400,
        });
      }

      const fav = await prisma.fav.findMany({
        where: {
            user_id: UserId,
        }
      });

      const product_id = fav.map((e) => e.product_id);

      const products = await prisma.products.findMany({
        where: {
          id: {
            in: product_id,
          },
          
        },
        
        include: {
          images: true, 
        }
      });

      return new Response(JSON.stringify({ data: products }), 
      { status: 200});
    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500 });
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
        return new Response(JSON.stringify({ error: "Invalid params" }), {
          status: 400,
        });
      }
  
      const favorite = await prisma.fav.findFirst({
        where: {
            user_id: userId,
            product_id: productId,
        },
      });
  
      if (!favorite) {
        return new Response(JSON.stringify({ error: "Favorite not found" }), {
          status: 404,
        });
      }
  
      await prisma.fav.delete({
        where: {
          id: favorite.id,
        },
      });
  
      return new Response(JSON.stringify({ message: "Favorite removed" }), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
      });
    }
  };
  
  
  