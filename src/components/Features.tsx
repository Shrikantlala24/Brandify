
import { MessageSquare, PenTool, Eye, RefreshCw, Download, CheckCircle, Zap, Sliders } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Chat Assistant",
    description: "Easy brief submission via chatbot interface",
    color: "bg-blue-900/30 text-blue-400"
  },
  {
    icon: PenTool,
    title: "AI Processing",
    description: "Intelligent processing of brand inputs",
    color: "bg-purple-900/30 text-purple-400"
  },
  {
    icon: Eye,
    title: "Visualizer",
    description: "Real-time preview of color palettes and typography",
    color: "bg-pink-900/30 text-pink-400"
  },
  {
    icon: RefreshCw,
    title: "Feedback Loop",
    description: "Refine and reprocess brand elements based on user feedback",
    color: "bg-orange-900/30 text-orange-400"
  },
  {
    icon: Download,
    title: "Export Kit",
    description: "Download comprehensive brand kits including colors, fonts, and usage guidelines",
    color: "bg-green-900/30 text-green-400"
  }
];

const FeatureHighlight = () => {
  return (
    <section id="features" className="w-full py-16 md:py-24 bg-gray-900 rounded-3xl my-8">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Onboarding: Seamlessly Guide Users
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Our intuitive interface helps users set up their brand brief through natural conversation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gray-800/50 rounded-2xl p-5 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="bg-blue-900/30 p-2 rounded-lg mr-3">
                  <CheckCircle className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">
                  Conversational AI Input
                </h3>
              </div>
              <p className="text-gray-400 ml-10">
                No more complicated forms or technical jargon. Simply chat with our AI and tell it about your vision in your own words.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-5 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="bg-purple-900/30 p-2 rounded-lg mr-3">
                  <Zap className="h-5 w-5 text-purple-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">
                  Guided Discovery Process
                </h3>
              </div>
              <p className="text-gray-400 ml-10">
                Our AI asks the right questions to extract the essence of your brand, even if you're not sure where to start.
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-2xl p-5 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <div className="bg-pink-900/30 p-2 rounded-lg mr-3">
                  <Sliders className="h-5 w-5 text-pink-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white">
                  Real-time Suggestions
                </h3>
              </div>
              <p className="text-gray-400 ml-10">
                Get immediate insights and suggestions as you chat, helping you refine your brand vision on the fly.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800/30 rounded-3xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-blue-900/20 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="text-xs text-gray-500 ml-2">Brandify Chat</div>
              </div>
              <div className="space-y-4">
                <div className="flex">
                  <div className="bg-gray-700/50 rounded-2xl p-3 max-w-[80%] backdrop-blur-sm border border-gray-700">
                    <p className="text-sm font-medium text-blue-400 mb-1">Brandify AI</p>
                    <p className="text-sm text-gray-300">Let's create your brand identity. First, what industry are you in?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-700/30 rounded-2xl p-3 max-w-[80%] backdrop-blur-sm border border-gray-700">
                    <p className="text-sm font-medium text-gray-300 mb-1">You</p>
                    <p className="text-sm text-gray-400">We're creating a health tech platform that connects patients with specialists.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-gray-700/50 rounded-2xl p-3 max-w-[80%] backdrop-blur-sm border border-gray-700">
                    <p className="text-sm font-medium text-blue-400 mb-1">Brandify AI</p>
                    <p className="text-sm text-gray-300">Great! What are the core values of your platform?</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-gray-700/30 rounded-2xl p-3 max-w-[80%] backdrop-blur-sm border border-gray-700">
                    <p className="text-sm font-medium text-gray-300 mb-1">You</p>
                    <p className="text-sm text-gray-400">Trust, accessibility, and innovation are our core values.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-gray-700/50 rounded-2xl p-3 max-w-[80%] backdrop-blur-sm border border-gray-700">
                    <p className="text-sm font-medium text-blue-400 mb-1">Brandify AI</p>
                    <p className="text-sm text-gray-300">Based on your healthcare focus and values, I recommend exploring blues and teals for trust, with accents of orange for innovation. Would you like to see some palette options?</p>
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
    <section className="w-full py-16 md:py-24 bg-gray-800 rounded-3xl my-8">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Core Features
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to create a professional brand identity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/10 transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-display text-white">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
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
