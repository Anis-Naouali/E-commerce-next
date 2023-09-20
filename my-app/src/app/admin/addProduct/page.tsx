'use client';
import React, { useState, ChangeEvent, } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";
import RootLayout from '@/app/layout';
import Link from 'next/link';
interface Image {
  id: number;
  url: string;
  productId: number;
}
interface Data {
  title: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  num_reviews: number;
  images: Image[];
  user_id: number | null;
}


const AddProduct: React.FC = () => {
  const router = useRouter();

  const [product, setProduct] = useState<Data>({
    title: '',
    description: '',
    category: '',
    rating: 0,
    price: 0,
    num_reviews: 0,
    images: [],
    user_id: 3,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = ['price', 'rating','num_reviews'].includes(name) ? parseFloat(value) : value;
    setProduct({
      ...product,
      [name]: numericValue,
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };


  const uploadImageToCloudinary = async (imageFile: File) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "eh4mtnwx");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dpc6syi3z/image/upload`,
        formData
      );

      return response.data;
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
      return null;
    }
  };

  const handleSubmit = async () => {
    try {
      if (!imageFile) {
        console.error("Please select an image.");
        return;
      }
  
      const cloudinaryResponse = await uploadImageToCloudinary(imageFile);
  
      if (!cloudinaryResponse) {
        console.error("Error uploading image to Cloudinary.");
        return;
      }
      const productData: Data = {
        title: product.title,
        description: product.description,
        category: product.category,
        rating: product.rating,
        price: product.price,
        num_reviews: product.num_reviews,
        images: [
          {
            id: 0,
            url: cloudinaryResponse.secure_url,
            productId: 0,
          },
        ],
        user_id: 3,
      };
  
      const response = await axios.post<Data>(
        "http://localhost:3000/api/product",
        [productData]
      );
      router.push("/admin/products");
      if (response.status === 200) {
        console.log("Product added successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  
  
  return (
    <RootLayout role="admin" >
      

    <div className="container mx-auto mt-10  w-1/2 mb-20" >
    <button className=' mt-20 bg-black text-white font-bold top-[calc(50%_+_92px)] left-[calc(50%_-_51.5px)] w-40 rounded py-2 mb-10'>
        <Link href="/admin/products">Products</Link>
        </button>
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Name:
          </label>
          <input
            className="border rounded py-2 px-3 w-full"
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <input
            className="border rounded py-2 px-3 w-full"
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <input
            className="border rounded py-2 px-3 w-full"
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating:
          </label>
          <input
            className="border rounded py-2 px-3 w-full"
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price:
          </label>
          <input
            className="border rounded py-2 px-3 w-full"
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="num_reviews">
            Number of Reviews:
          </label>
          <input
            className="border rounded py-2 px-3 w-full"
            type="number"
            name="num_reviews"
            value={product.num_reviews}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image:
          </label>
          <input
            className="border py-2 px-3 w-full"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          type="button"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </form>
    </div>
    </RootLayout>
  );
};

export default AddProduct;
