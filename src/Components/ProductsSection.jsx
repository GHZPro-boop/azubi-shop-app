import React, { useState } from "react";
import alonziDress from "../assest/alonzidress.png";
import longSleeves from "../assest/longsleeves.png";
import mensWatch from "../assest/watch.png";
import mensShirt from "../assest/menshirt.png";
import nikeSneaker from "../assest/nikesneaker.png";
import pumaSneaker from "../assest/pumasneaker.png";
import jeans from "../assest/jeans.png";
import cap from "../assest/cap.png";
import { useNavigate } from "react-router-dom";

export const Products = ({isLoggedIn, Login, searchQuery}) => {

    const navigate = useNavigate();

    const handleProductClick = (product) => {
        // Check if the user is logged in

        if (isLoggedIn) {
            // Navigate to product details page with the product data
            navigate(`/details/${product.id}`, { state: { product } });
        } else {
            // Navigate to the login page
            navigate("/login");
        }
    };

    const products = [
        {
            id: 1,
            name: "Men's Shirt",
            image: mensShirt, // Import your image
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 29.00,
        },
        {
            id: 2,
            name: "Sneaker Nike",
            image: nikeSneaker,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 39.00,
            quantity: 1,
        },
        {
            id: 3,
            name: "Puma Sneaker",
            image: pumaSneaker,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 30.00,
        },
        {
            id: 4,
            name: "Alonzi Dress",
            image: alonziDress,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 19.00,
        },
        {
            id: 5,
            name: "Men's Watch",
            image: mensWatch,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 16.00,
        },
        {
            id: 6,
            name: "Men's Cap",
            image: cap,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 10.00,
        },
        {
            id: 7,
            name: "Ladies' Jeans",
            image: jeans,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 40.00,
        },
        {
            id: 8,
            name: "Long Sleeves",
            image: longSleeves,
            description: "Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel",
            price: 35.00,
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-4 gap-8 justify-center items-center mx-[5%]">
                {products.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleProductClick(product)}
                        className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded"
                    >
                        <img src={product.image} className="min-h-0 min-w-0 self-center" alt={product.name} />
                        <div className="flex flex-col mr-2 gap-2 items-start">
                            <div className="whitespace-nowrap font-['Inter'] font-medium w-20">
                                {product.name}
                            </div>
                            <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                                {product.description}
                            </div>
                        </div>
                        <div className="flex flex-row mr-16 gap-5 items-center">
                            <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                                <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                    Place order
                                </div>
                            </div>
                            <div className="whitespace-nowrap font-['Inter'] w-16 shrink-0">
                                $ {product.price.toFixed(2)}
                            </div>
                        </div>
                    </div>
                ))}
                {!isLoggedIn && <Login />}
            </div>
        </div>
    );
}