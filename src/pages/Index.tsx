
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import FeedbackLoop from "@/components/FeedbackLoop";
import ExportKit from "@/components/ExportKit";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Features />
        <FeedbackLoop />
        <ExportKit />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
