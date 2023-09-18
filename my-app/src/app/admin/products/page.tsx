'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation'

interface Product {
  id: number;
  images: {
    id: number;
    url: string;
    productId: number;
  }[];
  title: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get<Product[]>("http://localhost:3000/api/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (productId: number) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
      axios.delete(`http://localhost:3000/api/product?ID=${productId}`)
        .then((response) => {
          if (response.status === 200) {
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== productId)
            );
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleUpdate = (productId: number) => {
    router.push(`/admin/updateProduct/${productId}`);
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded shadow-md p-4"
          >
            <img
              src={product.images[0].url} 
              alt={product.title}
              className="w-full h-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-4">
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(product.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

