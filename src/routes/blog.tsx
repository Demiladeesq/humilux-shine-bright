import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Humilux Network" },
      {
        name: "description",
        content: "Tips and insights for Shopify success — design, conversion, and ecommerce marketing.",
      },
      { property: "og:title", content: "Our Blog — Humilux Network" },
      { property: "og:description", content: "Tips & Insights for Shopify Success." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "Top 5 Shopify Design Tips for 2025",
    date: "January 15, 2025",
    excerpt: "Discover the best design practices to boost your Shopify store's appeal and conversion.",
    category: "Shopify Tips",
  },
  {
    title: "How to Boost Your Store's Conversion Rate",
    date: "December 20, 2024",
    excerpt: "Effective strategies to turn visitors into loyal paying customers.",
    category: "Conversion Optimization",
  },
  {
    title: "Email Marketing Strategies for Ecommerce",
    date: "November 10, 2024",
    excerpt: "Learn how to use email marketing to drive recurring sales for your store.",
    category: "Ecommerce Marketing",
  },
  {
    title: "Case Study: From 0 to $50K in 90 Days",
    date: "October 5, 2024",
    excerpt: "How we scaled a fashion brand using paid ads and store optimization.",
    category: "Case Studies",
  },
];

const categories = ["Shopify Tips", "Conversion Optimization", "Ecommerce Marketing", "Case Studies"];

function BlogPage() {
  return (
    <>
      <PageHero title="Our Blog" subtitle="Tips & Insights for Shopify Success" align="left" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {posts.map((p) => (
            <article
              key={p.title}
              className="bg-card rounded-2xl border border-primary/10 shadow-card overflow-hidden grid sm:grid-cols-[200px_1fr] hover:shadow-glow transition-shadow"
            >
              <div className="bg-gradient-to-br from-primary/20 to-primary-glow/20 min-h-[160px] flex items-center justify-center">
                <div className="h-16 w-16 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center font-bold shadow-soft">
                  {p.title[0]}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                <h2 className="mt-2 text-xl font-bold text-primary">{p.title}</h2>
                <div className="mt-2 flex items-center gap-2 text-sm text-foreground/60">
                  <Calendar className="h-4 w-4" /> {p.date}
                </div>
                <p className="mt-3 text-foreground/75">{p.excerpt}</p>
                <button className="mt-4 inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-5 py-2 text-sm font-semibold shadow-soft hover:shadow-glow transition-shadow">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <aside className="space-y-6">
          <div className="bg-card rounded-2xl border border-primary/10 shadow-card p-6">
            <h3 className="text-xl font-bold text-primary border-b-2 border-primary/20 pb-2 inline-block">
              Categories
            </h3>
            <ul className="mt-5 space-y-2">
              {categories.map((c) => (
                <li key={c}>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary font-medium transition-colors"
                  >
                    › {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-2xl border border-primary/10 shadow-card p-6">
            <h3 className="text-xl font-bold text-primary">Subscribe to Our Newsletter</h3>
            <p className="mt-2 text-sm text-foreground/70">
              Get the latest tips and updates straight to your inbox.
            </p>
            <form className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="w-full gradient-primary text-primary-foreground rounded-lg py-3 font-semibold shadow-soft hover:shadow-glow transition-shadow"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="gradient-primary rounded-2xl p-6 text-primary-foreground shadow-glow">
            <h3 className="text-xl font-bold">Need help with your store?</h3>
            <p className="mt-2 text-sm opacity-90">Get a free consultation today.</p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 bg-white text-primary rounded-full px-5 py-2 font-semibold text-sm"
            >
              Contact us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
