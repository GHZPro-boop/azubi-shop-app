import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {

    return (
        <div>
            <div className="shadow-[1px_1px_8px_1px_rgba(0,_0,_0,_0.25)] overflow-hidden bg-white flex flex-row mb-6 gap-8 h-[100px] shrink-0 items-center px-5">
                <div className="relative flex mr-[486px] w-40 shrink-0 items-start">
                    <img
                        src="https://file.rendit.io/n/Dws2Vln7uHxeujrlSILd.png"
                        className="min-h-0 min-w-0 relative w-20"
                    />
                    <div>
                        <div className="text-lg font-['Inter'] font-medium text-[#115586] absolute top-8 left-15 h-6 w-2/3">
                            Azubi
                            <div className="font-['Armata'] text-[#001066] contents">
                                Shop
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-['Inter'] font-medium text-[#7d7676] hover:text-[#001066] w-12 shrink-0">
                    Home
                </div>
                <div className="font-['Inter'] font-medium text-[#7d7676] hover:text-[#001066] mr-[486px] w-8 shrink-0">
                    Cart
                </div>
                <Link to="/login" className="bg-[#001066] hover:whitespace-nowrap hover:bg-[#001066B2] flex flex-col h-10 items-center py-2 rounded">
                    <button className="font-['Inter'] font-medium text-white w-2/5 mx-8">Login</button>
                </Link>
            </div>
        </div>
    );
}