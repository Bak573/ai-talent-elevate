import { useState, useEffect, useRef } from "react";
import { Star, ArrowLeft, ArrowRight, TrendUp } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Sophie Martin",
    role: "CPO · Lumina",
    avatar: "SM",
    quote: "NextGen a transformé notre façon de recruter. En 48h, nous avons trouvé le développeur que nous cherchions depuis 3 mois.",
    result: "+40% de productivité en 60 jours",
    rating: 5,
  },
  {
    name: "Alexandre Dubois",
    role: "CEO · Veda Studio",
    avatar: "AD",
    quote: "L'algorithme de matching est bluffant. Il comprend vraiment le contexte de notre startup et propose des profils ultra pertinents.",
    result: "3 embauches clés en 2 semaines",
    rating: 5,
  },
  {
    name: "Camille Leclerc",
    role: "Directrice RH · Arkon",
    avatar: "CL",
    quote: "Fini les mois de sourcing laborieux. NextGen nous livre des talents vérifiés et qualifiés, immédiatement opérationnels.",
    result: "70% de réduction du temps de recrutement",
    rating: 5,
  },
  {
    name: "Thomas Renard",
    role: "Founder · Loop",
    avatar: "TR",
    quote: "Interface magnifique, UX impeccable, et surtout des résultats concrets. C'est exactement ce dont les startups ont besoin.",
    result: "ROI positif dès le 1er mois",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = (dir: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 250);
  };

  useEffect(() => {
    const interval = setInterval(() => go(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <p className="text-xs text-gold tracking-widest uppercase mb-4">Témoignages</p>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter">
            Ce qu'ils disent de nous
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div
            className="glass-card p-10 md:p-14 relative overflow-hidden transition-all duration-500"
            style={{ boxShadow: "0 20px 80px rgba(212,160,55,0.06)" }}
          >
            {/* Gold accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} weight="fill" className="text-gold" />
              ))}
            </div>

            <blockquote
              className={`text-xl md:text-2xl font-light leading-relaxed tracking-tight mb-8 transition-all duration-250 ${
                isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              "{t.quote}"
            </blockquote>

            {/* Result badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gold/20 bg-gold/5 mb-8 transition-all duration-250 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <TrendUp size={14} weight="light" className="text-gold" />
              <span className="text-xs text-gold">{t.result}</span>
            </div>

            {/* Author */}
            <div
              className={`flex items-center gap-4 transition-all duration-250 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-xs font-medium text-[hsl(var(--background))]">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs text-dim">{t.role}</div>
              </div>
            </div>

            {/* Nav */}
            <div className="absolute bottom-10 right-10 flex items-center gap-3">
              <button
                onClick={() => go(-1)}
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center hover:border-gold/30 transition-colors"
              >
                <ArrowLeft size={14} weight="light" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center hover:border-gold/30 transition-colors"
              >
                <ArrowRight size={14} weight="light" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-1.5 bg-gold" : "w-1.5 h-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
