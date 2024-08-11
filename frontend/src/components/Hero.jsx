import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-[#f4f4f4] py-52 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-10">
            Unleashing Growth <br></br>for Artisans Through Our Marketplace
          </h1>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-2/5 px-3 mb-4 md:mb-0">
              <div className="bg-[#4cfc0f] p-6 rounded-tr-3xl shadow-lg">
                <h2 className="text-xl font-semibold mb-2">
                  Showcase Your Craft
                </h2>
                <p className="text-gray-700 mb-8">
                  Connect with a community of artisans and showcase your unique
                  creations in our virtual marketplace. Reach new customers and
                  grow your business.
                </p>
                <button className="bg-[#4cfc0f] mb-10 text-black px-8 py-2 rounded-md border-[1px] border-gray-800">
                  Get Started
                </button>
              </div>
            </div>

            {/* Second Box - 20% width */}
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2">
                  Explore Unique Crafts
                </h2>
                <p className="text-gray-700 mb-4">
                  Discover a wide variety of handcrafted items from talented
                  artisans. Find something special for yourself or a loved one.
                </p>
                <button className=" text-black px-4 py-2 rounded border-gray-200 border-[1px]">
                  Explore Now
                </button>
              </div>
            </div>

            {/* Third Box - Remaining width */}
            <div className="w-full md:w-2/5 px-2">
              <div className="bg-[#000000] text-white p-6 rounded-tl-3xl shadow-lg">
                <h2 className="text-xl font-semibold mb-2">
                  Grow Your Craft Business
                </h2>
                <p className="text-white mb-4">
                  Leverage our platform to manage your inventory, handle
                  transactions, and connect with a broader audience. Start
                  growing your craft business today.
                </p>
                <button className="bg-black text-white px-8 py-2 rounded-md border-[1px] border-white">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
