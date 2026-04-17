import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import bannerPortfolio from "@/assets/banner-portfolio.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Shopify & Marketing Case Studies | Humilux Network" },
      {
        name: "description",
        content:
          "Real Shopify stores and digital marketing campaigns delivered by Humilux Network — with measurable results in conversion, revenue, and growth.",
      },
      { property: "og:title", content: "Our Portfolio — Humilux Network" },
      {
        property: "og:description",
        content:
          "Browse Shopify store builds, redesigns, and digital marketing campaigns we've shipped for ecommerce brands worldwide.",
      },
    ],
  }),
  component: PortfolioPage,
});

type Tab = "all" | "shopify" | "marketing";

const projects = [
  {
    cat: "shopify" as const,
    label: "Shopify Store",
    title: "ModaHaus — Premium Fashion Store",
    desc: "Designed and optimized a high-converting Shopify store with refined UI/UX, lightning-fast load times, and a streamlined mobile checkout.",
    growth: "+85%",
    gradient: "from-purple-300 to-pink-200",
  },
  {
    cat: "shopify" as const,
    label: "Shopify Store",
    title: "Glow Naturals — Organic Skincare",
    desc: "Redesigned a year-old store into a clean, brand-led experience with five distinct sections, refined product flows, and a smoother checkout.",
    growth: "+55%",
    gradient: "from-amber-200 to-rose-200",
  },
  {
    cat: "shopify" as const,
    label: "Shopify Store",
    title: "Casa Decor — Modern Living",
    desc: "Built a bespoke Shopify storefront paired with a marketing strategy that boosted traffic, leads, and repeat conversions month over month.",
    growth: "+72%",
    gradient: "from-stone-200 to-amber-100",
  },
  {
    cat: "shopify" as const,
    label: "Shopify Store",
    title: "Urban Kicks — Sneaker Store",
    desc: "Designed a fast, mobile-first Shopify experience for a streetwear brand — with limited-drop launches, countdown timers, and high conversion rates.",
    growth: "+75%",
    gradient: "from-slate-300 to-zinc-200",
  },
  {
    cat: "marketing" as const,
    label: "Digital Marketing",
    title: "Meta Ads Campaign — FitFuel",
    desc: "Built a full Meta Ads funnel from cold prospecting to retargeting, scaling profitably to a +290% return on ad spend in 90 days.",
    growth: "+290%",
    gradient: "from-violet-300 to-indigo-200",
  },
  {
    cat: "marketing" as const,
    label: "Digital Marketing",
    title: "Instagram Growth — Beauty Brand",
    desc: "Organic content strategy and influencer partnerships that grew an audience from 4K to 60K+ engaged followers and lifted store traffic.",
    growth: "+65%",
    gradient: "from-pink-300 to-fuchsia-200",
  },
  {
    cat: "marketing" as const,
    label: "Digital Marketing",
    title: "SEO Campaign — Fashion Store",
    desc: "Technical SEO audit, keyword strategy, and content production that lifted organic sessions and pushed key product pages to page 1.",
    growth: "+82%",
    gradient: "from-emerald-200 to-teal-200",
  },
  {
    cat: "marketing" as const,
    label: "Digital Marketing",
    title: "Email Marketing — Jewelry Brand",
    desc: "Klaviyo welcome, abandoned cart, browse abandonment, and post-purchase flows that now drive 30%+ of total store revenue on autopilot.",
    growth: "+76%",
    gradient: "from-yellow-200 to-orange-200",
  },
];

function PortfolioPage() {
  const [tab, setTab] = useState<Tab>("all");

  const filtered = projects.filter((p) => tab === "all" || p.cat === tab);

  const tabs: { key: Tab; label: string }[] = [
    { key: "all", label: "All Projects" },
    { key: "shopify", label: "Shopify Store" },
    { key: "marketing", label: "Digital Marketing" },
  ];

  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="Real Shopify stores. Real campaigns. Real results."
        banner={bannerPortfolio}
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-lg text-foreground/75 leading-relaxed">
            Every project below was designed, developed, or marketed by the Humilux Network team. We measure success by what matters most: revenue, conversion rate, and lasting growth — not pretty screenshots.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center bg-card border border-primary/10 rounded-full p-2 max-w-2xl mx-auto shadow-card">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                tab === t.key
                  ? "gradient-primary text-primary-foreground shadow-soft"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="bg-card rounded-2xl border border-primary/10 shadow-card overflow-hidden hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {p.label}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-primary text-sm font-bold px-3 py-1 rounded-full">
                  {p.growth} growth
                </span>
                <div className="absolute inset-0 flex items-center justify-center text-primary/40 font-bold text-2xl">
                  {p.title.split(" — ")[0]}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-primary leading-snug">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.desc}</p>
                <div className="mt-4 bg-accent rounded-lg px-3 py-2 text-sm">
                  <span className="text-foreground/70">Result: </span>
                  <span className="font-bold text-primary">{p.growth} growth</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        <div className="gradient-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground shadow-glow">
          <h2 className="text-4xl md:text-5xl font-bold">Want Results Like These?</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Let's build a high-converting Shopify store and growth system for your brand. Same team, same standard of work, dedicated to your goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-8 py-4 font-bold hover:scale-[1.02] transition-transform"
            >
              ✉ Start Your Project
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-primary-foreground rounded-full px-8 py-4 font-bold hover:bg-white/20 transition-colors"
            >
              <Briefcase className="h-4 w-4" /> Hire on Upwork
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
