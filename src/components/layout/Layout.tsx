import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-surface-50">
      <Navbar />
      <main key={pathname} className="flex-1 animate-[fadeIn_0.5s_ease-out]">
        <Outlet />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
