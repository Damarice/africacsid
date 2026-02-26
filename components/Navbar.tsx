"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md transition-all duration-300">
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
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-primary transition-colors">
                About Us
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Who We Are
                </Link>
                <Link href="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Our Team
                </Link>
                <Link href="/about/platforms" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Platforms
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-primary transition-colors">
                Programs
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/programs/peace-conflict" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Peace & Conflict
                </Link>
                <Link href="/programs/economic" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Economic Empowerment
                </Link>
                <Link href="/programs/climate" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Climate Change
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-primary transition-colors">
                Resources
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link href="/resources/publications" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Publications
                </Link>
                <Link href="/resources/blogs" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  News & Blogs
                </Link>
                <Link href="/resources/events" className="block px-4 py-2 text-gray-700 hover:bg-cream">
                  Events
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="font-medium text-gray-700 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link href="/get-involved" className="bg-gold hover:bg-secondary text-gray-900 font-semibold py-3 px-8 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
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
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-cream">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-cream">
              About Us
            </Link>
            <Link href="/programs" className="block px-4 py-2 text-gray-700 hover:bg-cream">
              Programs
            </Link>
            <Link href="/resources/publications" className="block px-4 py-2 text-gray-700 hover:bg-cream">
              Resources
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-cream">
              Contact
            </Link>
            <Link href="/get-involved" className="block px-4 py-2 bg-gold text-gray-900 font-semibold rounded mx-4 mt-2 text-center hover:bg-secondary transition-colors">
              Get Involved
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
