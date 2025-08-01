import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/dtlatex_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Our Story", href: "#story" },
        { name: "Leadership", href: "#leadership" },
        { name: "Careers", href: "#careers" },
        { name: "News & Media", href: "#news" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Latex Foam", href: "#latex-foam" },
        { name: "Rubber Sheets", href: "#rubber-sheets" },
        { name: "Industrial Rubber", href: "#industrial" },
        { name: "Automotive Components", href: "#automotive" },
        { name: "Medical Grade Products", href: "#medical" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Custom Solutions", href: "#custom" },
        { name: "Quality Testing", href: "#testing" },
        { name: "Technical Support", href: "#support" },
        { name: "Consulting", href: "#consulting" },
        { name: "Training", href: "#training" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Product Catalog", href: "#catalog" },
        { name: "Technical Specs", href: "#specs" },
        { name: "Case Studies", href: "#cases" },
        { name: "Downloads", href: "#downloads" },
        { name: "FAQ", href: "#faq" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", name: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with DTLatex
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Subscribe to our newsletter for the latest updates on products, innovations, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="DTLatex" className="h-10 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              DTLatex is a leading rubber company specializing in premium latex products and innovative rubber solutions. 
              We deliver exceptional quality and sustainable practices to industries worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-white/80">123 Industrial Zone, Colombo, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">+94 11 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">info@dtlatex.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © {currentYear} DTLatex. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

