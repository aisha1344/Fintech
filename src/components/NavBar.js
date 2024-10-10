'use client'

import Image from "next/image";
import Link from "next/link";
import { menuItems } from "../../public/data/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "../../public/images/logofit.png";
import rightSideImage from "../../public/images/bigboss.jpg";


const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50); // Set the fixed state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white shadow-md transition-all duration-600 ${isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-lg' : 'relative'}`}>
      <div className="container mx-auto px-4 py-4 sm:px-6 ">
        <div className="flex items-center justify-between h-14">
          
          {/* Left section with logo and navigation */}
          <div className="flex items-center flex-grow">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  width={150}
                  height={150}
                  className="sm:w-[140px] lg:w-[200px] h-auto"
                />
              </Link>
            </div>

            {/* Primary navigation */}
            <div className="ml-6 flex items-center space-x-8 flex-grow">
              {menuItems.map((item) =>
                item.submenu ? (
                  <div
                    key={item.label}
                    onClick={() => {
                      if (item.label === "Banking Solutions") {
                        setIsDropdownOpen((prev) => !prev);
                        setIsInsightsDropdownOpen(false);
                      } else {
                        setIsInsightsDropdownOpen((prev) => !prev);
                        setIsDropdownOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className={`inline-flex items-center text-lg font-medium px-3 py-2 ${isActive(item.href) ? "text-blue-800" : "text-black"} hover:text-gray-700`}
                    >
                      {item.label}
                      <svg
                        className="ml-1 mt-1 h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Dropdown menu */}
                    {(isDropdownOpen && item.label === "Banking Solutions") || (isInsightsDropdownOpen && item.label === "Products") ? (
                      <div className="absolute left-0 mt-6 py-6 w-[90%] mx-24 rounded-md bg-gray-50 ring-1 ring-black ring-opacity-5 z-30 flex">
                        {/* Left Side: Cards */}
                        <div className="w-2/3">
                          <h3 className="font-semibold px-6 text-xl md:text-2xl text-gray-900 mb-6">
                            {item.label}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block p-3 rounded-lg bg-white hover:bg-gray-100 shadow-sm transition transform hover:scale-105"
                              >
                                <div className="flex items-center space-x-3">
                                  {/* Icon */}
                                  <div className="text-blue-600 text-3xl">
                                    <subItem.icon />
                                  </div>
                                  {/* Text */}
                                  <div>
                                    <h4 className="text-md font-semibold text-black">
                                      {subItem.label}
                                    </h4>
                                    <p className="text-gray-600 text-sm mt-1">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-1/3">
                          <Image
                            src={rightSideImage}
                            alt={item.label}
                            className="object-cover w-full h-full rounded-xl pr-6"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`text-lg font-medium px-3 py-2 ${isActive(item.href) ? "text-blue-800" : "text-black"} hover:text-gray-700`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right section with search icon */}
          <div className="flex items-center">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Search"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
