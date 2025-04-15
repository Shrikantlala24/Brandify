
import { MessageSquare, PenTool, Eye, RefreshCw, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Chat Assistant",
    description: "Easy brief submission via chatbot interface",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: PenTool,
    title: "AI Processing",
    description: "Intelligent processing of brand inputs",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Eye,
    title: "Visualizer",
    description: "Real-time preview of color palettes and typography",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: RefreshCw,
    title: "Feedback Loop",
    description: "Refine and reprocess brand elements based on user feedback",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Download,
    title: "Export Kit",
    description: "Download comprehensive brand kits including colors, fonts, and usage guidelines",
    color: "bg-green-100 text-green-600"
  }
];

const FeatureHighlight = () => {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-brandify-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brandify-dark">
            Onboarding: Seamlessly Guide Users
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our intuitive interface helps users set up their brand brief through natural conversation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl font-display font-semibold text-brandify-dark mb-4">
                Conversational AI Input
              </h3>
              <p className="text-gray-600">
                No more complicated forms or technical jargon. Simply chat with our AI and tell it about your vision in your own words.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-semibold text-brandify-dark mb-4">
                Guided Discovery Process
              </h3>
              <p className="text-gray-600">
                Our AI asks the right questions to extract the essence of your brand, even if you're not sure where to start.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-display font-semibold text-brandify-dark mb-4">
                Real-time Suggestions
              </h3>
              <p className="text-gray-600">
                Get immediate insights and suggestions as you chat, helping you refine your brand vision on the fly.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-brandify-light rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm font-medium text-brandify-primary mb-1">Brandify AI</p>
                    <p className="text-sm">Let's create your brand identity. First, what industry are you in?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm font-medium text-gray-700 mb-1">You</p>
                    <p className="text-sm">We're creating a health tech platform that connects patients with specialists.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-brandify-light rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm font-medium text-brandify-primary mb-1">Brandify AI</p>
                    <p className="text-sm">Great! What are the core values of your platform?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm font-medium text-gray-700 mb-1">You</p>
                    <p className="text-sm">Trust, accessibility, and innovation are our core values.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-brandify-light rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm font-medium text-brandify-primary mb-1">Brandify AI</p>
                    <p className="text-sm">Based on your healthcare focus and values, I recommend exploring blues and teals for trust, with accents of orange for innovation. Would you like to see some palette options?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesList = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brandify-dark">
            Core Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create a professional brand identity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-display">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.title === "Chat Assistant" && "Our conversational AI guides you through the brand discovery process with natural language interaction."}
                  {feature.title === "AI Processing" && "Advanced algorithms analyze your inputs to extract brand values, tone, and audience preferences."}
                  {feature.title === "Visualizer" && "See your brand come to life with interactive previews of color schemes, typography, and real-world applications."}
                  {feature.title === "Feedback Loop" && "Iteratively improve your brand elements with our AI-powered refinement system."}
                  {feature.title === "Export Kit" && "Get professional-grade design assets ready for use across all your brand touchpoints."}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <>
      <FeatureHighlight />
      <FeaturesList />
    </>
  );
};

export default Features;
