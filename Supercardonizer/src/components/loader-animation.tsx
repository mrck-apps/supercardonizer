const LoaderAnimation = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 my-8">
            <div className="relative flex items-center justify-center w-48 h-48">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/50 animate-pulse-ring"></span>
                <span style={{animationDelay: '1s'}} className="absolute inline-flex h-full w-full rounded-full bg-primary/50 animate-pulse-ring"></span>
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/40 rounded-full animate-pulse"></div>
                </div>
            </div>
            <p className="text-lg font-headline text-accent animate-pulse">Determining your luck...</p>
        </div>
    );
};

export default LoaderAnimation;
