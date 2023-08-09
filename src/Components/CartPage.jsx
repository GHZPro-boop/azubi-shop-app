import React from "react";
import paperBag from "../assest/Paperbag.png";
import { Link } from "react-router-dom";

export const Cart = ({ cartItems, removeFromCart, setCartItems }) => {

    const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.price, 0);

    const handleQuantityChange = (itemId, newQuantity) => {
        console.log("ItemId:", itemId);
        console.log("New Quantity:", newQuantity);
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                console.log("Updating item:", item);
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        console.log("Updated Cart Items:", updatedCartItems);
        setCartItems(updatedCartItems);
    };

    return (
        <div>
            <div className="overflow-hidden bg-white flex flex-col justify-between pb-[686px] w-full h-[1100px]">
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-row gap-px h-[100px] shrink-0 items-center px-3">
                    <div className="relative flex flex-col mr-[514px] w-40 shrink-0 items-start">
                        <Link to="/">
                            <div className="text-lg font-['Inter'] font-medium text-[#115586] absolute top-8 left-14 h-6 w-2/3">
                                Azubi<div className="font-['Armata'] text-[#001066] contents">Shop</div>
                            </div>
                        </Link>
                        <img
                            src={paperBag}
                            className="min-h-0 min-w-0 relative w-20"
                        />
                    </div>
                    <Link to='/'>
                        <div className="font-['Inter'] font-medium text-[#7d7676] hover:text-[#001066] mr-6 w-12 shrink-0">
                            Home
                        </div>
                    </Link>
                    <Link to='/cart'>
                        <div className="font-['Inter'] font-medium text-[#001066] w-8 shrink-0">
                            Cart
                        </div>
                    </Link>
                    <div className="shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#001066] flex flex-col mr-[514px] w-5 shrink-0 items-center pt-0 pb-px px-1 rounded-sm">
                        <div className="font-['Inter'] font-medium text-white w-5/6">2</div>
                    </div>
                    <div className="bg-[#001066] flex flex-col h-10 items-center py-2 rounded">
                        <Link to='/login'>
                            <div className="font-['Inter'] font-medium text-white w-2/5 mx-8">
                                Login
                            </div>
                        </Link>
                    </div>
                </div>
                {cartItems.map((item) => (
                    // Cart item details
                    <div className="flex flex-col gap-4 items-end ml-[181px] mr-[180px]">
                        <div className="overflow-hidden bg-[#f5f5f5] self-stretch flex flex-col mb-3 gap-12 h-64 shrink-0 items-start px-10 py-5 rounded-lg">
                            <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold w-12">
                                Cart{" "}
                            </div>
                            <div className="self-stretch flex flex-col gap-5 ml-4 mr-20">
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-row gap-40 items-center ml-16 mr-40">
                                        <div className="font-['Inter'] text-[#7d7676] mr-3 w-16 shrink-0">
                                            Product
                                        </div>
                                        <div className="font-['Inter'] text-[#7d7676] w-10 shrink-0">
                                            Price
                                        </div>
                                        <div className="font-['Inter'] text-[#7d7676] w-16 shrink-0">
                                            Quantity
                                        </div>
                                        <div className="font-['Inter'] text-[#7d7676] w-10 shrink-0">
                                            Total
                                        </div>
                                    </div>
                                    <div className="border-solid border-[#d9d9d9] h-px shrink-0 border-t border-b-0 border-x-0" />
                                </div>
                                <div className="flex flex-row items-center ml-16 mr-1">
                                    <img
                                        src={item.image}
                                        className="min-h-0 min-w-0 mr-8 w-12 shrink-0"
                                    />
                                    <div className="whitespace-nowrap font-['Inter'] font-medium mr-16 w-20 shrink-0">
                                        {item.name}
                                    </div>
                                    <div className="whitespace-nowrap font-['Inter'] mr-[139px] w-16 shrink-0">
                                        {" "}
                                        {item.price}
                                    </div>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        className="bg-white flex flex-col w-8 shrink-0 h-8 items-center py-1">
                                        <div className="font-['Inter'] w-2">-</div>
                                    </button>
                                    <div className="bg-white flex flex-col w-8 shrink-0 h-8 items-center py-1">
                                        <div className="font-['Inter'] text-[#7d7676] w-2">{item.quantity}</div>
                                    </div>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        className="bg-white flex flex-col mr-32 w-8 shrink-0 h-8 items-center py-1">
                                        <div className="font-['Inter'] w-3">+</div>
                                    </button>
                                    <div className="whitespace-nowrap font-['Inter'] mr-12 w-16 shrink-0">
                                        {" "}
                                        ${item.price * item.quantity}
                                    </div>
                                    <div className="bg-[#ff6c6c] flex flex-col w-24 shrink-0 h-10 items-center py-2 rounded-lg">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-lg font-['Inter'] font-medium text-white w-3/5">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="whitespace-nowrap text-lg font-['Inter'] font-medium mr-10 w-40">
                            Total Price: {totalPrice}
                        </div>
                        <div className="bg-[#001066] flex flex-col justify-center mr-10 h-10 shrink-0 items-center rounded-lg">
                            <button className="text-lg font-['Inter'] font-medium text-white w-1/2 mx-10">
                                Checkout
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}