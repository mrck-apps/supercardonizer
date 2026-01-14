'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate random prize results (Sachpreis or discount) for Oliver, Simon, and Marco.
 *
 * - generatePrizeResults - A function that triggers the prize generation flow.
 * - GeneratePrizeResultsInput - The input type for the generatePrizeResults function (currently empty).
 * - GeneratePrizeResultsOutput - The output type for the generatePrizeResults function, detailing the prize for each person.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PrizeTypeSchema = z.enum(['Sachpreis', 'Discount']);
export type PrizeType = z.infer<typeof PrizeTypeSchema>;

const GeneratePrizeResultsOutputSchema = z.object({
  oliver: PrizeTypeSchema.describe('Oliver\u0027s prize type.'),
  simon: PrizeTypeSchema.describe('Simon\u0027s prize type.'),
  marco: PrizeTypeSchema.describe('Marco\u0027s prize type.'),
});
export type GeneratePrizeResultsOutput = z.infer<typeof GeneratePrizeResultsOutputSchema>;

const GeneratePrizeResultsInputSchema = z.object({});
export type GeneratePrizeResultsInput = z.infer<typeof GeneratePrizeResultsInputSchema>;

export async function generatePrizeResults(_input: GeneratePrizeResultsInput): Promise<GeneratePrizeResultsOutput> {
  return generatePrizeResultsFlow({});
}

const generatePrizeResultsPrompt = ai.definePrompt({
  name: 'generatePrizeResultsPrompt',
  input: {schema: GeneratePrizeResultsInputSchema},
  output: {schema: GeneratePrizeResultsOutputSchema},
  prompt: `Determine randomly whether Oliver, Simon, and Marco each win a \"Sachpreis\" (physical prize) or a \"Discount\". Return the result in JSON format.\n\nOliver:\nSimon:\nMarco:`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generatePrizeResultsFlow = ai.defineFlow(
  {
    name: 'generatePrizeResultsFlow',
    inputSchema: GeneratePrizeResultsInputSchema,
    outputSchema: GeneratePrizeResultsOutputSchema,
  },
  async () => {
    const {output} = await generatePrizeResultsPrompt({});
    return output!;
  }
);
