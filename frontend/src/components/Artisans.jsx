import React from "react";

function Artisans() {
  return (
    <div >
      <section className="container  max-w-7xl mx-auto my-8 px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-16 text-center ">
          Meet Our Artisans
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 ">
          {/* Artisan Card */}
          <div className="bg-white p-3 rounded-xl hover:bg-zinc-300 hover:text-white transition-all delay-100  border-2 border-gray artisan-card">
            {/* <img src="https://via.placeholder.com/400x300" alt="Artisan Image" className="w-full h-48 object-cover rounded-lg mb-4" /> */}
            <h2 className="text-xl font-semibold  text-gray-800 hover:text-white  mb-32">
              Abhishek Panwar
            </h2>
          </div>
          <div className="bg-white p-3 rounded-xl hover:bg-zinc-300 hover:text-white transition-all delay-100  border-2 border-gray artisan-card">
            {/* <img src="https://via.placeholder.com/400x300" alt="Artisan Image" className="w-full h-48 object-cover rounded-lg mb-32" /> */}
            <h2 className="text-xl font-semibold hover:text-white text-gray-800 mb-32">
              Artisan Name
            </h2>
          </div>
          <div className="bg-white p-3 rounded-xl hover:bg-zinc-300 hover:text-white transition-all delay-100  border-2 border-gray artisan-card">
            {/* <img src="https://via.placeholder.com/400x300" alt="Artisan Image" className="w-full h-48 object-cover rounded-lg mb-4" /> */}
            <h2 className="text-xl font-semibold hover:text-white text-gray-800 mb-32">
              Abhishek Panwar
            </h2>
          </div>
          <div className="bg-white p-3 rounded-xl hover:bg-zinc-300 hover:text-white transition-all delay-100  border-2 border-gray artisan-card">
            {/* <img src="https://via.placeholder.com/400x300" alt="Artisan Image" className="w-full h-48 object-cover rounded-lg mb-32" /> */}
            <h2 className="text-xl font-semibold hover:text-white text-gray-800 mb-32">
              Artisan Name
            </h2>
          </div>
          <div className="bg-white p-3 rounded-xl hover:bg-zinc-300 hover:text-white transition-all delay-100  border-2 border-gray artisan-card">
            {/* <img src="https://via.placeholder.com/400x300" alt="Artisan Image" className="w-full h-48 object-cover rounded-lg mb-4" /> */}
            <h2 className="text-xl font-semibold hover:text-white text-gray-800 mb-32">
              Abhishek Panwar
            </h2>
          </div>
          <div className="bg-white p-3 rounded-xl hover:bg-zinc-300 hover:text-white transition-all delay-100  border-2 border-gray artisan-card">
            {/* <img src="https://via.placeholder.com/400x300" alt="Artisan Image" className="w-full h-48 object-cover rounded-lg mb-32" /> */}
            <h2 className="text-xl font-semibold hover:text-white text-gray-800 mb-32">
              Artisan Name
            </h2>
          </div>

          {/* Repeat Artisan Card for more artisans */}
        </div>
      </section>
    </div>
  );
}

export default Artisans;
