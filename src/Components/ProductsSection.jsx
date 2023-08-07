import React from "react";
import alonziDress from "../assest/alonzidress.png";
import longSleeves from "../assest/longsleeves.png";
import mensWatch from "../assest/watch.png";
import mensShirt from "../assest/menshirt.png";
import nikeSneaker from "../assest/nikesneaker.png";
import pumaSneaker from "../assest/pumasneaker.png";
import jeans from "../assest/jeans.png";
import cap from "../assest/cap.png";

export const Products = () => {

    return (
        <div>
            <div className="grid grid-cols-4 gap-8 justify-center items-center mx-[5%]">
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded">
                    <img
                        src={mensShirt}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-20">
                            Men's Shirt
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-16 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-16 shrink-0">
                            $ 29.00
                        </div>
                    </div>
                </div>
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded">
                    <img
                        src={nikeSneaker}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-24">
                            Sneaker Nike
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-16 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-16 shrink-0">
                            $ 39.00
                        </div>
                    </div>
                </div>
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between mr-px gap-4 p-2 rounded">
                    <img
                        src={pumaSneaker}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-[110px]">
                            Puma Sneaker
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-16 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-16 shrink-0">
                            $ 30.00
                        </div>
                    </div>
                </div>
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded">
                    <img
                        src={alonziDress}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-24">
                            Alonzi dress
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-20 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-12 shrink-0">
                            $ 19.00
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-8 justify-center items-center mx-[5%] mt-7">
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded">
                    <img
                        src={mensWatch}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-20">
                            Men's watch
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-20 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-12 shrink-0">
                            $ 16.00
                        </div>
                    </div>
                </div>
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between mr-px gap-4 p-2 rounded">
                    <img
                        src={cap}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-16">
                            Men cap
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-20 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-12 shrink-0">
                            $ 10.00
                        </div>
                    </div>
                </div>
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded">
                    <img
                        src={jeans}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-24">
                            Ladies Jeans
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-16 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-16 shrink-0">
                            $ 40.00
                        </div>
                    </div>
                </div>
                <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-col justify-between gap-4 p-2 rounded">
                    <img
                        src={longSleeves}
                        className="min-h-0 min-w-0 self-center"
                    />
                    <div className="flex flex-col mr-2 gap-2 items-start">
                        <div className="whitespace-nowrap font-['Inter'] font-medium w-24">
                            long sleeves
                        </div>
                        <div className="font-['Inter'] text-[#7d7676] self-stretch h-[63.51%]">
                            Lorem ipsum dolor sit amet consectetur. Eget orci viverra vel
                        </div>
                    </div>
                    <div className="flex flex-row mr-16 gap-5 items-center">
                        <div className="bg-[#001066] flex flex-col w-2/3 h-8 items-center py-2 rounded">
                            <div className="whitespace-nowrap font-['Inter'] text-white w-2/3">
                                Place order
                            </div>
                        </div>
                        <div className="whitespace-nowrap font-['Inter'] w-16 shrink-0">
                            $ 35.00
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}