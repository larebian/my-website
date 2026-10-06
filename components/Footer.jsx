import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";

import logo from "../assets/images/logo.jpg";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="School Logo"
                className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
              />
              <div className="leading-tight">
                <h2 className="text-lg font-extrabold text-white tracking-tight">
                  The Lareb Public School
                </h2>
                <p className="text-[10px] font-semibold text-blue-400 tracking-wider uppercase">
                  Learn Today • Lead Tomorrow
                </p>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Empowering students with quality academic education, character development, and future-ready tech skills. Join us in shaping tomorrow's leaders.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-blue-400 text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-pink-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors duration-200"
                aria-label="YouTube"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4 border-l-4 border-blue-600 pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Curriculum
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> School Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Admissions & Portals */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4 border-l-4 border-blue-600 pl-2.5">
              Admissions & Portals
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/admission" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Online Admission
                </Link>
              </li>
              <li>
                <Link to="/fee-structure" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Fee Structure
                </Link>
              </li>
              <li>
                <Link to="/admission-policy" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Admission Policy
                </Link>
              </li>
              <li>
                <Link to="/student/login" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Student Login Portal
                </Link>
              </li>
              <li>
                <Link to="/teacher/login" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Teacher Login Portal
                </Link>
              </li>
              <li>
                <Link to="/admin/login" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <FaChevronRight className="text-blue-500 size-2.5" /> Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-white text-sm font-bold tracking-wider uppercase mb-4 border-l-4 border-blue-600 pl-2.5">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-500 size-4 shrink-0 mt-0.5" />
                <span>Main Campus, Huzori Muhalla Mirokhan, Kamber Shahdadkot, Sindh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-500 size-3.5 shrink-0" />
                <span>+92 300 3743944 / +92 3033882544</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500 size-3.5 shrink-0" />
                <span>info@thelarebpublicschool.edu.pk</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 The Lareb Public School. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;