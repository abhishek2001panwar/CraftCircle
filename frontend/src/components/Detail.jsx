import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationArrow, FaClock, FaArrowLeft, FaBriefcase, FaStar } from 'react-icons/fa';


function Detail() {
  const { id } = useParams();
  const [business, setBusiness] = useState({
    title: "",
    image: "",
    description: "",
    location: "",
    openingTime: "",
    closingTime: "",
  });

  useEffect(() => {
    const getOnePost = async () => {
      try {
        const response = await fetch(`/api/v1/posts/getOnePost/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setBusiness(data.post);
      } catch (error) {
        console.log("Failed to fetch the post:", error);
      }
    };
    getOnePost();
  }, [id]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-md rounded-lg mt-10">
      <button
        onClick={handleBack}
        className="flex items-center px-4 py-2 mb-4 rounded-full bg-white text-blue-400  border-1 border-blue-700 font-light "
      >
        <FaArrowLeft className="mr-2" />
        Go back
      </button>
      <div className="mb-6">
        <h2 className="text-3xl font-light mb-2 text-center">Job Details</h2>
        <hr className="border-gray-200" />
      </div>
      <div className="mb-6 text-center">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Post Name:
        </label>
        <h2 className="text-2xl font-light text-center mb-4">
          {business.title}
        </h2>
      </div>
      <div className="flex justify-center mb-6">
        <div className="relative w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img
            src={business.image}
            alt={business.title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex-col  md:flex items-center justify-center space-x-4 mb-4 mt-10">
        <div className="flex items-center">
          <FaLocationArrow className="text-gray-600 md:mr-2" />
          <label className="block text-sm font-medium text-gray-700 mr-2">
            Location:
          </label>
          <span className="text-gray-600 ml-1">{business.location}</span>
        </div>
        <div className="flex items-center">
          <FaBriefcase className="text-gray-600 mr-2" />{" "}
          <label className="block text-sm font-medium text-gray-700">
            Role:
          </label>
          <span className="text-gray-600 ml-1 mr-2">
            {business.openingTime}
          </span>
          <FaStar className="text-gray-600 mr-2" />{" "}
          <label className="block text-sm mr-3 font-medium text-gray-700">
            Experience:
          </label>
          <span className="text-gray-600">{business.closingTime}</span>
        </div>
      </div>
      <div className="mb-6 mt-10">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description:
        </label>
        <p className="text-gray-800 text-lg leading-relaxed">
          {business.description}
        </p>
      </div>
    </div>
  );
}

export default Detail;
