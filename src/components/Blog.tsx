
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How Color Psychology Influences Brand Perception",
    description: "Learn how different colors evoke specific emotions and how to use this in your branding strategy.",
    image: "public/lovable-uploads/a654035b-9cf1-4327-b51b-bca01d297d3c.png",
    date: "April 10, 2025",
    readTime: "5 min read"
  },
  {
    title: "Choosing the Right Typography for Your Brand Voice",
    description: "Typography speaks volumes about your brand. Discover how to select fonts that match your brand personality.",
    image: "public/lovable-uploads/a654035b-9cf1-4327-b51b-bca01d297d3c.png",
    date: "April 8, 2025",
    readTime: "7 min read"
  },
  {
    title: "Brand Consistency: Why It Matters and How to Achieve It",
    description: "Consistency builds trust. Learn strategies to maintain brand consistency across all touchpoints.",
    image: "public/lovable-uploads/a654035b-9cf1-4327-b51b-bca01d297d3c.png",
    date: "April 5, 2025",
    readTime: "6 min read"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="w-full py-16 md:py-24 bg-brandify-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brandify-dark">
            Resources & Articles
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Insights and guidance on branding and identity creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              <CardHeader>
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-display">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a href="#" className="text-brandify-primary font-medium flex items-center hover:underline">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
