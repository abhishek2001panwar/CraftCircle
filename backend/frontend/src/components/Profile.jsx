import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineFileText } from 'react-icons/ai';
import { AiOutlineCheckCircle } from 'react-icons/ai';



function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/v1/user/profile", {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/v1/posts/getposts");
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error);
      }
    };

    const fetchResumes = async () => {
      try {
        const res = await axios.get("/api/v1/resume/getresumes"); // Replace with your actual API endpoint
        setResumes(res.data.resumes); // Assuming API returns an array of resumes
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setError(error);
      }
    };

    fetchProfile();
    fetchPosts();
    fetchResumes();
  }, []);

  if (!user || !posts || !resumes) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex justify-center items-center bg-blue-500 rounded-full w-32 h-32 mx-auto -mt-20">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="rounded-full w-28 h-28 object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-light mb-2 text-center">
            Welcome, {user.name}!
          </h1>
          {user.businessName && (
            <div className="mb-4">
              <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 rounded-md">
                <p className="font-bold">Company Name:</p>
                <p className="text-sm">{user.businessName}</p>
              </div>
            </div>
          )}
          <div className="border-b border-gray-200 mb-6"></div>
          <h2 className="text-xl font-light mb-2 text-center">
            Job posts: {posts.length}
          </h2>
          <ul>
            {posts.map((post) => (
              <li key={post._id} className="mb-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-gray-600">{post.description}</p>
                    <div className="flex justify-center gap-10 mt-10 items-center">
                      <Button
                        className="ml-2"
                        size="sm"
                        color="primary"
                        variant="ghost"
                      >
                        edit
                      </Button>
                      <Button
                        className="ml-2"
                        size="sm"
                        color="primary"
                        variant="ghost"
                      >
                        delete
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-black font-['bellota']">
            <h2 className="text-xl font-light mb-2 text-center">Resume</h2>
            {resumes.length > 0 ? (
              resumes.map((resume) => (
                <div
                  key={resume._id}
                  className="bg-white shadow-md rounded-lg p-4 mb-4"
                >
                  <div className="flex gap-52 overflow-hidden items-center mb-4">
                    {resume.image && (
                      <img
                        src={resume.image}
                        alt="Resume Image"
                        className="rounded-full w-60 h-52 object-cover "
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-light">{resume.name}</h3>
                      <p className="text-gray-600">
                        <FaLinkedin className="inline-block mr-2 text-blue-600" />
                        <a
                          href={resume.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          LinkedIn Profile
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <FaGithub className="inline-block mr-2 text-gray-800" />
                        <a
                          href={resume.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:underline"
                        >
                          GitHub Profile
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <AiOutlineMail className="inline-block mr-2 text-gray-800" />
                        {resume.email}
                      </p>
                      <p className="text-gray-600">
                        <AiOutlinePhone className="inline-block mr-2 text-gray-800" />
                        {resume.phone}
                      </p>
                      <p className="text-gray-600">
                        <AiOutlineFileText className="inline-block mr-2 text-gray-800" />
                        {resume.description}
                      </p>                  
            <h1></h1>     
                      <p className="text-gray-600">
                        <AiOutlineCheckCircle className="inline-block mr-2 text-gray-800" />
                        Skills: {resume.skills}
                      </p>
                     
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
               <div className="flex justify-center items-center">
               <p>No resume found.</p>
                <h1> Create Your Resume And showcase your skills</h1>
                
                  <Button
                    className="ml-2"
                    size="sm"
                    color="primary"
                    variant="ghost"
                  >
                    <Link
                  to="/createprofile"
                >Create</Link>


                  </Button>{" "}
               </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
