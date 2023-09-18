'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
interface data {
    images: {
        id: number;
        url: string;
        productId: number;
    }[];
    id: number;
    title: string;
    description: string;
    category: string;
    rating: number;
    price: number;
    num_reviews: number;
}
interface user {
    id : number,
    email:string,
    name : string,
    LastName:string
    role : string
    password:string,
    addresse : string
}



const page = () => {
    const [data, setdata] = useState<data[]>([]);
    const [id,setId] = useState<null | number>(null)
    const mail = localStorage.getItem("mail")

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/product")
            .then((res) => {
                setdata(res.data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err, "err");
            });
            const fetchUserData = async () => {
                try {
                  const response = await axios.get('/api/users', {
                    params: { email: mail }, // Pass the user's email as a parameter
                  });
            
                  const userData = response.data.filter((e:user)=>e.email === mail);
                  console.log(userData,"userData");
                  setId(userData[0].id)
                  // if (userData.length > 0) {
                  //   const user = userData[0];
                  //   setUserId(user.id);
                  // }
                } catch (error) {
                  console.error('An error occurred:', error);
                }
              };
            
              fetchUserData();

    }, []);

    return (
        <div>
            <div className="flex flex-col items-start justify-start gap-[1.25rem] pt-20 pl-24">
                <div className="flex flex-row items-center justify-start gap-[1rem]">
                    <div className="relative w-[1.25rem] h-[2.5rem]">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-button2" />
                    </div>
                    <div className="w-36 h-10 justify-start items-center gap-4 inline-flex">
                        <div className="w-5 h-10 relative">
                            <div className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
                        </div>
                        <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Our Products</div>
                    </div>
                </div>
                <div className="relative text-[2.25rem] tracking-[0.04em] leading-[3rem] font-semibold font-heading-24px-semibold text-text2">
                    Explore Our Products
                </div>
            </div>

            <div className=" grid grid-cols-4 gap-4 items-start justify-start gap-[1.88rem] p-20">
                {data.map((e, i) => {
                    return (
                        <Card id={id} data = {e}/>
                    );
                })}
            </div>

        </div>
    )
}

export default page