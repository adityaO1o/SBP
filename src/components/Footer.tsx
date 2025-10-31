import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import headerLogo from '@/assets/footerlogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                <img
                  src={headerLogo}
                  alt="Shri Balaji Polymers"
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">Shri Balaji Polymers</h3>
                <p className="text-xs text-white/80">Excellence in Innovation</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Leading manufacturer of polymer compounds, EVA solutions, and custom engineered materials for automotive, electronics, and industrial applications.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/shribalajipolymers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/sbp_polymers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/company/shri-balaji-polymers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/shribalajipolymers" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/applications" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Applications
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Sister Companies */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Our Network</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  100% Custom Compounds
                </Link>
              </li>
              <li>
                <Link to="/bavana-factory" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  EVA Compounds
                </Link>
              </li>
              <li>
                <Link to="/kundli-factory" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Footwear Solutions
                </Link>
              </li>
              <li>
                <div className="text-sm font-semibold text-white mt-4 mb-2">Sister Companies:</div>
              </li>
              <li>
                <Link to="/mohit-overseas" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Mohit Overseas
                </Link>
              </li>
              <li>
                <Link to="/aanya-international" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Aanya International
                </Link>
              </li>
              <li>
                <Link to="/nyra-polyrub" className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  Nyra Polyrub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Contact Us</h4>
            <div className="space-y-4">
              {/* Delhi Office */}
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Delhi Office</p>
                    <p className="text-xs text-white/80">Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80 ml-6">
                  <Phone className="h-3 w-3" />
                  <a href="tel:+919999993433" className="hover:text-white transition-colors">+91 9999993433</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80 ml-6">
                  <Phone className="h-3 w-3" />
                  <a href="tel:+919899211990" className="hover:text-white transition-colors">+91 9899211990</a>
                </div>
              </div>

              {/* Haryana Office */}
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Haryana Office</p>
                    <p className="text-xs text-white/80">Haryana, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80 ml-6">
                  <Phone className="h-3 w-3" />
                  <a href="tel:+919999990591" className="hover:text-white transition-colors">+91 9999990591</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80 ml-6">
                  <Phone className="h-3 w-3" />
                  <a href="tel:+919999698591" className="hover:text-white transition-colors">+91 9999698591</a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@shribalajipolymers.com" className="hover:text-white transition-colors">
                  info@shribalajipolymers.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>© {currentYear} Shri Balaji Polymers. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
