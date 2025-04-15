
import { Download, FileText, Palette, Type } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExportKit = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brandify-dark">
            Export Kit
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Download comprehensive brand kits including colors, fonts, and usage guidelines
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-brandify-light rounded-xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-brandify-dark mb-3">Color Codes</h3>
              <p className="text-gray-600 mb-6">
                HEX, RGB, CMYK, and Pantone color codes for all brand colors
              </p>
              <Button variant="outline" className="mt-auto w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Type className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-brandify-dark mb-3">Typography</h3>
              <p className="text-gray-600 mb-6">
                Font files, web links, and sizing recommendations
              </p>
              <Button variant="outline" className="mt-auto w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-brandify-dark mb-3">Guidelines</h3>
              <p className="text-gray-600 mb-6">
                Usage instructions for consistent brand application
              </p>
              <Button variant="outline" className="mt-auto w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-brandify-primary hover:bg-brandify-primary/90 px-8 flex items-center gap-2">
              <Download className="h-5 w-5" /> 
              Download Complete Brand Kit
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              All files are provided in industry-standard formats compatible with major design software
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportKit;
