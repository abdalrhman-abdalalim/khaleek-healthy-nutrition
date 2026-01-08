/* eslint-disable react-hooks/static-components */
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/shared/Lib/utils";
import MobileToggle from "./components/MobileToggle";
import SidebarContent from "./components/SideBarContent/SidebarContent";
import MobileSidebar from "./components/MobileSidebar";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  <MobileToggle
    setIsMobileOpen={setIsMobileOpen}
    isMobileOpen={isMobileOpen}
  />;

  if (!isMobile) {
    return (
      <MobileSidebar
        isExpanded={isExpanded}
        isMobile={isMobile}
        setIsExpanded={setIsExpanded}
      />
    );
  }

  return (
    <>
      <MobileToggle
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 right-0 h-screen bg-background/95 backdrop-blur-xl border-r border-border/50 z-50 transition-transform duration-300 ease-in-out w-64",
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <SidebarContent
          isExpanded={isExpanded}
          isMobile={isMobile}
          setIsExpanded={setIsExpanded}
        />
      </aside>

      <div
        className={cn(
          "transition-all duration-300",
          isMobileOpen ? "ml-64" : "ml-0"
        )}
      ></div>
    </>
  );
};

export default Sidebar;
