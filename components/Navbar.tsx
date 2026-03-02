"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  
  // Mobile dropdown states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
      if (workRef.current && !workRef.current.contains(event.target as Node)) {
        setWorkDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileResourcesOpen(false);
    setMobileWorkOpen(false);
  };

  return (
    <nav className="w-full bg-white shadow-md transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src="/images/logo.png"
              alt="Africa CSID Logo"
              width={280}
              height={100}
              className="h-20 w-auto"
              style={{ width: 'auto', height: '80px' }}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            
            {/* About Us Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button 
                onClick={() => {
                  setAboutDropdownOpen(!aboutDropdownOpen);
                  setResourcesDropdownOpen(false);
                  setWorkDropdownOpen(false);
                }}
                className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                About Us
                <svg className={`w-4 h-4 ml-1 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-100">
                  <Link 
                    href="/about/whoweare" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Who We Are
                  </Link>
                  <Link 
                    href="/about/team" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link 
                    href="/about/platforms" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Platforms
                  </Link>
                </div>
              )}
            </div>

            {/* What We Do Link */}
            <Link
              href="/what-we-do"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              What We Do
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button 
                onClick={() => {
                  setResourcesDropdownOpen(!resourcesDropdownOpen);
                  setAboutDropdownOpen(false);
                  setWorkDropdownOpen(false);
                }}
                className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                Resources
                <svg className={`w-4 h-4 ml-1 transition-transform ${resourcesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {resourcesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-100">
                  <Link 
                    href="/resources/publications" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setResourcesDropdownOpen(false)}
                  >
                    Publications
                  </Link>
                  <Link 
                    href="/resources/blogs" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setResourcesDropdownOpen(false)}
                  >
                    News & Blogs
                  </Link>
                  <Link 
                    href="/resources/events" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setResourcesDropdownOpen(false)}
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>

            {/* Work With Us Dropdown */}
            <div className="relative" ref={workRef}>
              <button 
                onClick={() => {
                  setWorkDropdownOpen(!workDropdownOpen);
                  setAboutDropdownOpen(false);
                  setResourcesDropdownOpen(false);
                }}
                className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                Work With Us
                <svg className={`w-4 h-4 ml-1 transition-transform ${workDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {workDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-100">
                  <Link 
                    href="/work-with-us" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setWorkDropdownOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link 
                    href="/get-involved/volunteer" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setWorkDropdownOpen(false)}
                  >
                    Volunteer
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link href="/get-involved" className="bg-gold hover:bg-secondary-dark text-neutral font-semibold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-gray-700 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white py-4 border-t border-gray-100">
            <Link 
              href="/" 
              className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary text-lg"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            
            {/* Mobile About Us Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary text-lg"
              >
                About Us
                <svg className={`w-5 h-5 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="bg-gray-50">
                  <Link 
                    href="/about/whoweare" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Who We Are
                  </Link>
                  <Link 
                    href="/about/team" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Our Team
                  </Link>
                  <Link 
                    href="/about/platforms" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Platforms
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/what-we-do" 
              className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary text-lg"
              onClick={closeMobileMenu}
            >
              What We Do
            </Link>
            
            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary text-lg"
              >
                Resources
                <svg className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileResourcesOpen && (
                <div className="bg-gray-50">
                  <Link 
                    href="/resources/publications" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Publications
                  </Link>
                  <Link 
                    href="/resources/blogs" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    News & Blogs
                  </Link>
                  <Link 
                    href="/resources/events" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Events
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Work With Us Dropdown */}
            <div>
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary text-lg"
              >
                Work With Us
                <svg className={`w-5 h-5 transition-transform ${mobileWorkOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileWorkOpen && (
                <div className="bg-gray-50">
                  <Link 
                    href="/work-with-us" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>
                  <Link 
                    href="/get-involved/volunteer" 
                    className="block px-8 py-3 text-gray-600 hover:bg-primary/10 hover:text-primary"
                    onClick={closeMobileMenu}
                  >
                    Volunteer
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary text-lg"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            
            <Link 
              href="/get-involved" 
              className="block px-4 py-3 bg-gold text-neutral font-semibold rounded mx-4 mt-2 text-center hover:bg-secondary-dark transition-colors text-lg"
              onClick={closeMobileMenu}
            >
              Get Involved
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
