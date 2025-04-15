
import { Brain, MessageSquare, Palette, RefreshCw, Download } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Step 1: Onboarding",
    description: "Start your journey with a simple chat conversation where our AI learns about your brand vision."
  },
  {
    icon: Brain,
    title: "Step 2: AI Processing",
    description: "Our advanced AI analyzes your input to understand brand values, tone, and target audience."
  },
  {
    icon: Palette,
    title: "Step 3: Visualizing Brand Elements",
    description: "Review AI-generated color palettes, typography recommendations, and brand mockups."
  },
  {
    icon: RefreshCw,
    title: "Step 4: Refining Results",
    description: "Provide feedback to refine and perfect your brand elements until they match your vision."
  },
  {
    icon: Download,
    title: "Step 5: Exporting Brand Kit",
    description: "Download your complete brand kit with color codes, typography, and usage guidelines."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brandify-dark">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our step-by-step process turns your brand vision into a complete identity system in minutes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-start md:items-center mb-12">
              {/* Timeline */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              )}
              
              {/* Icon */}
              <div className="relative flex-shrink-0 mr-6">
                <div className="w-12 h-12 rounded-full bg-brandify-primary/10 flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-brandify-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-display font-medium text-brandify-dark mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
