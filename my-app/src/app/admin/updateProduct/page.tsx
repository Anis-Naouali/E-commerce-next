'use client'
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import RootLayout from '@/app/layout';


interface Image {
  id: number;
  url: string;
  productId: number;
}

interface Data {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  num_reviews: number;
  images: Image[];
}

interface Props {
  productId: number;
}
 
const UpdateProduct: React.FC<Props> = ({ productId }) => {
  const router = useRouter();
  const [prodId, setId] = useState<number | null>(null);
  const [updatedProduct, setUpdatedProduct] = useState<Data>({
    id: 0,
    title: "",
    description: "",
    category: "",
    rating: 0,
    price: 0,
    num_reviews: 0,
    images: [],
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [productImages, setProductImages] = useState<Image[]>([]);
console.log(updatedProduct,"updateed")
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productid = Number(params.get("ID"));
    console.log("Extracted productid:", productid);
    setId(productid);

    if (!isNaN(productid)) {
      axios
        .get(`http://localhost:3000/api/prod?ID=${productid}`)
        .then((response) => {
          console.log(response.data, "data");
          if (response.status === 200) {
            const { images } = response.data;
            setUpdatedProduct(response.data);
            setProductImages(images);
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (updatedProduct) {
      const { name, value } = e.target;
      const numericValue = ["price", "rating"].includes(name) ? parseFloat(value) : value;
      setUpdatedProduct((prevProduct) => ({
        ...prevProduct,
        [name]: numericValue,
      }));
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async () => {
    if (updatedProduct) {
      try {
        let updatedData = { ...updatedProduct };

        if (imageFile) {
          const cloudinaryResponse = await uploadImageToCloudinary(imageFile);

          if (cloudinaryResponse) {
            updatedData = {
              ...updatedData,
              images: [
                {
                  id: updatedProduct.images[0].id,
                  url: cloudinaryResponse.secure_url,
                  productId: productId,
                },
              ],
            };
          }
        }

        await axios.put(
          `http://localhost:3000/api/product?ID=${prodId}`,
          updatedData
        );

        router.push("/admin/products");
      } catch (error) {
        console.error(error);
      }
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
      console.error("Error uploading image to Cloudinary:", error);
      return null;
    }
  };
console.log(typeof(updatedProduct.price));

  return (
    <RootLayout role="admin" >

    <div>
      {updatedProduct !== null && (
        <>
          <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="title">Name:</label>
              <input
                type="text"
                name="title"
                value={updatedProduct.title || ""}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
                value={updatedProduct.description || ""}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="price">
                  Price:
                </label>
                <input
                  type="number"
                  name="price"
                  value={updatedProduct.price}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold" htmlFor="rating">
                  Rating:
                </label>
                <input
                  type="number"
                  name="rating"
                  value={updatedProduct.rating}
                  onChange={handleInputChange}
                  className="border rounded px-2 py-1"
                />
              </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold" htmlFor="image">Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="border rounded px-2 py-1"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
            >
              Update
            </button>
          </form>
          <h2 className="text-xl font-semibold mt-6">Product Images</h2>
          <div className="flex">
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Product Image ${index + 1}`}
                className="w-20 h-20 rounded mr-4"
              />
            ))}
          </div>
        </>
      )}
    </div>
    </RootLayout>
  );
};

export default UpdateProduct;
