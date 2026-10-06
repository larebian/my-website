import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserShield,
  FaBars,
  FaTimes,
  FaFileDownload,
  FaPhoneAlt,
  FaEnvelope,
  FaBullhorn,
} from "react-icons/fa";

import logo from "../assets/images/logo.jpg";

// 1. Navigation Data Configuration
const NAV_DROPDOWNS = [
  {
    key: "admission",
    label: "Admissions",
    links: [
      { to: "/admission", label: "Online Admission" },
      {
        href: "/admission-form.pdf",
        label: "Admission Form (PDF)",
        download: "Admission-Form.pdf",
        isDownload: true,
      },
      { to: "/fee-structure", label: "Fee Structure" },
      { to: "/admission-policy", label: "Admission Policy" },
      { to: "/scholarships", label: "Scholarships" },
    ],
  },
  {
    key: "academics",
    label: "Academics",
    links: [
      { to: "/pre-school", label: "Pre School" },
      { to: "/primary", label: "Primary Section" },
      { to: "/middle", label: "Middle Section" },
      { to: "/secondary", label: "Secondary Section" },
      { to: "/higher-secondary", label: "Higher Secondary" },
      { to: "/curriculum", label: "Curriculum" },
      { to: "/subjects", label: "Subjects" },
      { to: "/timetable", label: "Time Table" },
      { to: "/results", label: "Examination Results" },
    ],
  },
  {
    key: "campus",
    label: "Campus",
    links: [
      { to: "/principal-message", label: "Principal Message" },
      { to: "/vision-mission", label: "Vision & Mission" },
      { to: "/computer-lab", label: "Computer Lab" },
      { to: "/science-lab", label: "Science Lab" },
      { to: "/library", label: "Library" },
      { to: "/sports", label: "Sports" },
      { to: "/transport", label: "Transport" },
    ],
  },
  {
    key: "studentLife",
    label: "Student Life",
    links: [
      { to: "/events", label: "Events" },
      { to: "/achievements", label: "Achievements" },
      { to: "/clubs", label: "Clubs" },
      { to: "/news", label: "News" },
      { to: "/calendar", label: "Academic Calendar" },
    ],
  },
];

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  const navRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const isDropdownActive = (links) =>
    links.some((link) => link.to && location.pathname === link.to);

  const toggleMobileAccordion = (menu) => {
    setMobileAccordion((prev) => (prev === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAccordion(null);
    setActiveDropdown(null);
  };

  // Close menus on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Outside click listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkAnimationClass = (active) => `
    relative py-2 transition-colors duration-200 block hover:text-blue-700 focus:outline-none focus:ring-0
    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-blue-700 after:rounded-full
    after:transition-transform after:duration-300 after:ease-out after:origin-left
    ${active ? "text-blue-700 font-bold after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}
  `;

  return (
    <header className="w-full shadow-sm" ref={navRef}>
      {/* 0. Top Marquee Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-800">
        <div className="max-w-[1400px] mx-auto flex items-center gap-3 overflow-hidden">
          <Link
            to="/admission"
            className="bg-yellow-400 text-blue-950 font-extrabold text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1 shadow-sm hover:bg-yellow-300 transition-colors focus:outline-none"
          >
            <FaBullhorn /> Apply Now
          </Link>
          <Link to="/admission" className="w-full overflow-hidden block group focus:outline-none">
            <marquee scrollamount="6" className="font-bold tracking-wide text-blue-100 group-hover:text-yellow-300 transition-colors cursor-pointer">
              🎉 Admissions Open for Session 2026-27! Click here to fill out the online admission form &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; 🚀 Learn Today • Lead Tomorrow at The Lareb Public School!
            </marquee>
          </Link>
        </div>
      </div>

      {/* 1. Top Announcement Bar */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4 sm:px-8 border-b border-blue-800">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="bg-yellow-400 text-blue-950 font-extrabold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 flex items-center gap-1">
              <FaBullhorn /> Notice
            </span>
            <p className="truncate text-blue-100">
              Admissions open for Session 2026-2027! Apply online or visit campus today.
            </p>
          </div>

          <div className="flex items-center gap-5 shrink-0 text-blue-200">
            <a href="tel:+923003743944" className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none">
              <FaPhoneAlt size={11} className="text-yellow-400" />
              <span>+92 300 3743944</span>
            </a>
            <span className="hidden sm:inline text-blue-700">|</span>
            <a href="mailto:info@larebschool.edu.pk" className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none">
              <FaEnvelope size={11} className="text-yellow-400" />
              <span>info@larebschool.edu.pk</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-6 py-2.5">
          
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center gap-3 shrink-0 group focus:outline-none">
            <img
              src={logo}
              alt="The Lareb Public School Logo"
              className="w-12 h-12 rounded-full border-2 border-blue-700 object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-extrabold text-blue-900 tracking-tight whitespace-nowrap">
                The Lareb Public School
              </h1>
              <p className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase">
                Learn Today • Lead Tomorrow
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-semibold text-gray-700 whitespace-nowrap">
            <li>
              <Link to="/" className={navLinkAnimationClass(isActive("/"))}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className={navLinkAnimationClass(isActive("/about"))}>
                About
              </Link>
            </li>

            {/* Dropdowns */}
            {NAV_DROPDOWNS.map((dropdown) => (
              <li
                key={dropdown.key}
                className="relative py-3"
                onMouseEnter={() => setActiveDropdown(dropdown.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  aria-expanded={activeDropdown === dropdown.key}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 focus:outline-none ${navLinkAnimationClass(
                    isDropdownActive(dropdown.links)
                  )}`}
                >
                  {dropdown.label}
                  <FaChevronDown
                    size={9}
                    className={`transition-transform duration-200 ${
                      activeDropdown === dropdown.key ? "rotate-180 text-blue-700" : "text-gray-400"
                    }`}
                  />
                </button>

                {activeDropdown === dropdown.key && (
                  <div className="absolute top-[90%] left-0 pt-2 w-56 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {dropdown.links.map((link, idx) =>
                        link.isDownload ? (
                          <a
                            key={idx}
                            href={link.href}
                            download={link.download}
                            className="flex items-center justify-between px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none"
                          >
                            <span>{link.label}</span>
                            <FaFileDownload className="text-blue-600 size-3.5" />
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={link.to}
                            className="block px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none"
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}

            <li>
              <Link to="/gallery" className={navLinkAnimationClass(isActive("/gallery"))}>
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact" className={navLinkAnimationClass(isActive("/contact"))}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Buttons (Portal Login & Apply Now) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            
            {/* Portal Login Dropdown */}
            <div
              className="relative py-3"
              onMouseEnter={() => setActiveDropdown("login")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="border-2 border-blue-700 text-blue-700 font-bold text-xs uppercase tracking-wider px-5 py-2 rounded-xl hover:bg-blue-700 hover:text-white transition-all duration-200 focus:outline-none">
                Portal Login
              </button>

              {activeDropdown === "login" && (
                <div className="absolute right-0 top-[90%] pt-2 w-52 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                    <Link
                      to="/student/login"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none"
                    >
                      <FaUserGraduate className="text-blue-600 size-4" />
                      Student Portal
                    </Link>
                    <Link
                      to="/teacher/login"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none"
                    >
                      <FaChalkboardTeacher className="text-blue-600 size-4" />
                      Teacher Portal
                    </Link>
                    {/* Updated Admin Portal Route */}
                    <Link
                      to="/admin-portal"
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors focus:outline-none"
                    >
                      <FaUserShield className="text-blue-600 size-4" />
                      Admin Portal
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Apply Now */}
            <Link
              to="/admission"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl shadow-md shadow-blue-700/20 hover:shadow-blue-700/35 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-700 p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* 3. Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block font-semibold focus:outline-none ${isActive("/") ? "text-blue-700 font-bold" : "text-gray-800"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block font-semibold focus:outline-none ${isActive("/about") ? "text-blue-700 font-bold" : "text-gray-800"}`}
            >
              About
            </Link>

            <div className="pt-2 border-t border-gray-100 space-y-2">
              <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Navigation</p>

              {NAV_DROPDOWNS.map((dropdown) => (
                <div key={dropdown.key}>
                  <button
                    onClick={() => toggleMobileAccordion(dropdown.key)}
                    className="flex items-center justify-between w-full py-1.5 text-sm font-semibold text-gray-800 hover:text-blue-700 focus:outline-none"
                  >
                    {dropdown.label}
                    <FaChevronDown
                      size={10}
                      className={`transition-transform ${
                        mobileAccordion === dropdown.key ? "rotate-180 text-blue-700" : ""
                      }`}
                    />
                  </button>
                  {mobileAccordion === dropdown.key && (
                    <div className="pl-4 py-2 space-y-2 border-l-2 border-blue-100 mt-1">
                      {dropdown.links.map((link, idx) =>
                        link.isDownload ? (
                          <a
                            key={idx}
                            href={link.href}
                            download={link.download}
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between text-xs text-blue-700 font-semibold focus:outline-none"
                          >
                            <span>{link.label}</span>
                            <FaFileDownload size={12} />
                          </a>
                        ) : (
                          <Link
                            key={idx}
                            to={link.to}
                            onClick={closeMobileMenu}
                            className="block text-xs text-gray-600 hover:text-blue-700 focus:outline-none"
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/gallery"
                onClick={closeMobileMenu}
                className={`block text-sm font-semibold focus:outline-none ${isActive("/gallery") ? "text-blue-700 font-bold" : "text-gray-800"}`}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block text-sm font-semibold focus:outline-none ${isActive("/contact") ? "text-blue-700 font-bold" : "text-gray-800"}`}
              >
                Contact
              </Link>
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Portals</p>
              <Link
                to="/student/login"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 py-1 hover:text-blue-700 focus:outline-none"
              >
                <FaUserGraduate className="text-blue-700" /> Student Portal
              </Link>
              <Link
                to="/teacher/login"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 py-1 hover:text-blue-700 focus:outline-none"
              >
                <FaChalkboardTeacher className="text-blue-700" /> Teacher Portal
              </Link>
              {/* Updated Mobile Admin Portal Route */}
              <Link
                to="/admin-portal"
                onClick={closeMobileMenu}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 py-1 hover:text-blue-700 focus:outline-none"
              >
                <FaUserShield className="text-blue-700" /> Admin Portal
              </Link>
              <Link
                to="/admission"
                onClick={closeMobileMenu}
                className="text-center bg-blue-700 text-white font-bold text-sm py-3 rounded-xl mt-2 block shadow-md focus:outline-none"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;