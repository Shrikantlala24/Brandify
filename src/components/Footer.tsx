
import { Brain, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-gray-900 text-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-6 w-6 text-brandify-primary" />
              <span className="font-display font-bold text-xl text-white">Brandify</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI-powered brand identity assistant that helps businesses create professional branding in minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brandify-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brandify-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brandify-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brandify-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-white text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-medium text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center md:text-left md:flex md:justify-between">
          <p>&copy; 2025 Brandify. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mr-6 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
