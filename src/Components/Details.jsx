import React from "react";
import paperBag from "../assest/Paperbag.png";

export const Details = () => {

    return (
        <div>
            <div className="overflow-hidden bg-white flex flex-col justify-between pb-[481px] w-full h-[1284px]">
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-row gap-px h-[115px] shrink-0 items-center px-10">
                    <div className="relative flex flex-col mr-[483px] w-40 shrink-0 items-start">
                        <div className="text-lg font-['Inter'] font-medium text-[#115586] absolute top-8 left-12 h-6 w-2/3">
                            Azubi<div className="font-['Armata'] text-[#001066] contents">Shop</div>
                        </div>
                        <img
                            src={paperBag}
                            className="min-h-0 min-w-0 relative w-20"
                        />
                    </div>
                    <div className="font-['Inter'] font-medium text-[#001066] mr-6 w-12 shrink-0">
                        Home
                    </div>
                    <div className="font-['Inter'] font-medium text-[#7d7676] w-8 shrink-0">
                        Cart
                    </div>
                    <div className="shadow-[0px_2px_2px_0px_rgba(0,_0,_0,_0.25)] bg-[#001066] flex flex-col mr-[483px] w-5 shrink-0 items-center pt-0 pb-px px-1 rounded-sm">
                        <div className="font-['Inter'] font-medium text-white w-full">1</div>
                    </div>
                    <div className="bg-[#d9d9d9] flex flex-col h-8 items-center py-2 rounded">
                        <div className="font-['Inter'] font-medium text-white w-1/2 mx-8">
                            Logout
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-16 items-center ml-[177px] mr-[114px]">
                    <img
                        src="https://file.rendit.io/n/zNxTc1nu01F7Xf7bBJJl.png"
                        className="min-h-0 min-w-0"
                    />
                    <div className="self-start flex flex-col mt-16 gap-2 w-1/2 items-start">
                        <div className="whitespace-nowrap text-4xl font-['Inter'] font-semibold w-40">
                            Men Shirt
                        </div>
                        <div className="font-['Inter'] leading-[26.3px] self-stretch h-[37.59%] mb-1 ml-px">
                            Lorem ipsum dolor sit amet consectetur. Nunc morbi ipsum urna lectus.
                            Nibh eu aliquam tellus feugiat eu venenatis. Neque non porttitor
                            pellentesque etiam diam duis fringilla. Integer justo amet vitae
                            scelerisque purus aliquet. Vitae dui duis tellus consequat nisl. Sit sem
                            leo arcu.
                        </div>
                        <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold leading-[39.5px] w-24 mb-3 ml-px">
                            $ 29.00
                        </div>
                        <div className="bg-[#001066] flex flex-col justify-center ml-px w-3/5 h-12 shrink-0 items-center rounded-lg">
                            <div className="whitespace-nowrap text-lg font-['Inter'] font-semibold leading-[29.6px] text-white w-24">
                                Add to Cart
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}