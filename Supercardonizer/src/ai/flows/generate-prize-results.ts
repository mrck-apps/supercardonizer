'use server';

/**
 * @fileOverview A flow to generate random prize results for Oliver, Simon, and Marco.
 *
 * - generatePrizeResults - A function that generates the prize results.
 * - PrizeResult - The type representing a single prize result (name and prize).
 * - PrizeResultsOutput - The type representing the output of the flow, an array of PrizeResult.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrizeResultSchema = z.object({
  name: z.string().describe('The name of the person.'),
  prize: z.string().describe('The prize won (either Sachpreis or Rabattgewinn).'),
  emoji: z.string().describe('Emoji to represent the prize won (lächelndes Smiley for Sachpreis, verärgertes Smiley for Rabattgewinn).'),
});

export type PrizeResult = z.infer<typeof PrizeResultSchema>;

const PrizeResultsOutputSchema = z.array(PrizeResultSchema);
export type PrizeResultsOutput = z.infer<typeof PrizeResultsOutputSchema>;

export async function generatePrizeResults(): Promise<PrizeResultsOutput> {
  return generatePrizeResultsFlow();
}

const prizeResultsPrompt = ai.definePrompt({
  name: 'prizeResultsPrompt',
  output: {schema: PrizeResultsOutputSchema},
  prompt: `Generate prize results for Oliver, Simon, and Marco. For each person, randomly assign either "Sachpreis" (physical prize) or "Rabattgewinn" (discount). Return an array of objects, where each object has a "name" field (the person's name), a "prize" field (either "Sachpreis" or "Rabattgewinn"), and an "emoji" field (lächelndes Smiley for Sachpreis, verärgertes Smiley for Rabattgewinn).  The result should always contain results for Oliver, Simon and Marco.`,    
});

const generatePrizeResultsFlow = ai.defineFlow(
  {
    name: 'generatePrizeResultsFlow',
    outputSchema: PrizeResultsOutputSchema,
  },
  async () => {
    const {output} = await prizeResultsPrompt();
    return output!;
  }
);
