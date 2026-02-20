import { useEffect, useRef } from "react";

const logos = [
  "TechCrunch", "Forbes", "Le Monde", "Les Échos", "Wired",
  "Fast Company", "VentureBeat", "Product Hunt", "TechCrunch", "Forbes", "Le Monde", "Les Échos", "Wired",
  "Fast Company", "VentureBeat", "Product Hunt",
];

export default function FeaturedInSection() {
  return (
    <section className="py-16 border-y border-white/[0.05] overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-8">
        <p className="text-xs text-dim-2 tracking-widest uppercase">Ils parlent de nous</p>
      </div>

      {/* Infinite scroll logos */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex items-center gap-16 animate-scroll-left" style={{ width: "max-content" }}>
          {logos.map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <span className="text-xl md:text-2xl font-light text-dim-2 tracking-tight hover:text-dim transition-colors duration-300 cursor-default">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
