
import { RefreshCw, ThumbsUp, ThumbsDown, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeedbackLoop = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brandify-dark">
            Feedback Loop
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Refine and reprocess brand elements based on your feedback until they're perfect
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gray-50 border-b">
              <h3 className="text-xl font-display font-semibold text-brandify-dark">Generated Color Palette</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-5 gap-3 mb-6">
                <div className="aspect-square rounded-md bg-blue-600"></div>
                <div className="aspect-square rounded-md bg-blue-400"></div>
                <div className="aspect-square rounded-md bg-teal-500"></div>
                <div className="aspect-square rounded-md bg-orange-400"></div>
                <div className="aspect-square rounded-md bg-gray-800"></div>
              </div>
              <div className="flex justify-center space-x-4 mt-6">
                <Button variant="outline" className="flex items-center gap-2 border-gray-300">
                  <ThumbsDown className="h-4 w-4" /> Not Quite
                </Button>
                <Button className="bg-brandify-primary flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" /> Perfect!
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gray-50 border-b">
              <h3 className="text-xl font-display font-semibold text-brandify-dark">Typography Recommendations</h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2">Heading Font</p>
                  <p className="font-display text-2xl font-bold">Montserrat</p>
                  <div className="flex mt-3">
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 mr-2">Bold</div>
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 mr-2">Modern</div>
                    <div className="text-xs bg-gray-100 rounded px-2 py-1">Professional</div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500 mb-2">Body Font</p>
                  <p className="font-sans text-lg">Open Sans</p>
                  <div className="flex mt-3">
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 mr-2">Readable</div>
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 mr-2">Clean</div>
                    <div className="text-xs bg-gray-100 rounded px-2 py-1">Versatile</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mt-6">
                <Button variant="outline" className="flex items-center gap-2 border-gray-300">
                  <RefreshCw className="h-4 w-4" /> Regenerate
                </Button>
                <Button variant="outline" className="flex items-center gap-2 border-gray-300">
                  <Edit className="h-4 w-4" /> Customize
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackLoop;
