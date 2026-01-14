import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PrizeType } from "@/ai/flows/generate-prize-results";

type ResultCardProps = {
  name: string;
  prize: PrizeType;
};

const prizeDetails = {
  Sachpreis: {
    emoji: "😊",
    text: "Sachpreis",
  },
  Discount: {
    emoji: "😠",
    text: "%",
  },
};

const ResultCard = ({ name, prize }: ResultCardProps) => {
  const details = prizeDetails[prize];

  return (
    <Card className="w-56 text-center shadow-lg transform transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-accent">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <p className="text-7xl">{details.emoji}</p>
        <p className={`text-2xl font-bold font-headline ${prize === 'Discount' ? 'text-destructive' : 'text-foreground'}`}>{details.text}</p>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
