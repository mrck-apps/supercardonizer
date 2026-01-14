"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { generatePrizeResults, type GeneratePrizeResultsOutput } from '@/ai/flows/generate-prize-results';
import BackgroundAnimation from '@/components/background-animation';
import LoaderAnimation from '@/components/loader-animation';
import ResultCard from '@/components/result-card';
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<GeneratePrizeResultsOutput | null>(null);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleSupercardonize = async () => {
    setIsLoading(true);
    setShowResults(false);
    setResults(null);
    
    try {
      const prizePromise = generatePrizeResults({});
      
      const timeoutPromise = new Promise(resolve => setTimeout(resolve, 5000));

      // Wait for both the AI call and the minimum animation time
      const [prizeResults] = await Promise.all([prizePromise, timeoutPromise]);
      
      if (prizeResults) {
        setResults(prizeResults);
        setShowResults(true);
      } else {
        throw new Error("No prize results returned from AI.");
      }

    } catch (error) {
      console.error("Error generating prize results:", error);
      toast({
        title: "Error",
        description: "Could not determine prizes. Please try again.",
        variant: "destructive",
      });
      setShowResults(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <BackgroundAnimation />
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl md:text-7xl font-headline text-primary drop-shadow-lg">
            Supercardonizer Luck Machine
          </h1>
          
          <div className="flex items-center justify-center h-72">
            {!isLoading && !showResults && (
              <p className="text-lg max-w-prose text-accent font-body">
                Press the button to test your luck! Find out if Oliver, Simon, and Marco win a prize or just a discount.
              </p>
            )}
            {isLoading && <LoaderAnimation />}
            {showResults && results && (
              <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 animate-in fade-in-50 duration-1000">
                {Object.entries(results).map(([name, prize]) => (
                  <ResultCard key={name} name={name.charAt(0).toUpperCase() + name.slice(1)} prize={prize} />
                ))}
              </div>
            )}
          </div>
          
          <Button
            onClick={handleSupercardonize}
            disabled={isLoading}
            size="lg"
            className="font-headline text-2xl px-12 py-8 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            {isLoading ? 'Spinning...' : 'Supercardonizer'}
          </Button>

        </div>
      </main>
    </div>
  );
}
