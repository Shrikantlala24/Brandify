
import { SmilePlus, Meh, Frown, RefreshCw, BarChart3, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const FeedbackLoop = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-900 rounded-3xl my-8">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            How was your experience?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Help us improve by sharing your feedback
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 bg-gray-800/50 border-gray-700 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Brand Kit Progress</h3>
                </div>
                <span className="text-2xl font-bold text-blue-400">75%</span>
              </div>
              
              <Progress value={75} className="h-2 bg-gray-700" />
              
              <div className="grid grid-cols-4 gap-2 pt-4">
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Brief</p>
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <ThumbsUp className="h-3 w-3 text-blue-400" />
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Colors</p>
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <ThumbsUp className="h-3 w-3 text-blue-400" />
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Fonts</p>
                  <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                    <ThumbsUp className="h-3 w-3 text-blue-400" />
                  </div>
                </div>
                <div className="bg-gray-700/50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-400 mb-1">Export</p>
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs text-gray-400">...</span>
                  </div>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl">
                <RefreshCw className="mr-2 h-4 w-4" />
                Continue where you left off
              </Button>
            </div>
          </Card>

          <Card className="p-6 bg-gray-800/50 border-gray-700 rounded-2xl backdrop-blur-sm shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white mb-4">Rate Your Experience</h3>
              
              <div className="grid grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className={`flex flex-col items-center p-6 rounded-2xl transition-all ${
                    selectedMood === 'love' 
                      ? 'bg-green-500/20 border-green-500 text-white' 
                      : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-green-500/10 hover:border-green-500 hover:text-green-400'
                  }`}
                  onClick={() => handleMoodSelect('love')}
                >
                  <SmilePlus className={`h-8 w-8 ${selectedMood === 'love' ? 'text-green-400' : 'text-gray-400'} mb-2`} />
                  <span>Love it!</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className={`flex flex-col items-center p-6 rounded-2xl transition-all ${
                    selectedMood === 'okay' 
                      ? 'bg-yellow-500/20 border-yellow-500 text-white' 
                      : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-yellow-500/10 hover:border-yellow-500 hover:text-yellow-400'
                  }`}
                  onClick={() => handleMoodSelect('okay')}
                >
                  <Meh className={`h-8 w-8 ${selectedMood === 'okay' ? 'text-yellow-400' : 'text-gray-400'} mb-2`} />
                  <span>It's Okay</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className={`flex flex-col items-center p-6 rounded-2xl transition-all ${
                    selectedMood === 'needsWork' 
                      ? 'bg-red-500/20 border-red-500 text-white' 
                      : 'bg-gray-800/50 border-gray-700 text-gray-400 hover:bg-red-500/10 hover:border-red-500 hover:text-red-400'
                  }`}
                  onClick={() => handleMoodSelect('needsWork')}
                >
                  <Frown className={`h-8 w-8 ${selectedMood === 'needsWork' ? 'text-red-400' : 'text-gray-400'} mb-2`} />
                  <span>Needs Work</span>
                </Button>
              </div>

              {selectedMood && (
                <div className="mt-6 p-4 bg-gray-700/50 rounded-xl border border-gray-700">
                  <p className="text-sm text-white mb-4">
                    {selectedMood === 'love' && "Fantastic! We're glad you're enjoying the experience."}
                    {selectedMood === 'okay' && "Thanks for your feedback. What could we improve?"}
                    {selectedMood === 'needsWork' && "We appreciate your honesty. How can we make it better?"}
                  </p>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                    Submit Feedback
                  </Button>
                </div>
              )}

              {!selectedMood && (
                <div className="mt-6 p-4 bg-gray-700/30 rounded-xl border border-gray-700">
                  <p className="text-sm text-gray-400">Your feedback helps us improve the brand generation process for everyone.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackLoop;
