"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

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
      if (programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setProgramsDropdownOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Africa CSID Logo"
              width={280}
              height={100}
              className="h-20 w-auto"
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
                  setProgramsDropdownOpen(false);
                  setResourcesDropdownOpen(false);
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

            {/* Programs Dropdown */}
            <div className="relative" ref={programsRef}>
              <button 
                onClick={() => {
                  setProgramsDropdownOpen(!programsDropdownOpen);
                  setAboutDropdownOpen(false);
                  setResourcesDropdownOpen(false);
                }}
                className="font-medium text-gray-700 hover:text-primary transition-colors flex items-center"
              >
                Programs
                <svg className={`w-4 h-4 ml-1 transition-transform ${programsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {programsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl py-2 z-50 border border-gray-100">
                  <Link 
                    href="/programs/peace-conflict" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setProgramsDropdownOpen(false)}
                  >
                    Peace & Conflict
                  </Link>
                  <Link 
                    href="/programs/economic" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setProgramsDropdownOpen(false)}
                  >
                    Economic Empowerment
                  </Link>
                  <Link 
                    href="/programs/climate" 
                    className="block px-4 py-3 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => setProgramsDropdownOpen(false)}
                  >
                    Climate Change
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button 
                onClick={() => {
                  setResourcesDropdownOpen(!resourcesDropdownOpen);
                  setAboutDropdownOpen(false);
                  setProgramsDropdownOpen(false);
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
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-gray-700"></span>
              <span className="block w-8 h-0.5 bg-gray-700"></span>
              <span className="block w-8 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white py-4">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">
              Home
            </Link>
            <Link href="/about/whoweare" className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">
              About Us
            </Link>
            <Link href="/programs" className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">
              Programs
            </Link>
            <Link href="/resources/publications" className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">
              Resources
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary">
              Contact
            </Link>
            <Link href="/get-involved" className="block px-4 py-2 bg-gold text-neutral font-semibold rounded mx-4 mt-2 text-center hover:bg-secondary-dark transition-colors">
              Get Involved
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
