import React from "react";
import logo from "../../assets/Chill Gamer.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center lg:items-start mb-6 lg:mb-0">
          <img className="size-20" src={logo} alt="" />
          <p className="text-center">
            <span className="text-3xl">Chill Gamer</span> <br />
            Your place for game reviews since 2024
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Services */}
          <div>
            <h6 className="font-semibold text-lg mb-3">Services</h6>
            <Link className="block text-gray-400 hover:text-white mb-2">
              Game Reviews
            </Link>
            <Link className="block text-gray-400 hover:text-white mb-2">
              Game News
            </Link>
            <Link className="block text-gray-400 hover:text-white">
              Community Features
            </Link>
          </div>

          {/* Company */}
          <div>
            <h6 className="font-semibold text-lg mb-3">Company</h6>
            <Link className="block text-gray-400 hover:text-white mb-2">
              About Us
            </Link>
            <Link className="block text-gray-400 hover:text-white mb-2">
              Contact
            </Link>
            <Link className="block text-gray-400 hover:text-white">
              Careers
            </Link>
          </div>

          {/* Legal */}
          <div>
            <h6 className="font-semibold text-lg mb-3">Legal</h6>
            <Link className="block text-gray-400 hover:text-white mb-2">
              Terms of Use
            </Link>
            <Link className="block text-gray-400 hover:text-white mb-2">
              Privacy Policy
            </Link>
            <Link className="block text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <Link
            to="https://www.facebook.com/rafiqul.islam.126222"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl" />
            {/* Adjust the size using Tailwind */}
          </Link>
          <Link
            to="https://www.instagram.com/rafiqul._.islam/"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl" />
          </Link>
          <Link
            to="https://x.com/RAFIQUL81739959"
            className="text-gray-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-6 text-center text-white">
        <p>Copyright © 2024 - All rights reserved by Chill Gamer</p>
      </div>
    </footer>
  );
};

export default Footer;
