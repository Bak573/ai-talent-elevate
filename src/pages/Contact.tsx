import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { EnvelopeSimple, MapPin, Phone, ArrowRight } from "@phosphor-icons/react";

export default function Contact() {
  useScrollAnimation();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 page-enter">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <p className="text-xs text-gold tracking-widest uppercase mb-4">Contact</p>
              <h1 className="text-5xl md:text-6xl font-light tracking-tighter mb-4">
                Parlons de votre <span className="text-gradient">projet</span>
              </h1>
              <p className="text-dim text-lg">Notre équipe répond en moins de 24h.</p>
            </div>

            <div className="grid md:grid-cols-5 gap-10">
              {/* Info */}
              <div className="md:col-span-2 space-y-6">
                {[
                  { icon: EnvelopeSimple, label: "Email", value: "hello@nextgen.ai" },
                  { icon: Phone, label: "Téléphone", value: "+33 1 23 45 67 89" },
                  { icon: MapPin, label: "Bureau", value: "12 rue de la Paix, Paris 75002" },
                ].map((item) => (
                  <div key={item.label} className="glass-card p-5 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg border border-gold/20 bg-gold/5 flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} weight="light" className="text-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-dim uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Form */}
              <div className="md:col-span-3 glass-card p-8 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-t-xl" />

                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                      <ArrowRight size={20} className="text-gold" weight="light" />
                    </div>
                    <h3 className="text-xl font-light tracking-tight mb-2">Message envoyé !</h3>
                    <p className="text-dim text-sm">Nous vous répondrons dans les 24 heures.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-dim uppercase tracking-widest block mb-2">Nom</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-gold/30 transition-colors"
                          placeholder="Jean Dupont"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-dim uppercase tracking-widest block mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-gold/30 transition-colors"
                          placeholder="jean@startup.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-dim uppercase tracking-widest block mb-2">Entreprise</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-gold/30 transition-colors"
                        placeholder="Ma Startup SAS"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-dim uppercase tracking-widest block mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-dim focus:outline-none focus:border-gold/30 transition-colors resize-none"
                        placeholder="Décrivez votre projet ou votre besoin..."
                      />
                    </div>
                    <button type="submit" className="btn-neuro w-full py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
                      Envoyer le message <ArrowRight size={14} weight="bold" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
