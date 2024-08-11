import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#f4f4f4] text-black">
        <div className="container border-t-black border-[1px] mx-auto px-4 py-12 flex flex-col lg:flex-row">
          {/* First Section */}
          <div className="lg:w-7/10 w-full mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-[86px]  font-medium mt-10 leading-none mb-10">Empowering Through Craft</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                {/* <h3 className="text-xl font-light mb-4">Contact Us</h3> */}
                <p className="mb-2">500 Terry Francine Street,</p>
                <p className="mb-2">San Francisco, CA 94158</p>
                <p className="mb-2">info@mysite.com</p>
                <p className="mb-2">123-456-7890</p>
              </div>
              <div>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">LinkedIn</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Instagram</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Facebook</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mb-2">
                    <a href="#about" className="hover:underline">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="#contact" className="hover:underline">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="lg:w-3/10 w-full flex items-center justify-center lg:justify-end">
            <p className="text-sm text-center lg:text-right">
              © 2035 by VISTAR. Made with VISTAR
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
