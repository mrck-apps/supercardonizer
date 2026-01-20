export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <div className="relative h-48 w-48">
        <div className="absolute h-full w-full rounded-full border-4 border-dashed border-primary animate-spin-slow"></div>
        <div className="absolute h-full w-full scale-75 rounded-full border-4 border-dotted border-primary/70 animate-spin-medium"></div>
        <div className="absolute h-full w-full scale-50 rounded-full border-4 border-primary/40 animate-spin-fast"></div>
      </div>
      <p className="text-xl font-medium text-muted-foreground animate-pulse">
        Ermittle Preise...
      </p>
    </div>
  );
}
