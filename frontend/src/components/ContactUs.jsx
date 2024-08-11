import React from "react";

function ContactUs() {
  return (
    <>
      <section className="py-12 bg-[#f4f4f4] text-black">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row">
          {/* First Section: Contact Form */}
          <div className="lg:w-3/5 w-full mb-8 lg:mb-0 lg:pr-8">
            <h2 className="text-5xl font-light mb-6">Contact Us</h2>
            <form
              action="#"
              method="POST"
              className="bg-white p-8 rounded-lg "
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-lg font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="subject"
                  id="subject"
                  name="subject"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-full rounded-bl-sm  text-lg font-light"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Second Section: Contact Details */}
          <div className="lg:w-2/5 w-full bg-[#4cfc0f] p-8 rounded-3xl ">
            <h3 className="text-2xl font-light mb-4">Our Address</h3>
            <p className="mb-4">
              <strong>500 Terry Francine Street,</strong><br />
              San Francisco, CA 94158
            </p>
            <p className="mb-4">
              <strong>Email:</strong> info@mysite.com
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> 123-456-7890
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
