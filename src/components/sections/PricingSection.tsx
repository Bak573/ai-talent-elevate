import { Check } from "@phosphor-icons/react";

const plans = [
  {
    name: "Gratuit",
    price: "0€",
    period: "/ mois",
    description: "Pour explorer la plateforme et tester nos capacités de matching.",
    features: [
      "3 matchs IA par mois",
      "Profil basique",
      "Messagerie intégrée",
      "Accès aux talents vérifiés",
    ],
    cta: "Commencer gratuitement",
    recommended: false,
  },
  {
    name: "Pro",
    price: "79€",
    period: "/ mois",
    description: "Pour les entreprises qui recrutent régulièrement et veulent les meilleurs.",
    features: [
      "Matchs IA illimités",
      "Profil premium mis en avant",
      "Analyse de compétences avancée",
      "Support prioritaire",
      "Onboarding dédié",
      "Tableaux de bord analytiques",
    ],
    cta: "Démarrer l'essai Pro",
    recommended: true,
  },
  {
    name: "Entreprise",
    price: "Sur mesure",
    period: "",
    description: "Pour les grandes équipes avec des besoins de recrutement complexes et volumiques.",
    features: [
      "Tout du plan Pro",
      "API dédiée",
      "SSO & sécurité avancée",
      "Account manager dédié",
      "SLA garanti",
      "Intégrations ATS",
    ],
    cta: "Contacter les ventes",
    recommended: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs text-gold tracking-widest uppercase mb-4">Tarifs</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">
            Des plans pensés pour vous
          </h2>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative animate-on-scroll ${
                plan.recommended
                  ? "glass-card border-gold/20"
                  : "glass-card"
              }`}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow: plan.recommended
                  ? "0 0 50px rgba(212,160,55,0.1), 0 20px 60px rgba(0,0,0,0.3)"
                  : undefined,
              }}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-recommended">Recommandé</span>
                </div>
              )}

              {plan.recommended && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent rounded-t-xl" />
              )}

              <div className="p-8">
                <h3 className="text-sm font-medium tracking-widest uppercase text-dim mb-2">{plan.name}</h3>

                <div className="flex items-end gap-1 mb-4">
                  <span className={`text-4xl font-light tracking-tight ${plan.recommended ? "text-gradient" : ""}`}>
                    {plan.price}
                  </span>
                  {plan.period && <span className="text-sm text-dim pb-1">{plan.period}</span>}
                </div>

                <p className="text-dim text-sm leading-relaxed mb-8">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <Check
                        size={14}
                        weight="bold"
                        className={`mt-0.5 flex-shrink-0 ${plan.recommended ? "text-gold" : "text-dim"}`}
                      />
                      <span className={plan.recommended ? "" : "text-dim"}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl text-sm transition-all duration-300 ${
                    plan.recommended ? "btn-neuro" : "btn-neuro-outline"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
