import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailOpen, IoCallOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  

  return (
    <section id="contact-section" className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-16 px-8 rounded-t-full">
      <p className='text-3xl font-bold text-center mb-6'>CONTACT ME</p>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Drop Me a Message</h2>
         
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-800 p-3 rounded-full">
                <IoCallOutline />
              </div>
              <span>+91 7780324009</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-800 p-3 rounded-full">
                <IoMdMail />
              </div>
              <span>kethamsanjay@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-800 p-3 rounded-full">
                <MdLocationOn />
              </div>
              <span>House No: 5-2-248/1/D, Musthafa Nagar, Khammam, Telangana.</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 rounded bg-black text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full py-3 rounded bg-black text-white" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full py-3 rounded bg-black text-white"></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-3 rounded">Send</button>
          </form>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://www.facebook.com/ketham.sanjay200424" target="_blank" rel="noopener noreferrer" className="bg-indigo-800 p-3 rounded-full">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/ketham_sanjay.24/" target="_blank" rel="noopener noreferrer" className="bg-indigo-800 p-3 rounded-full">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/ketham-sanjay-952485289/" target="_blank" rel="noopener noreferrer" className="bg-indigo-800 p-3 rounded-full">
          <FaLinkedin />
        </a>
        <a href="mailto:kethamsanjay@gmail.com?subject=Inquiry&body=Hello Ketham," className="bg-indigo-800 p-3 rounded-full">
          <IoMailOpen />
        </a>
        <a href="https://github.com/SanjayKetham" target="_blank" rel="noopener noreferrer" className="bg-indigo-800 p-3 rounded-full">
          <FaGithub />
        </a>
      </div>
      <div className="mt-8 text-center">
        <p>&copy;2024 - Sanjay,  All rights reserved</p>
      </div>
    </section>
  );
};

export default Contact;
