import { Button } from "@/components/ui/button";
import { Brain, Home, Users, CreditCard, ScrollText, Settings, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full py-4 bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-blue-500 animate-pulse-slow" />
          <span className="font-display font-bold text-xl text-gradient">Brandify</span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="ghost" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6 flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full px-4">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full px-4">
            <CreditCard className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full px-4">
            <ScrollText className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full px-4">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full px-4">
            <User className="h-4 w-4" />
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
