import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, RefreshCw, TrendingUp, Megaphone, CheckCircle2, ArrowRight, Briefcase } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import bannerServices from "@/assets/banner-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Shopify Design, CRO & Marketing | Humilux Network" },
      {
        name: "description",
        content:
          "Custom Shopify store design, store redesign and optimization, conversion rate optimization, and full-funnel ecommerce marketing — delivered by Humilux Network.",
      },
      { property: "og:title", content: "Our Services — Humilux Network" },
      {
        property: "og:description",
        content:
          "Everything ecommerce brands need to launch beautifully and grow profitably — Shopify design, CRO, and digital marketing under one roof.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Design",
    desc: "Custom-coded Shopify stores designed from scratch around your brand. We handle theme architecture, product page design, mobile optimization, app integration, and launch — so you get a store that looks premium, loads fast, and converts on day one.",
    features: ["Custom Liquid theme development", "Mobile-first responsive design", "Speed & performance tuning", "Payment & shipping setup"],
  },
  {
    icon: RefreshCw,
    title: "Store Redesign & Optimization",
    desc: "Already on Shopify but underperforming? We audit your existing store, identify what's hurting conversions, and rebuild the weak spots — from outdated layouts and clunky navigation to broken checkout flows — without losing your SEO or customer history.",
    features: ["Full UX & conversion audit", "Theme rebuild or migration", "Checkout flow optimization", "Page speed improvements"],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization (CRO)",
    desc: "More traffic isn't always the answer — usually, more conversions is. Using heatmaps, session recordings, A/B testing, and proven CRO frameworks, we systematically increase the percentage of visitors who actually buy from you.",
    features: ["Data-driven A/B testing", "Heatmap & session analysis", "Funnel optimization", "Cart abandonment recovery"],
  },
  {
    icon: Megaphone,
    title: "Ecommerce Marketing",
    desc: "A complete growth engine: paid ads on Meta, Google, and TikTok, SEO that ranks, email & SMS automations that print money, and influencer partnerships that build social proof. We run the whole funnel so you can focus on your product.",
    features: ["Meta, Google & TikTok ads", "SEO & content strategy", "Email & SMS automation (Klaviyo)", "Influencer outreach"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Everything you need to launch beautifully and grow profitably — under one roof."
        banner={bannerServices}
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-foreground/75 leading-relaxed">
            From your first product page to your hundredth marketing campaign, Humilux Network offers a complete suite of Shopify and digital marketing services. We're designers, developers, and growth marketers — so you don't have to hire three different agencies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl p-8 border border-primary/10 shadow-card hover:shadow-glow transition-shadow"
            >
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center shadow-soft flex-shrink-0">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary border-b-2 border-primary/20 pb-2 inline-block">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-foreground/75 leading-relaxed">{s.desc}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why we're best */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Why We're the Best Fit</h2>
          <p className="mt-3 text-foreground/70 text-lg">
            We're not the cheapest agency, and we're not the biggest. We're the most invested in your results.
          </p>
          <ul className="mt-8 space-y-4 text-left">
            {[
              {
                t: "Proven, repeatable success",
                d: "We've helped 30+ brands hit measurable revenue and traffic milestones — backed by real Upwork reviews and case studies, not stock photos.",
              },
              {
                t: "Tailored strategies, not playbooks",
                d: "Cookie-cutter agencies plug your brand into a template. We start every engagement with a custom audit and strategy built around your audience and goals.",
              },
              {
                t: "Ongoing support that scales with you",
                d: "We don't ghost after launch. Monthly check-ins, performance reports, and continuous optimization keep your store improving long after go-live.",
              },
            ].map((i) => (
              <li key={i.t} className="flex gap-3 bg-card p-5 rounded-xl border border-primary/10 shadow-card">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-primary">{i.t}: </span>
                  <span className="text-foreground/75">{i.d}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Ready to Grow Your Sales?</h2>
          <p className="mt-3 text-foreground/70 text-lg max-w-2xl mx-auto">
            Book a free strategy call and we'll show you exactly which services will move the needle fastest for your store.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-8 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
            >
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold border-2 border-primary/30 text-primary hover:bg-primary/5 transition-colors"
            >
              <Briefcase className="h-4 w-4" /> Hire on Upwork
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
