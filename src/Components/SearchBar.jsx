import React from "react";

export const SearchBar = ({ setSearchQuery, searchQuery }) => {

    return (
        <div className="bg-[#f5f5f5] self-center flex flex-row mb-1 gap-2 w-3/5 h-16 shrink-0 items-center px-4 rounded">
            <img
                src="https://file.rendit.io/n/KsXJemYiUFuYk3qpo9D7.svg"
                className="min-h-0 min-w-0 w-6 shrink-0"
            />
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products"
                className="font-['Inter'] font-medium text-[#7d7676] w-[95%] shrink-0" />
        </div>
    );
}