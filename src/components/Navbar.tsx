import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick("#hero")} className="flex items-center gap-2 group">
            {/* NextGen brand icon – stylized "D" */}
            <div className="w-7 h-7 rounded-lg bg-gradient-gold flex items-center justify-center overflow-hidden">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 2.5H8.5C11.538 2.5 14 4.962 14 8C14 11.038 11.538 13.5 8.5 13.5H3V2.5Z" stroke="white" strokeWidth="0" fill="none"/>
                <path d="M4 3.5C4 3.5 9.5 3.5 9.5 3.5C12 3.5 13.5 5.5 13.5 8C13.5 10.5 12 12.5 9.5 12.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M4 5.5C4 5.5 8.5 5.5 8.5 5.5C10.2 5.5 11.5 6.6 11.5 8C11.5 9.4 10.2 10.5 8.5 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M4 7.5H7.5C8.3 7.5 9 7.7 9 8C9 8.3 8.3 8.5 7.5 8.5H4" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
            <span className="text-sm font-medium tracking-tight">
              Next<span className="text-gradient">Gen</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-xs text-dim hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn-neuro text-xs px-5 py-2 rounded-lg">
              Réserver une Démo
            </button>
          </div>

          {/* Burger */}
          <button
            className="md:hidden p-2 rounded-lg border border-white/[0.08] hover:border-primary/30 transition-colors"
            onClick={() => setMenuOpen(true)}
          >
            <List size={18} weight="light" className="text-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-background border-l border-white/[0.07] transition-transform duration-400 ease-in-out md:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backdropFilter: "blur(30px)" }}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.07]">
          <span className="text-sm font-medium">
            Next<span className="text-gradient">Gen</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg border border-white/[0.08] hover:border-primary/30 transition-colors"
          >
            <X size={16} weight="light" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-6 flex-1">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-sm text-dim hover:text-foreground hover:bg-white/[0.04] rounded-lg transition-all duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/[0.07]">
          <button className="btn-neuro w-full py-3 rounded-xl text-sm">
            Réserver une Démo
          </button>
        </div>
      </div>
    </>
  );
}
