
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brandify-dark max-w-4xl mx-auto leading-tight">
          Welcome to <span className="text-brandify-primary">Brandify</span> - Your AI-Powered Brand Identity Assistant
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Create professional brand identities in minutes, not months. Our AI analyzes your vision and generates perfect color palettes, typography, and brand guidelines.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button className="bg-brandify-primary hover:bg-brandify-primary/90 text-white font-medium px-8 py-6 rounded-lg text-lg flex items-center gap-2">
            Get Started <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-brandify-primary text-brandify-primary hover:bg-brandify-primary/10 px-8 py-6 rounded-lg text-lg">
            See Examples
          </Button>
        </div>
        
        <div className="mt-16 w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
          <div className="p-6 bg-gradient-to-r from-brandify-primary/10 to-brandify-secondary/10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-sm text-gray-500">Brandify AI Chat Interface</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex mb-6">
                <div className="bg-brandify-light rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm font-medium text-brandify-primary mb-1">Brandify AI</p>
                  <p className="text-sm">Hello! I'm your Brandify assistant. Tell me about your brand vision, values, and target audience.</p>
                </div>
              </div>
              <div className="flex justify-end mb-6">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm font-medium text-gray-700 mb-1">You</p>
                  <p className="text-sm">I'm creating a sustainable fitness app for young professionals. Our values are: wellness, sustainability, and community.</p>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="bg-brandify-light rounded-lg p-3 max-w-[80%]">
                  <p className="text-sm font-medium text-brandify-primary mb-1">Brandify AI</p>
                  <p className="text-sm">Thanks! Based on your input, I'm generating a brand palette that balances energetic fitness elements with sustainable, earth-friendly tones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
