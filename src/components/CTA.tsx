
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-brandify-primary/90 to-brandify-secondary/90 text-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 max-w-3xl mx-auto leading-tight">
          Get Started with Brandify Today!
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Create a professional brand identity in minutes with the power of AI. No design experience required.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-brandify-primary hover:bg-gray-100 px-8 py-6 rounded-lg text-lg flex items-center gap-2 mx-auto">
          Start Building Your Brand <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
