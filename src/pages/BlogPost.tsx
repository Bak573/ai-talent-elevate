import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "./Blog";
import { ArrowLeft, Clock, ArrowUpRight } from "@phosphor-icons/react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <p className="text-dim">Article introuvable.</p>
          <Link to="/blog" className="text-gold text-sm mt-4 inline-block">← Retour au Blog</Link>
        </div>
      </div>
    );
  }

  // Parse markdown-like bold
  const renderContent = (text: string) => {
    const lines = text.trim().split("\n");
    return lines.map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return <h3 key={i} className="text-lg font-medium tracking-tight mt-8 mb-3">{line.replace(/\*\*/g, "")}</h3>;
      }
      if (line.trim() === "") return <br key={i} />;
      // inline bold
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      return (
        <p key={i} className="text-dim text-base leading-relaxed mb-1">
          {parts.map((part, j) =>
            part.startsWith("**") ? (
              <strong key={j} className="text-foreground font-medium">{part.replace(/\*\*/g, "")}</strong>
            ) : part
          )}
        </p>
      );
    });
  };

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 page-enter">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Back */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-dim text-sm hover:text-foreground transition-colors mb-10">
              <ArrowLeft size={14} weight="light" /> Retour au Blog
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-gold border border-gold/20 px-3 py-1 rounded-full">{post.category}</span>
              <span className="text-xs text-dim flex items-center gap-1">
                <Clock size={11} weight="light" /> {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">{post.title}</h1>
            <p className="text-dim text-lg leading-relaxed mb-8">{post.excerpt}</p>

            {/* Author */}
            <div className="flex items-center gap-3 pb-8 mb-8 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-xs text-[hsl(var(--background))]">
                {post.avatar}
              </div>
              <div>
                <p className="text-sm font-medium">{post.author}</p>
                <p className="text-xs text-dim">{post.authorRole} · {post.date}</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-1 mb-16">
              {renderContent(post.content)}
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div>
                <div className="glow-line mb-8" />
                <h2 className="text-xl font-light tracking-tighter mb-6">Articles connexes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="glass-card-hover p-5 group">
                      <span className="text-xs text-gold mb-2 block">{r.category}</span>
                      <h3 className="text-sm font-medium tracking-tight mb-2 group-hover:text-gradient transition-all duration-300 leading-tight">
                        {r.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-dim">{r.date}</span>
                        <ArrowUpRight size={13} className="text-dim group-hover:text-gold transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
