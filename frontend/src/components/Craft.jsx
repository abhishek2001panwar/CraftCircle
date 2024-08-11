import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Craft() {
  return (
    <div>
         <Navbar/>
      <section id="marketplace" className="p-8 bg-[#f4f4f4]">
       
        <div className="container mx-auto  max-w-6xl ">
          {/* Search and Filter */}
          <div className="flex justify-between items-center mb-6">
            {/* <input
              type="text"
              placeholder="Search for crafts..."
              className="p-2 border border-gray-300 rounded-lg w-full max-w-md"
            /> */}
            <div className="flex space-x-4">
              {/* <select className="p-2 border border-gray-300 rounded-lg">
                <option>Sort by</option>
                <option>Popularity</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select> */}
              {/* Add more filters as needed */}
            </div>
          </div>
          {/* Product Listings */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              {/* <a
                href="#"
                className="inline-block bg-zinc-200 text-black border-[1px] border-black py-1 px-6 rounded-full rounded-bl-sm text-lg font-light hover:bg-gray-800"
              >
                View Details
              </a> */}
            </Link>
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
              {/* <a
                href="#"
                className="inline-block bg-zinc-200 text-black border-[1px] border-black py-1 px-6 rounded-full rounded-bl-sm text-lg font-light hover:bg-gray-800"
              >
                View Details
              </a> */}
            </Link>
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
              {/* <a
                href="#"
                className="inline-block bg-zinc-200 text-black border-[1px] border-black py-1 px-6 rounded-full rounded-bl-sm text-lg font-light hover:bg-gray-800"
              >
                View Details
              </a> */}
            </Link>
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
              {/* <a
                href="#"
                className="inline-block bg-zinc-200 text-black border-[1px] border-black py-1 px-6 rounded-full rounded-bl-sm text-lg font-light hover:bg-gray-800"
              >
                View Details
              </a> */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Craft;
