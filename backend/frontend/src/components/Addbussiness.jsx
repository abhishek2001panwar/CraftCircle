import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Authcontext";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function AddBusiness() {
  const { isLoggedIn } = useAuth(); // Assuming isLoggedIn provides user details including id
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    location: "",
    openingTime: "",
    closingTime: "",
    connectus:""
    
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // State to store image URL
  const notify = () => toast("Form submitted!");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", formData.image);
    data.append("location", formData.location);
    data.append("openingTime", formData.openingTime);
    data.append("closingTime", formData.closingTime);
    data.append("connectus", formData.connectus)
    data.append("userId", isLoggedIn.id); // Append userId to the form data

    try {
      const response = await axios.post(`/api/v1/posts/createpost`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!formData.image) {
        return toast.error("Please upload an image");
      }

      setMessage("Business successfully added!");
      toast.success("Business added successfully");

      setImageUrl(response.data.post.image);
      setError("");
      setFormData({
        title: "",
        description: "",
        image: null,
        location: "",
        openingTime: "",
        closingTime: "",
        connectus:""
      });

    } catch (error) {
      setMessage("");
      setError("Error submitting the form. Please check your input.");
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 font-bellota bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-light mb-6 text-center">Add Job Post</h2>
      {message && <p className="text-center text-green-500"> { formData ? `${message}` : 'Loading..' }   </p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <FaUser className="text-gray-600" />
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
        </div>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />

        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-gray-600" />
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
        </div>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />

        <div className="flex items-center space-x-2">
          <FaClock className="text-gray-600" />
          <label
            htmlFor="openingTime"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
        </div>
        <input
          type="text"
          id="openingTime"
          name="openingTime"
          value={formData.openingTime}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />

        <div className="flex items-center space-x-2">
          <FaClock className="text-gray-600" />
          <label
            htmlFor="closingTime"
            className="block text-sm font-medium text-gray-700"
          >
            Experience
          </label>
        </div>
        <input
          type="text"
          id="closingTime"
          name="closingTime"
          value={formData.closingTime}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Connection Email (where users can connect with you)
          </label>
          <input 
            id="connectus"
            name="connectus"
            type="email"
            value={formData.connectus}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
            required
          />
        </div>

        <button
          type="submit"
          onClick={notify}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#006fee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBusiness;
