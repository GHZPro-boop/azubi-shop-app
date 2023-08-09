import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import paperBag from "../assest/Paperbag.png";

export const Registration = (setIsLoggedIn) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegistration = () => {
        // To check if the email and password are not empty
        if (email && password) {
            setIsLoggedIn(true);
            navigate("/login");
        }
    };

    return (
        <div>
            <div className="overflow-hidden bg-white flex flex-col justify-between w-full h-[600px] items-center pt-6 pb-[50px] px-8">
                <div className="self-stretch flex flex-row justify-between mr-4 items-start">
                    <div className="relative flex flex-col mb-3 w-40 shrink-0 items-start">
                        <div className="text-lg font-['Inter'] font-medium text-[#115586] absolute top-8 left-14 h-6 w-2/3">
                            Azubi<div className="font-['Armata'] text-[#001066] contents">Shop</div>
                        </div>
                        <img
                            src={paperBag}
                            className="min-h-0 min-w-0 relative w-20"
                        />
                    </div>
                    <div className="self-end flex flex-row gap-8 items-center">
                        <div className="whitespace-nowrap font-['Inter'] font-medium text-black/80 w-2/5">
                            Already have account?
                        </div>
                        <Link to='/login' >
                            <div className="bg-[#f5f5f5] flex flex-col justify-center w-56 shrink-0 h-12 items-center rounded-lg">
                                <div className="whitespace-nowrap font-['Inter'] font-semibold w-12">
                                    Sign in
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 h-[648px] shrink-0">
                    <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold self-center mb-16 w-2/5">
                        Create an account
                    </div>
                    <div className="whitespace-nowrap font-['Inter'] self-start ml-1 w-[107px]">
                        Email Address
                    </div>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="123@gmail.com"
                        className="bg-[#f5f5f5] h-20 shrink-0 mb-3 ml-px pl-2 rounded-lg" />
                    <div className="font-['Inter'] self-start w-20 mb-px ml-1">Password</div>
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#f5f5f5] h-20 shrink-0 mb-6 mr-px pl-2 rounded-lg" />
                    <div className="whitespace-nowrap font-['Inter'] self-start w-[139px] mb-px ml-1">
                        Confrim Password
                    </div>
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-[#f5f5f5] h-20 shrink-0 mb-6 mr-px pl-2 rounded-lg" />
                    <div className="bg-[#001066] flex flex-col justify-center mr-px h-20 shrink-0 items-center rounded-lg">
                        <button onClick={handleRegistration} className="whitespace-nowrap font-['Inter'] font-semibold text-white w-[142px]">Create an Account</button>
                    </div>
                </div>
            </div>

        </div >
    );
}