import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import axios from 'axios';

const Createresume = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    description: "",
    skills: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    for (const key in resumeData) {
      formData.append(key, resumeData[key]);
    }
    if (profilePicture) {
      formData.append('image', profilePicture);
    }

    try {
      const response = await axios.post('/api/v1/resume/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200 || response.status === 201) {
        setResumeData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          description: "",
          skills: "",
        });
        setProfilePicture(null);
        setSuccess("Resume submitted successfully!");
      } else {
        setError(`Failed to submit form: ${response.statusText}`);
      }
    } catch (error) {
      if (error.response) {
        setError(`Failed to submit form: ${error.response.statusText}`);
      } else if (error.request) {
        setError("Failed to submit form: No response received");
      } else {
        setError(`Failed to submit form: ${error.message}`);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Resume</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={resumeData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={resumeData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={resumeData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center">
            <FaLinkedin className="mr-2 text-blue-600" />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Profile"
              value={resumeData.linkedin}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex items-center">
            <FaGithub className="mr-2 text-gray-800" />
            <input
              type="text"
              name="github"
              placeholder="GitHub Profile"
              value={resumeData.github}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={resumeData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Skills</label>
          <textarea
            name="skills"
            value={resumeData.skills}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <div className="mt-1 flex items-center">
            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
              <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 0v24H0V0h24z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-6v2h4v-2h3l-5-5-5 5h3z" />
              </svg>
            </span>
            <input
              type="file"
              onChange={handleFileChange}
              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button size="xs" radius="xs" color="primary" variant="ghost" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Createresume;
