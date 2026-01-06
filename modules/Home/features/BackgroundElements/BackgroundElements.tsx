const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-linear-to-br from-background/20 to-foreground/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-linear-to-br from-foreground/20 to-foreground/20 blur-3xl animate-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-linear-to-br from-foreground/10 to-background/10 blur-3xl animate-pulse"
        style={{ animationDuration: "6s", animationDelay: "2s" }}
      />

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-background-400/40 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-foreground-400/40 rounded-full animate-float-delayed" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-foreground-400/40 rounded-full animate-float" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />
    </div>
  );
};
export default BackgroundElements;
