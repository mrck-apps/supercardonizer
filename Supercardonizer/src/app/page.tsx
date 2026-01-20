"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { generatePrizeResults, type PrizeResult } from "@/ai/flows/generate-prize-results";
import { BackgroundAnimation } from "@/components/background-animation";
import { LoadingSpinner } from "@/components/loading-spinner";
import { PrizeCard } from "@/components/prize-card";
import { useToast } from "@/hooks/use-toast";

type ViewState = 'button' | 'loading' | 'results';

export default function Home() {
  const [view, setView] = useState<ViewState>('button');
  const [results, setResults] = useState<PrizeResult[] | null>(null);
  const { toast } = useToast();

  const handleSupercardonize = async () => {
    setView('loading');
    try {
      const prizePromise = generatePrizeResults();
      
      // Wait for a minimum of 5 seconds for the animation
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      const prizeResults = await prizePromise;
      
      setResults(prizeResults);
      setView('results');
    } catch (error) {
      console.error("Error generating prize results:", error);
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Die Preise konnten nicht ermittelt werden. Bitte versuchen Sie es erneut.",
      });
      setView('button');
    }
  };

  const handleReset = () => {
    setResults(null);
    setView('button');
  };

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-4 text-center">
      <BackgroundAnimation />
      <div className="z-10 flex flex-col items-center justify-center">
        {view === 'button' && (
          <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in-95 duration-500">
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl font-extrabold tracking-tight font-headline sm:text-6xl md:text-7xl">
                Supercardonizer
              </h1>
              <p className="text-lg text-muted-foreground">
                Drücke den Knopf, um dein Glück zu versuchen!
              </p>
            </div>
            <Button
              className="h-48 w-48 rounded-full text-2xl font-bold shadow-2xl shadow-primary/30 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-primary/50 active:scale-95"
              onClick={handleSupercardonize}
            >
              Start
            </Button>
          </div>
        )}

        {view === 'loading' && (
           <div className="animate-in fade-in duration-500">
            <LoadingSpinner />
          </div>
        )}

        {view === 'results' && results && (
          <div className="flex flex-col items-center gap-8 animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold font-headline sm:text-5xl">Ergebnisse!</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {results.map((result, index) => (
                <div
                  key={result.name}
                  className="animate-in fade-in slide-in-from-bottom-5 duration-500"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <PrizeCard name={result.name} prize={result.prize} />
                </div>
              ))}
            </div>
            <Button onClick={handleReset} variant="outline" size="lg">
              Nochmal versuchen
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
