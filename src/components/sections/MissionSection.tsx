import { Sparkle } from "@phosphor-icons/react";

export default function MissionSection() {
  return (
    <section id="mission" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial-gold opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8">
            <Sparkle size={12} weight="fill" className="text-gold" />
            <span className="text-xs text-gold tracking-wider">Notre mission</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-light tracking-tighter leading-tight mb-8">
            Démocratiser l'accès aux{" "}
            <span className="text-gradient">meilleurs talents</span>
          </h2>

          <p className="text-dim text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Nous avons fondé NextGen avec une conviction profonde : le talent n'a pas de frontières, mais les opportunités, si. L'IA change la donne.
          </p>

          <p className="text-dim text-base leading-relaxed max-w-xl mx-auto">
            En combinant la puissance de l'intelligence artificielle et une communauté de talents d'exception, nous créons un monde du travail plus juste, plus rapide et plus humain.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/[0.06]">
            {[
              { value: "40+", label: "Domaines d'expertise" },
              { value: "23", label: "Pays représentés" },
              { value: "2M€+", label: "Revenus générés pour les talents" },
            ].map((m) => (
              <div key={m.label}>
                <div className="text-3xl md:text-4xl font-light text-gradient">{m.value}</div>
                <div className="text-xs text-dim mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
