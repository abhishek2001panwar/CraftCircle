import React from "react";

function About() {
  return (
    <>
      <section className="py-12 bg-[#f4f4f4] text-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg mb-4 leading-relaxed">
              <span className="block text-6xl mt-4">
                Welcome to CraftCircle!
              </span>
              <span className="block text-2xl mt-10">
                We are a virtual marketplace dedicated to connecting local artisans with customers who appreciate unique, handcrafted products.
              </span>
              <span className="block text-2xl mt-4">
                Our mission is to empower artisans by providing them with a platform to showcase their creativity and manage their inventory effectively.
              </span>
              <span className="block text-2xl  mt-4 mb-4">
                At CraftCircle, we believe in fostering a community where creativity and craftsmanship thrive, and where customers can discover beautiful, one-of-a-kind items.
              </span>
            </p>
            <p className="text-sm leading-relaxed">
              Whether you're a maker looking to expand your reach or a shopper seeking something special, CraftCircle is here to support and inspire you every step of the way.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-block bg-black text-white py-2 px-6 rounded-bl-sm rounded-full text-lg font-light hover:bg-gray-800"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
