import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-neutral text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Africa CSID"
              width={240}
              height={80}
              className="mb-4 h-20 w-auto"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Supporting marginalized communities across Africa through sustainable and inclusive development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/resources/publications" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/resources/blogs" className="text-gray-400 hover:text-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  News & Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs/peace-conflict" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Peace & Conflict
                </Link>
              </li>
              <li>
                <Link href="/programs/economic" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Economic Empowerment
                </Link>
              </li>
              <li>
                <Link href="/programs/climate" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Climate Change
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 mt-1 text-gold" />
                <span>Kenya</span>
              </li>
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faPhone} className="mr-3 mt-1 text-gold" />
                <span>+254113909961</span>
              </li>
              <li className="flex items-start group hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 mt-1 text-gold" />
                <a href="mailto:info@africacsid.org" className="hover:text-gold transition-colors">
                  info@africacsid.org
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all duration-300 transform hover:scale-125 hover:-translate-y-1">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Africa CSID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
