import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom"; // Import Link component
import { useAuth } from "../context/Authcontext";
import toast, { Toaster } from "react-hot-toast";

function Hero() {
  const { isLoggedIn } = useAuth();

  const notify = () => toast("Please login to add a business");

  return (
    <div>
      <section className="relative ">
        <div className="container mx-auto px-6 py-52 text-center relative z-10">
          <h1 className="text-6xl font-['bellota'] font-light leading-tight">
            Welcome to Connectify
          </h1>
          <p className="mt-4 text-xl">
          Connecting job seekers with employers. Discover, apply, and engage with job opportunities around you.
          </p>
          <p className="mt-4 text-lg">
          Explore a wide variety of job opportunities and services right at your fingertips. From entry-level positions to executive roles, Connectify connects you with the job market and helps you find the perfect fit.
          </p>
          <p className="mt-4 text-lg">
          Whether you're a job seeker looking for your next career move or an employer aiming to find the best talent, Connectify is your go-to platform for fostering professional connections and growth.







          </p>
          <div className="mt-16 flex justify-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button size="xs" radius="full" color="primary" variant="ghost">
                  <Link to="/bussines"> Explore</Link>
                </Button>
                <Button size="xs" radius="full" color="primary" variant="ghost">
                  <Link to="/addbussiness">Add job post</Link>
                </Button>
              </>
            ) : (
              <>
              
                <Toaster />
                <Link to="/login">
                  <Button

                    
                    size="xs"
                    radius="full"
                    color="primary"
                    variant="ghost"
                  >
                    Explore
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    onClick={notify}
                    size="xs"
                    radius="full"
                    color="primary"
                    variant="ghost"
                  >
                    Add job post
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
