import React, { useState } from "react";

const ContactUs = () => {
  // State to hold form data as an object
  const [data, setData] = useState({
    name: "",
    email: "",
    purpose: "",
    phoneNo: "",
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value, // Update the field matching the input's id
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    console.log("Form submitted with data:", data);
    // Here you can do things like:
    // - Send data to a server (API call)
    // - Show a success message
    // - Reset the form if needed
  };

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-12 xl:px-24 w-full"
      id="contact"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#fefefe] rounded-xl shadow-lg p-8 sm:p-10 md:p-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Contact Me
          </h2>
          <p className="text-center text-gray-500 mb-10 text-lg">
            Have a question, proposal, or just want to say hi? Fill out the form
            below!
          </p>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="col-span-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="you@example.com"
              />
            </div>

            {/* Purpose */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="purpose"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Purpose <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="purpose"
                value={data.purpose}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="What's this about?"
              />
            </div>

            {/* Phone (optional) */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="phoneNo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number <span className="text-gray-400 text-xs">(optional)</span>
              </label>
              <input
                type="tel"
                id="phoneNo"
                value={data.phoneNo}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Optional phone number"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-lg shadow transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
