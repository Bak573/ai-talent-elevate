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
              <span className="w-7 h-7 rounded-lg bg-gradient-gold flex items-center justify-center text-xs font-bold text-[hsl(var(--background))]">N</span>
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
                  className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-dim hover:border-gold/30 hover:text-gold transition-all duration-300"
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
