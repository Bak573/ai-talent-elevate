import {
  Brain,
  ShieldCheck,
  Rocket,
  UsersThree,
} from "@phosphor-icons/react";

const features = [
  {
    icon: Brain,
    title: "Matching IA en temps réel",
    description: "Notre algorithme analyse des centaines de signaux pour vous proposer les meilleures correspondances en quelques secondes.",
  },
  {
    icon: ShieldCheck,
    title: "Profils vérifiés & certifiés",
    description: "Chaque talent est vérifié par notre équipe et noté par la communauté. Zéro surprise, 100% confiance.",
  },
  {
    icon: Rocket,
    title: "Démarrage ultra-rapide",
    description: "Du premier contact à la signature du contrat, notre workflow intégré réduit le délai de démarrage à moins de 48h.",
  },
  {
    icon: UsersThree,
    title: "Communauté d'élite",
    description: "Rejoignez un réseau de plus de 12 000 talents triés sur le volet dans 40+ domaines d'expertise.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs text-gold tracking-widest uppercase mb-4">Fonctionnalités</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">
            Tout ce dont vous avez besoin
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className="glass-card-hover p-8 animate-on-scroll"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-xl border border-gold/20 bg-gold/5 flex items-center justify-center mb-5">
                <feat.icon size={18} weight="light" className="text-gold" />
              </div>
              <h3 className="text-base font-medium tracking-tight mb-3">{feat.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
