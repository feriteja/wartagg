"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchInput() {
  const router = useRouter();
  const [SearchInput, setSearchInput] = useState("");

  const handleInput = () => {
    router.push(`/search?title=${SearchInput}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleInput();
    }
  };
  return (
    <div className="relative">
      <input
        onChange={(text) => setSearchInput(text.target.value)}
        onKeyDown={(a) => handleKeyPress(a)}
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-indigo-500"
      />
      <button
        onClick={() => handleInput()}
        className="absolute right-0 top-0 mt-1 mr-2"
      >
        {/* You can replace the search icon with your preferred icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchInput;
