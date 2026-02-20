import { InstagramLogo, TwitterLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const links = {
  Produit: ["Fonctionnalités", "Tarifs", "Changelog", "Roadmap"],
  Entreprise: ["À propos", "Blog", "Carrières", "Presse"],
  Légal: ["Confidentialité", "CGU", "Cookies"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-gold flex items-center justify-center overflow-hidden">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 3.5C4 3.5 9.5 3.5 9.5 3.5C12 3.5 13.5 5.5 13.5 8C13.5 10.5 12 12.5 9.5 12.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M4 5.5C4 5.5 8.5 5.5 8.5 5.5C10.2 5.5 11.5 6.6 11.5 8C11.5 9.4 10.2 10.5 8.5 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                  <path d="M4 7.5H7.5C8.3 7.5 9 7.7 9 8C9 8.3 8.3 8.5 7.5 8.5H4" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Next<span className="text-gradient">Gen</span></span>
            </div>
            <p className="text-dim text-sm leading-relaxed max-w-xs">
              La marketplace de talents alimentée par l'IA qui connecte les meilleurs créateurs avec les entreprises les plus innovantes.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[TwitterLogo, LinkedinLogo, InstagramLogo, GithubLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-dim hover:border-primary/40 hover:text-primary transition-all duration-300"
                >
                  <Icon size={14} weight="light" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-xs font-medium tracking-widest uppercase text-dim-2 mb-4">{section}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-dim hover:text-foreground transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glow-line mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dim-2">© 2024 NextGen. Tous droits réservés.</p>
          <p className="text-xs text-dim-2">Conçu pour les talents de demain.</p>
        </div>
      </div>
    </footer>
  );
}
