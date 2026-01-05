"use client";
import LoginButton from "./components/LoginButton";
import HeroBadge from "./components/HeroBadge";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-secondary/90 backdrop-blur-lg border-b border-foreground/10">
      <div className="container flex h-20 items-center justify-between px-6">
        <HeroBadge />
        <LoginButton />
      </div>
    </header>
  );
}
