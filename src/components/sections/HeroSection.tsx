import { ArrowRight, Play } from "@phosphor-icons/react";
import mockup from "@/assets/mockup.png";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-0 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial-gold opacity-60 blur-3xl" />
        <div className="absolute top-10 right-1/4 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-32 h-32 rounded-full bg-gold/5 blur-2xl" />
      </div>

      <div className="container mx-auto px-6 flex flex-col items-center text-center page-enter relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs text-gold tracking-wider">Alimenté par l'Intelligence Artificielle</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter max-w-4xl leading-[0.95] mb-6">
          Le talent de demain,{" "}
          <span className="text-gradient">disponible aujourd'hui</span>
        </h1>

        {/* Subtext */}
        <p className="text-dim text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          NextGen connecte les entreprises les plus ambitieuses aux talents les plus qualifiés — en quelques secondes, grâce à l'IA.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="btn-neuro px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
            Réserver une Démo <ArrowRight size={14} weight="bold" />
          </button>
          <button className="btn-neuro-outline px-8 py-3.5 rounded-xl text-sm flex items-center gap-2">
            <Play size={14} weight="fill" /> Voir en action
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8 md:gap-12 mt-14 mb-16">
          {[
            { value: "12 000+", label: "Talents actifs" },
            { value: "98%", label: "Satisfaction client" },
            { value: "< 48h", label: "Temps de matching" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-light text-gradient">{stat.value}</div>
              <div className="text-xs text-dim mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mockup image */}
      <div className="relative w-full max-w-6xl mx-auto px-6 animate-float z-10">
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl"
          style={{ boxShadow: "0 40px 120px rgba(212, 160, 55, 0.08), 0 0 0 1px rgba(255,255,255,0.05)" }}
        >
          <img
            src={mockup}
            alt="Interface NextGen"
            className="w-full object-cover"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
