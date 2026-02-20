import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowUpRight, Clock } from "@phosphor-icons/react";

export const blogPosts = [
  {
    id: "1",
    slug: "ia-recrutement-revolution",
    title: "Comment l'IA révolutionne le recrutement en 2024",
    excerpt: "L'intelligence artificielle n'est plus une promesse : elle transforme déjà radicalement la façon dont les entreprises trouvent leurs talents.",
    category: "Intelligence Artificielle",
    readTime: "5 min",
    date: "12 Novembre 2024",
    author: "Éléonore Vasseur",
    authorRole: "CEO & Co-fondatrice",
    avatar: "EV",
    content: `
L'intelligence artificielle est en train de remodeler fondamentalement le paysage du recrutement. Là où autrefois un processus d'embauche prenait des semaines, voire des mois, les algorithmes modernes compressent ce délai à quelques heures.

**Un matching plus précis**

Les modèles de machine learning analysent non seulement les compétences techniques, mais aussi les soft skills, le style de communication, la culture d'entreprise et même la trajectoire de carrière souhaitée. Le résultat : des correspondances beaucoup plus pertinentes.

**La fin des biais inconscients**

L'IA, lorsqu'elle est bien entraînée, peut réduire significativement les biais de recrutement. En se concentrant sur les compétences et les résultats plutôt que sur des critères subjectifs, elle ouvre le champ à des profils qui auraient été ignorés.

**Les chiffres parlent**

Selon nos données internes, les entreprises utilisant notre matching IA réduisent leur temps de recrutement de 70% en moyenne. La satisfaction des nouvelles recrues, mesurée à 6 mois, est 40% supérieure aux méthodes traditionnelles.

**Ce qui change pour les talents**

Pour les freelances et les candidats, l'IA change aussi la donne. Plus besoin de postuler à des dizaines d'offres. Les opportunités viennent à vous, qualifiées et contextualisées.
    `,
  },
  {
    id: "2",
    slug: "freelance-2024-tendances",
    title: "Les 5 tendances du freelancing en 2024",
    excerpt: "Le marché du travail indépendant évolue à grande vitesse. Voici ce que les freelances doivent savoir pour rester compétitifs.",
    category: "Tendances",
    readTime: "4 min",
    date: "28 Octobre 2024",
    author: "Marc Beaulieu",
    authorRole: "CTO & Co-fondateur",
    avatar: "MB",
    content: `
Le freelancing n'est plus une niche : en France, plus de 4 millions de personnes exercent en indépendant. Et ce chiffre ne cesse de croître. Voici les tendances qui définissent ce marché en 2024.

**1. L'hyper-spécialisation**

Les généralistes cèdent la place aux experts. Les clients cherchent des profils pointus, capables d'intervenir précisément sur un sujet plutôt que de "faire un peu de tout".

**2. Les missions courtes et modulaires**

Les entreprises découpent leurs projets en briques plus petites pour trouver l'expert idéal pour chaque étape. Résultat : des missions plus courtes, mais mieux rémunérées.

**3. L'IA comme multiplicateur de productivité**

Les freelances qui maîtrisent les outils d'IA facturent en moyenne 35% plus cher que leurs pairs. L'IA devient un différenciateur clé.

**4. Le remote by default**

Le travail à distance n'est plus un avantage, c'est un standard. Les clients ne cherchent plus des talents locaux, mais les meilleurs talents disponibles.

**5. La communauté comme filet de sécurité**

Les freelances rejoignent des collectifs et des communautés pour partager les risques, les opportunités et les ressources.
    `,
  },
  {
    id: "3",
    slug: "construire-profil-gagnant",
    title: "Comment construire un profil qui attire les meilleures missions",
    excerpt: "Votre profil en ligne est votre vitrine. Découvrez les stratégies pour vous démarquer et attirer des clients de qualité.",
    category: "Conseils",
    readTime: "6 min",
    date: "15 Octobre 2024",
    author: "Aïsha Koné",
    authorRole: "Head of Design",
    avatar: "AK",
    content: `
Un profil freelance médiocre attire des missions médiocres. Un profil d'exception attire des clients d'exception. La corrélation est directe.

**La photo : votre première impression**

Investissez dans une photo professionnelle. Elle augmente les vues de profil de 300% selon nos données. Elle doit transmettre confiance, expertise et accessibilité.

**Le titre : 10 mots pour tout dire**

Évitez les titres génériques ("Développeur web"). Soyez spécifique et orienté valeur : "Expert React & Performance Web pour startups SaaS".

**Les résultats avant les compétences**

Les clients n'achètent pas des compétences, ils achètent des résultats. Au lieu de "Je maîtrise Figma", dites "J'ai redesigné l'onboarding d'une app SaaS, réduisant le taux d'abandon de 40%".

**La preuve sociale**

Des avis clients authentiques valent plus que n'importe quel autre argument. Demandez des témoignages après chaque mission réussie.

**La mise à jour régulière**

L'algorithme de NextGen favorise les profils actifs et régulièrement mis à jour. Une mise à jour mensuelle suffit à maintenir votre visibilité.
    `,
  },
  {
    id: "4",
    slug: "futur-travail-humain-ia",
    title: "L'avenir du travail : humain et IA, une collaboration inévitable",
    excerpt: "L'IA ne remplacera pas les humains. Elle redéfinit leur rôle. Les entreprises qui comprennent cela prendront une longueur d'avance.",
    category: "Futur du travail",
    readTime: "7 min",
    date: "3 Octobre 2024",
    author: "Julien Forestier",
    authorRole: "Head of Growth",
    avatar: "JF",
    content: `
La peur que l'IA remplace les humains est compréhensible mais mal orientée. La vraie question n'est pas "IA vs humains", mais "comment humains et IA collaborent pour créer plus de valeur ?".

**Ce que l'IA fait mieux**

L'IA excelle dans les tâches répétitives, le traitement de grandes quantités de données, la reconnaissance de patterns et la disponibilité 24h/24. Elle ne se fatigue pas, ne se décourage pas, ne prend pas de congés.

**Ce que les humains font mieux**

L'empathie, la créativité contextuelle, le jugement éthique, la construction de relations de confiance, l'adaptation à l'imprévu. Ces compétences deviennent plus précieuses, pas moins.

**Le rôle émergent des "AI workers"**

Une nouvelle catégorie de travailleurs émerge : des personnes capables d'orchestrer des workflows IA, de les superviser et de compléter ce qu'ils ne peuvent pas faire. Ces profils sont en forte demande sur NextGen.

**Se préparer**

Développez votre pensée critique, votre créativité et vos compétences interpersonnelles. Apprenez à utiliser les outils IA de votre domaine. L'adaptation proactive est la clé.

**Conclusion**

L'avenir appartient aux humains qui savent travailler avec l'IA, pas contre elle.
    `,
  },
];

