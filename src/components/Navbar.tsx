
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-white/10 py-4 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2 hover-glow rounded-lg px-2 py-1">
          <Brain className="h-6 w-6 text-primary animate-pulse-slow" />
          <span className="font-display font-bold text-xl text-gradient">Brandify</span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            How It Works
          </a>
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            Features
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            Blog
          </a>
          <Button className="bg-primary hover:bg-primary/90 hover-lift">
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
        <div className="md:hidden fixed inset-0 bg-card z-40 pt-20">
          <div className="flex flex-col items-center space-y-6 p-6">
            <a 
              href="#how-it-works" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#blog" 
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <Button 
              className="bg-primary hover:bg-primary/90 w-full"
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
