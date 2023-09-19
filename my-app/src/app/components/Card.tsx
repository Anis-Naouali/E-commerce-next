'use client'
import React, { useState, useEffect } from "react";
import axios from 'axios';

interface Props {
    data: {
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
    };
    id: number | null;
}

const Card = (props: Props) => {
    const [active, setActive] = useState(false);
    const { data, id } = props;

    useEffect(() => {
        if (id !== null) {
            localStorage.setItem('id', id.toString());
        }
    }, [id]);


    const handleToggleFavorite = async () => {
        try {
            if (active) {
                // Remove from favorites
                await axios.delete(`http://localhost:3000/api/favs?IdUser=${id}&IdProduct=${data.id}`);
            } else {
                // Add to favorites
                await axios.post(`http://localhost:3000/api/favs?IdUser=${id}&IdProduct=${data.id}`);
            }
            setActive(!active); // Toggle the state after the request is successful
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-[1rem] text-text">
            <div className="relative rounded bg-secondary w-[16.88rem] h-[15.63rem] overflow-hidden shrink-0">
                <div className="absolute w-full right-[0%] bottom-[0rem] left-[0%] rounded-t-none rounded-b bg-text2 h-[2.56rem]" />
                <div className="absolute top-[0.94rem] left-[2.5rem] w-[11.88rem] h-[11.25rem] overflow-hidden">
                    <img
                        className="absolute top-[0.13rem] left-[0.25rem] w-[11.38rem] h-[11rem] object-cover"
                        alt=""
                        src={data.images[0].url}
                    />
                </div>
                <div className="absolute top-[calc(50%_+_92px)] left-[calc(50%_-_51.5px)] w-35 flex flex-row items-center justify-start gap-[0.5rem] text-bg">
                    <button className="bg-black text-white font-bold justify-center py-1 px-3 rounded">
                        Add to cart
                    </button>
                </div>
                <button onClick={handleToggleFavorite}>
                    {active ? (
                        <svg
                            className="text-red-400 w-6 h-auto fill-current ml-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-auto ml-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                    )}
                </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-[0.5rem] text-[1rem] text-text2">
                <div className="relative leading-[1.5rem] font-medium">
                    {data.title}
                </div>
                <div className="flex flex-row items-center justify-center gap-[0.75rem] text-secondary-2">
                    <div className="relative leading-[1.5rem] font-medium">
                        {data.price}$
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
