import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Comment fonctionne le matching IA de NextGen ?",
    answer: "Notre algorithme analyse votre profil, vos compétences, vos expériences et vos préférences, puis les croise avec des milliers de profils ou d'offres en temps réel. Il prend en compte des signaux qualitatifs (soft skills, style de travail) et quantitatifs (disponibilité, tarif, domaine).",
  },
  {
    question: "Les talents sont-ils vérifiés ?",
    answer: "Oui. Chaque talent passe par un processus de vérification d'identité et de compétences avant d'être accepté sur la plateforme. Des avis clients et des scores de performance complètent ce système.",
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Absolument. Vous pouvez annuler votre abonnement Pro à tout moment depuis votre espace compte. Aucune pénalité, aucun engagement minimum.",
  },
  {
    question: "Comment démarrer si je suis un talent ?",
    answer: "Créez votre profil en 5 minutes, renseignez vos expertises et disponibilités, et laissez l'IA travailler pour vous. Vous recevrez vos premiers matchs sous 24h.",
  },
  {
    question: "NextGen est-il disponible en dehors de la France ?",
    answer: "Oui ! NextGen est disponible dans 23 pays et continue de s'étendre. L'interface est disponible en français et en anglais.",
  },
  {
    question: "Que comprend le plan Entreprise ?",
    answer: "Le plan Entreprise offre une solution sur mesure avec une API dédiée, un account manager attitré, un SLA garanti, des intégrations ATS, et une sécurité avancée (SSO, audit logs). Contactez notre équipe commerciale pour un devis personnalisé.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <p className="text-xs text-gold tracking-widest uppercase mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter">
              Questions fréquentes
            </h2>
          </div>

          {/* Items */}
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`glass-card overflow-hidden animate-on-scroll transition-all duration-300 ${
                  open === i ? "border-gold/15" : ""
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-sm font-medium tracking-tight pr-6">{faq.question}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg border border-white/[0.08] flex items-center justify-center">
                    {open === i ? (
                      <Minus size={12} weight="light" className="text-gold" />
                    ) : (
                      <Plus size={12} weight="light" className="text-dim" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-dim text-sm leading-relaxed px-6 pb-6">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
