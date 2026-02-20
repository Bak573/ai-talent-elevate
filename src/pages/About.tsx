import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Sparkle, Users, Target } from "@phosphor-icons/react";

const team = [
  { name: "Éléonore Vasseur", role: "CEO & Co-fondatrice", avatar: "EV", bio: "Ex-Google, 10 ans dans le recrutement tech." },
  { name: "Marc Beaulieu", role: "CTO & Co-fondateur", avatar: "MB", bio: "ML Engineer, ex-Doctolib, passionné d'IA." },
  { name: "Aïsha Koné", role: "Head of Design", avatar: "AK", bio: "Designer senior, ex-Figma Community Lead." },
  { name: "Julien Forestier", role: "Head of Growth", avatar: "JF", bio: "Growth hacker, 0 → 1M utilisateurs × 3 startups." },
];

const values = [
  { icon: Sparkle, title: "Excellence", desc: "Nous ne faisons aucun compromis sur la qualité des talents et des expériences que nous proposons." },
  { icon: Users, title: "Communauté", desc: "NextGen est avant tout une communauté de personnes ambitieuses qui se soutiennent mutuellement." },
  { icon: Target, title: "Impact", desc: "Chaque mise en relation que nous facilitons a un impact concret sur des projets et des carrières réels." },
];

export default function About() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 page-enter">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="max-w-3xl mb-24">
            <p className="text-xs text-gold tracking-widest uppercase mb-6">À propos</p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
              Nous construisons le futur du{" "}
              <span className="text-gradient">travail</span>
            </h1>
            <p className="text-dim text-lg leading-relaxed">
              NextGen est né d'un constat simple : les meilleurs talents peinent à trouver les meilleures opportunités. L'IA change tout.
            </p>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-2xl font-light tracking-tighter mb-10 animate-on-scroll">Nos valeurs</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {values.map((v, i) => (
                <div key={v.title} className="glass-card-hover p-8 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-9 h-9 rounded-xl border border-gold/20 bg-gold/5 flex items-center justify-center mb-5">
                    <v.icon size={16} weight="light" className="text-gold" />
                  </div>
                  <h3 className="text-base font-medium mb-2">{v.title}</h3>
                  <p className="text-dim text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-24">
            <h2 className="text-2xl font-light tracking-tighter mb-10 animate-on-scroll">L'équipe fondatrice</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {team.map((m, i) => (
                <div key={m.name} className="glass-card p-6 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-sm font-medium text-[hsl(var(--background))] mb-4">
                    {m.avatar}
                  </div>
                  <h3 className="text-sm font-medium tracking-tight">{m.name}</h3>
                  <p className="text-xs text-gold mb-2">{m.role}</p>
                  <p className="text-dim text-xs leading-relaxed">{m.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-12 text-center animate-on-scroll" style={{ boxShadow: "0 0 60px rgba(212,160,55,0.06)" }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-t-xl" />
            <h2 className="text-3xl font-light tracking-tighter mb-4">Prêt à rejoindre l'aventure ?</h2>
            <p className="text-dim text-sm mb-8">Rejoignez les 12 000 talents qui font déjà confiance à NextGen.</p>
            <button className="btn-neuro px-8 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
              Créer mon profil <ArrowRight size={14} weight="bold" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
