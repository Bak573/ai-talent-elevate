import step1 from "@/assets/step1.png";
import step2 from "@/assets/step2.png";
import step3 from "@/assets/step3.png";

const steps = [
  {
    number: "01",
    title: "Créez votre profil",
    description: "Renseignez vos compétences, disponibilités et ambitions. Notre IA analyse votre profil pour vous mettre en valeur.",
    image: step1,
  },
  {
    number: "02",
    title: "Décrivez votre besoin",
    description: "En quelques phrases, exprimez ce que vous cherchez. L'IA comprend le contexte, les subtilités et les priorités.",
    image: step2,
  },
  {
    number: "03",
    title: "Trouvez votre partenaire",
    description: "Recevez des matchs pertinents et qualifiés. Discutez, collaborez, et démarrez en quelques heures.",
    image: step3,
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs text-gold tracking-widest uppercase mb-4">Processus</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">
            Comment ça marche
          </h2>
          <p className="text-dim max-w-md mx-auto mt-4 text-sm leading-relaxed">
            Trois étapes simples pour trouver le talent idéal ou la mission parfaite.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="glass-card-hover p-8 animate-on-scroll"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number */}
              <div className="text-5xl font-light text-gradient opacity-40 mb-6">{step.number}</div>

              {/* Image */}
              <div className="rounded-xl overflow-hidden mb-6 aspect-[4/3] bg-white/[0.03]">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-90" />
              </div>

              <h3 className="text-lg font-light tracking-tight mb-3">{step.title}</h3>
              <p className="text-dim text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
