'use client'
import React, { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";

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

interface Image {
  id: number;
  url: string;
  productId: number;
}

const AddProduct: React.FC = () => {
  const [product, setProduct] = useState<Data>({
    title: "",
    description: "",
    category: "",
    rating: 0,
    price: 0,
    num_reviews: 0,
    images: [],
    user_id: null, 
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  
  useEffect(() => {
    const mail = localStorage.getItem("mail");
    if (mail) {
      fetchUserIdByEmail(mail);
    }
  }, []);

  const fetchUserIdByEmail = async (email: string) => {
    try {
      const response = await axios.get<number>(
        `http://localhost:3000/api/users?email=${email}`
      );
      if (response.data) {
        setProduct((prevProduct) => ({
          ...prevProduct,
          user_id: response.data,
        }));
      }
    } catch (error) {
      console.error("Error fetching user_id:", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue = ["price", "rating"].includes(name) ? parseFloat(value) : value;
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

  const handleSubmit = async () => {
    try {
      let productData: Data = {
        title: product.title,
        description: product.description,
        category: product.category,
        rating: product.rating,
        price: product.price,
        num_reviews: product.num_reviews,
        images: [],
        user_id: product.user_id,
      };

      if (imageFile) {
        const cloudinaryResponse = await uploadImageToCloudinary(imageFile);

        if (cloudinaryResponse) {
          productData = {
            ...productData,
            images: [
              {
                id: 0,
                url: cloudinaryResponse.secure_url,
                productId: 0,
              },
            ],
          };
        }
      }

      const response = await axios.post<Data>(
        "http://localhost:3000/api/product",
        productData
      );

      if (response.status === 200) {
        console.log("Product added successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const uploadImageToCloudinary = async (imageFile: File) => {
    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "eh4mtnwx");

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
      <h2>Add Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Number of Reviews:</label>
          <input
            type="number"
            name="num_reviews"
            value={product.num_reviews}
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
