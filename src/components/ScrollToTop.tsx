"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to absolute top completely instantly (ignores scroll-smooth for this jump)
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" as ScrollBehavior });
    
    // Restore smooth scroll behavior shortly after
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    });
  }, [pathname]);

  return null;
}