export default function Blog() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 page-enter">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="text-xs text-gold tracking-widest uppercase mb-4">Blog</p>
            <h1 className="text-5xl md:text-6xl font-light tracking-tighter">
              Insights & <span className="text-gradient">Ressources</span>
            </h1>
          </div>

          {/* Featured post */}
          <Link
            to={`/blog/${blogPosts[0].slug}`}
            className="block glass-card-hover p-8 mb-8 animate-on-scroll group"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-gold border border-gold/20 px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                  <span className="text-xs text-dim flex items-center gap-1">
                    <Clock size={11} weight="light" /> {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light tracking-tighter mb-3 group-hover:text-gradient transition-all duration-300">
                  {blogPosts[0].title}
                </h2>
                <p className="text-dim text-sm leading-relaxed max-w-xl">{blogPosts[0].excerpt}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center text-xs text-[hsl(var(--background))]">
                  {blogPosts[0].avatar}
                </div>
                <div>
                  <p className="text-xs font-medium">{blogPosts[0].author}</p>
                  <p className="text-xs text-dim">{blogPosts[0].date}</p>
                </div>
                <ArrowUpRight size={16} weight="light" className="text-dim group-hover:text-gold transition-colors ml-4" />
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.slice(1).map((post, i) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass-card-hover p-6 animate-on-scroll group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs text-gold border border-gold/20 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs text-dim">{post.readTime}</span>
                </div>
                <h3 className="text-base font-medium tracking-tight mb-3 leading-tight group-hover:text-gradient transition-all duration-300">
                  {post.title}
                </h3>
                <p className="text-dim text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-gold flex items-center justify-center text-[10px] text-[hsl(var(--background))]">
                      {post.avatar}
                    </div>
                    <span className="text-xs text-dim">{post.date}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-dim group-hover:text-gold transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
