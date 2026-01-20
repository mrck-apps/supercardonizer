import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PrizeCardProps = {
  name: string;
  prize: string;
};

export function PrizeCard({ name, prize }: PrizeCardProps) {
  const isSachpreis = prize === "Sachpreis";
  const emoji = isSachpreis ? "😊" : "😠";
  const prizeText = isSachpreis ? "Sachpreis" : "%";

  return (
    <Card className="w-full max-w-sm text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-card/60 backdrop-blur-sm border-2">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-accent">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="text-7xl" role="img" aria-label={isSachpreis ? 'Smiling face' : 'Angry face'}>{emoji}</div>
        <p className={`text-5xl font-bold ${isSachpreis ? 'text-primary' : 'text-muted-foreground'}`}>{prizeText}</p>
      </CardContent>
    </Card>
  );
}
