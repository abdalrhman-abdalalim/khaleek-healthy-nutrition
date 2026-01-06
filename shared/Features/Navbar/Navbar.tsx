"use client";
import LoginButton from "./components/LoginButton";
import HeroBadge from "./components/HeroBadge";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-linear-to-br from-secondary/10 to-secondary/20  backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between px-6">
        <HeroBadge />
        <LoginButton />
      </div>
    </header>
  );
}
