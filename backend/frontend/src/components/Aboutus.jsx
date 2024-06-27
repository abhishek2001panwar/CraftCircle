import React from 'react';

function Aboutus() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
    <h1 className="text-3xl flex justify-center items-center font-['bellota']">About us</h1>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
      {/* Overview Card */}
      <div className="bg-white rounded-lg relative shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">About </h2>
          <p className="text-gray-700">
            Connectify is dedicated to connecting job seekers with employers in an efficient and effective manner. Our platform aims to streamline the job search process by providing comprehensive tools and resources for both candidates and companies.
          </p>
        </div>
      </div>
  
      {/* Mission and Vision Card */}
      <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Mission and Vision</h2>
          <p className="text-gray-700">
            Our mission at Connectify is to empower individuals by connecting them with opportunities that align with their career aspirations. We envision a future where every job seeker finds meaningful employment, and every employer finds the perfect match for their team.
          </p>
        </div>
      </div>
  
      {/* Core Values Card */}
      <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Core Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Empowerment through Opportunity</li>
            <li>Integrity and Transparency</li>
            <li>Continuous Innovation</li>
            <li>Community Engagement</li>
          </ul>
        </div>
      </div>
  
      {/* Team Card */}
      <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-700">
            Our team comprises dedicated professionals committed to revolutionizing the job search experience. We bring diverse backgrounds and expertise to ensure Connectify meets the needs of our users effectively.
          </p>
        </div>
      </div>
  
      {/* Community Impact Card */}
      <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Community Impact</h2>
          <p className="text-gray-700">
            Throughout our journey, Connectify has assisted numerous job seekers in finding employment opportunities. Here are some success stories from our community:
            <ul className="list-disc list-inside">
              <li>Testimonial 1</li>
              <li>Testimonial 2</li>
              <li>Testimonial 3</li>
            </ul>
          </p>
        </div>
      </div>
  
      {/* Contact Us Card */}
      <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or want to get in touch with us? Feel free to reach out at <a href="mailto:info@Connectify.com" className="text-blue-500 hover:underline">info@Connectify.com</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Aboutus;
