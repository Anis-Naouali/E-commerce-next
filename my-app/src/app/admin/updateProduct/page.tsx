'use client'
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

interface Image {
  id: number;
  url: string;
  productId: number;
}

interface data {
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
  product: data;
}

const UpdateProduct: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [productImages, setProductImages] = useState<Image[]>([]);
  const productId = product.id;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
    }
  };

  const handleSubmit = async () => {
    if (imageFile) {
      const cloudinaryResponse = await uploadImageToCloudinary(imageFile);

      if (cloudinaryResponse) {
        updatedProduct.images[0].url = cloudinaryResponse.secure_url;
      }
    }

    axios
      .put(`http://localhost:3000/api/product?ID=${productId}`, updatedProduct)
      .then((response) => {
        if (response.status === 200) {
          router.push("/productList");
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/product/images?productID=${productId}`)
      .then((response) => {
        if (response.status === 200) {
          setProductImages(response.data);
        }
      })
      .catch((error) => console.error(error));
  }, [productId]);

  const uploadImageToCloudinary = async (imageFile: File) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "mohamed");

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dpc6syi3z/image/upload",
        formData
      );

      return response.data;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      return null;
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="title"
            value={updatedProduct.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={updatedProduct.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={updatedProduct.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Update
        </button>
      </form>
      <h2>Product Images</h2>
      <div>
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Product Image ${index + 1}`}
            style={{ width: "100px", height: "100px", marginRight: "10px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default UpdateProduct;
