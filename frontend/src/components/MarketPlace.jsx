// Marketplace.js
import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Marketplace = () => {
  return (
    <div className="p-6 bg-[#f4f4f4] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-grow">
            {/* <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute top-3 right-3 text-gray-500" /> */}
          </div>
          {/* <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <FaFilter className="mr-2" />
            Filter
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Link
            to={""}
            className="bg-zinc-200 border  rounded-3xl p-6 flex flex-col items-start"
          >
            <img
              src={`https://media.istockphoto.com/id/1270558747/photo/bars-of-handmade-soap-with-lavender.webp?b=1&s=170667a&w=0&k=20&c=uIbdKXdoFtFpKYRna8JnZCP80-ubcIfkZUzNDjqCbAc=`}
              alt={`Craft `}
              className=" rounded-md h-20 w-20 object-cover mb-7"
            />
            <h3 className="text-2xl font-semibold mb-2">Ancient Paint </h3>
            <p className="text-md   mb-4 ">
              This is a short description of Craft . It highlights the unique
              features and craftsmanship involved. features and craftsmanship
              involved.
            </p>
            <div className="flex justify-center gap-32 items-center">
              <p className="text-lg font-semibold">Price: $45</p>
              <p className="text-md text-gray-500"></p>
              <FaShoppingCart />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
