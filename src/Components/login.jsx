import React from "react";

export const Login = () => {

    return (
        <div>
            <div className="overflow-hidden bg-white flex flex-col justify-between w-full h-[1284px] items-center pt-6 pb-[501px] px-8">
                <div className="self-stretch flex flex-row justify-between mr-4 items-start">
                    <div className="relative flex flex-col mb-3 w-40 shrink-0 items-start">
                        <div className="text-lg font-['Inter'] font-medium text-[#115586] absolute top-8 left-14 h-6 w-2/3">
                            Azubi<div className="font-['Armata'] text-[#001066] contents">Shop</div>
                        </div>
                        <img
                            src="https://file.rendit.io/n/YDl84uJ5JsvgPhnt4jog.png"
                            className="min-h-0 min-w-0 relative w-20"
                        />
                    </div>
                    <div className="self-end flex flex-row gap-12 items-center">
                        <div className="whitespace-nowrap font-['Inter'] font-medium text-black/80 w-40 shrink-0">
                            New to AzubiShop ?
                        </div>
                        <div className="bg-[#f5f5f5] flex flex-col justify-center w-56 shrink-0 h-12 px-10 rounded-lg">
                            <div className="whitespace-nowrap font-['Inter'] font-semibold">
                                Create an Account
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 h-[493px] shrink-0">
                    <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold self-center mb-16 w-20">
                        Sign in
                    </div>
                    <div className="whitespace-nowrap font-['Inter'] self-start ml-1 w-[107px]">
                        Email Address
                    </div>
                    <div className="bg-[#f5f5f5] h-20 shrink-0 mb-3 ml-px rounded-lg" />
                    <div className="font-['Inter'] self-start w-20 mb-px ml-1">Password</div>
                    <div className="bg-[#f5f5f5] h-20 shrink-0 mb-6 mr-px rounded-lg" />
                    <div className="bg-[#001066] flex flex-col justify-center mr-px h-20 shrink-0 items-center rounded-lg">
                        <div className="whitespace-nowrap font-['Inter'] font-semibold text-white w-12">
                            Sign in
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}