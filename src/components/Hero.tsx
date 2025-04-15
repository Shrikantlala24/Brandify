
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-background via-background/95 to-background/90">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-gradient max-w-4xl mx-auto leading-tight animate-float">
          Welcome to <span className="text-primary">Brandify</span> - Your AI-Powered Brand Identity Assistant
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Create professional brand identities in minutes, not months. Our AI analyzes your vision and generates perfect color palettes, typography, and brand guidelines.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-lg text-lg flex items-center gap-2 hover-lift hover:shadow-primary/20 group">
            Get Started <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 rounded-lg text-lg hover-lift">
            See Examples
          </Button>
        </div>
        
        <div className="mt-16 w-full max-w-4xl mx-auto bg-card/50 rounded-lg shadow-xl overflow-hidden border border-white/10 backdrop-blur-xl hover-glow">
          <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 text-sm text-muted-foreground">Brandify AI Chat Interface</div>
            </div>
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex mb-6">
                <div className="bg-muted rounded-lg p-3 max-w-[80%] animate-float">
                  <p className="text-sm font-medium text-primary mb-1">Brandify AI</p>
                  <p className="text-sm">Hello! I'm your Brandify assistant. Tell me about your brand vision, values, and target audience.</p>
                </div>
              </div>
              <div className="flex justify-end mb-6">
                <div className="bg-input rounded-lg p-3 max-w-[80%] animate-float" style={{ animationDelay: "0.5s" }}>
                  <p className="text-sm font-medium text-foreground mb-1">You</p>
                  <p className="text-sm">I'm creating a sustainable fitness app for young professionals. Our values are: wellness, sustainability, and community.</p>
                </div>
              </div>
              <div className="flex mb-6">
                <div className="bg-muted rounded-lg p-3 max-w-[80%] animate-float" style={{ animationDelay: "1s" }}>
                  <p className="text-sm font-medium text-primary mb-1">Brandify AI</p>
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
