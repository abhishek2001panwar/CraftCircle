// Profile.js
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="flex flex-col  items-center p-6 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="relative mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
          />
          <div className="absolute bottom-0 right-0 bg-indigo-500 p-2 rounded-full">
            {/* Replace with an icon for editing profile */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 4.828a4 4 0 015.656 5.656L8 20H3v-5l12.828-12.828z"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
        <p className="text-lg text-gray-600 mb-4">
          Software Developer | Tech Enthusiast
        </p>
        <p className="text-center text-gray-500 mb-6">
          Passionate about technology and coding. Experienced in building web
          applications and always eager to learn new technologies.
        </p>
        <div className="flex space-x-4 mb-6">
          <a
            href="mailto:john.doe@example.com"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.5 5 7.5-5m0 8l-7.5-5L3 16m18-8v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8m4 4h8m-4 0v4"
              />
            </svg>
            john.doe@example.com
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.003 5.636A1.25 1.25 0 013.25 4.5h14.5a1.25 1.25 0 011.247 1.136L20 8.75v6.5l-1.253 2.25A1.25 1.25 0 0118.75 19.5H3.25a1.25 1.25 0 01-1.247-1.136L1 15.25v-6.5l1.253-2.25z"
              />
            </svg>
            +1 (234) 567-890
          </a>
        </div>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/johndoe"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/johndoe"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/johndoe"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
