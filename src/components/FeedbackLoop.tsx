
import { SmilePlus, Meh, Frown, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const FeedbackLoop = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-4">
            How was your experience?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us improve by sharing your feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 glass-card hover-lift">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Brand Kit Progress</h3>
                <span className="text-2xl font-bold text-primary">75%</span>
              </div>
              
              <Progress value={75} className="h-2" />
              
              <div className="flex justify-between items-center pt-4">
                <span className="text-muted-foreground">3 Steps Remaining</span>
                <Button variant="outline" size="sm" className="hover-glow">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Update Progress
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 glass-card hover-lift">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Rate Your Experience</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center p-6 hover:bg-green-500/10 hover:border-green-500 transition-all"
                >
                  <SmilePlus className="h-8 w-8 text-green-500 mb-2" />
                  <span>Love it!</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center p-6 hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                >
                  <Meh className="h-8 w-8 text-yellow-500 mb-2" />
                  <span>It's Okay</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="flex flex-col items-center p-6 hover:bg-red-500/10 hover:border-red-500 transition-all"
                >
                  <Frown className="h-8 w-8 text-red-500 mb-2" />
                  <span>Needs Work</span>
                </Button>
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Your feedback helps us improve the brand generation process for everyone.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackLoop;
