import { Download, FileText, Palette, Type } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExportKit = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            Export Kit
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Download comprehensive brand kits including colors, fonts, and usage guidelines
          </p>
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Color Codes Card */}
            <div className="glass-card rounded-xl p-6 hover-lift hover-glow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">Color Codes</h3>
              <p className="text-muted-foreground mb-6">
                HEX, RGB, CMYK, and Pantone color codes for all brand colors
              </p>
              <Button variant="outline" className="mt-auto w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
            
            {/* Typography Card */}
            <div className="glass-card rounded-xl p-6 hover-lift hover-glow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Type className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">Typography</h3>
              <p className="text-muted-foreground mb-6">
                Font files, web links, and sizing recommendations
              </p>
              <Button variant="outline" className="mt-auto w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
            
            {/* Guidelines Card */}
            <div className="glass-card rounded-xl p-6 hover-lift hover-glow">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">Guidelines</h3>
              <p className="text-muted-foreground mb-6">
                Usage instructions for consistent brand application
              </p>
              <Button variant="outline" className="mt-auto w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8 rounded-lg hover-lift hover-glow">
              <Download className="h-5 w-5 mr-2" /> 
              Download Complete Brand Kit
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              All files are provided in industry-standard formats compatible with major design software
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportKit;
