
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b py-4 bg-white sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-brandify-primary" />
          <span className="font-display font-bold text-xl text-brandify-dark">Brandify</span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-brandify-primary transition-colors">
            How It Works
          </a>
          <a href="#features" className="text-sm font-medium hover:text-brandify-primary transition-colors">
            Features
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-brandify-primary transition-colors">
            Blog
          </a>
          <Button className="bg-brandify-primary hover:bg-brandify-primary/90">
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20">
          <div className="flex flex-col items-center space-y-6 p-6">
            <a 
              href="#how-it-works" 
              className="text-lg font-medium hover:text-brandify-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-lg font-medium hover:text-brandify-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#blog" 
              className="text-lg font-medium hover:text-brandify-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Button 
              className="bg-brandify-primary hover:bg-brandify-primary/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
