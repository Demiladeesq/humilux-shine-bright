import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, RefreshCw, TrendingUp, Megaphone, CheckCircle2, ArrowRight, Briefcase, Sparkles, Crown, Rocket } from "lucide-react";
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
    packages: [
      {
        name: "Starter",
        price: "$499",
        tagline: "Perfect for new brands launching their first store",
        includes: [
          "Pre-built premium theme setup",
          "Up to 10 products uploaded",
          "Basic homepage, product & cart pages",
          "Mobile responsive design",
          "Payment gateway integration",
          "1 round of revisions",
          "7–10 day delivery",
        ],
      },
      {
        name: "Growth",
        price: "$1,200",
        tagline: "For brands ready to scale with a polished store",
        includes: [
          "Custom theme customization",
          "Up to 30 products uploaded & optimized",
          "Full store design (homepage, collections, PDPs, blog)",
          "Speed optimization & SEO basics",
          "App integrations (reviews, upsells, email)",
          "3 rounds of revisions",
          "14 day delivery + 30 day support",
        ],
      },
      {
        name: "Premium",
        price: "$2,800+",
        tagline: "Bespoke flagship store built to dominate your niche",
        includes: [
          "100% custom-coded Liquid theme",
          "Unlimited products & custom collections",
          "Custom animations & interactions",
          "Advanced CRO-focused product pages",
          "Full SEO setup + analytics",
          "Premium app stack & automation",
          "Unlimited revisions + 60 day support",
        ],
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "Store Redesign & Optimization",
    desc: "Already on Shopify but underperforming? We audit your existing store, identify what's hurting conversions, and rebuild the weak spots — from outdated layouts and clunky navigation to broken checkout flows — without losing your SEO or customer history.",
    features: ["Full UX & conversion audit", "Theme rebuild or migration", "Checkout flow optimization", "Page speed improvements"],
    packages: [
      {
        name: "Starter",
        price: "$350",
        tagline: "Quick refresh for stores that need a facelift",
        includes: [
          "Visual audit of homepage & PDPs",
          "Homepage redesign",
          "Mobile UX fixes",
          "Basic speed improvements",
          "Navigation cleanup",
          "1 revision round",
          "5–7 day delivery",
        ],
      },
      {
        name: "Growth",
        price: "$900",
        tagline: "Full conversion-focused store overhaul",
        includes: [
          "Complete UX & conversion audit",
          "Redesign of all key pages",
          "Checkout & cart optimization",
          "Speed & Core Web Vitals tuning",
          "App audit & cleanup",
          "SEO preservation during migration",
          "30 day post-launch support",
        ],
      },
      {
        name: "Premium",
        price: "$2,200+",
        tagline: "End-to-end rebuild + ongoing CRO partnership",
        includes: [
          "Full theme rebuild or migration",
          "Custom code + advanced features",
          "Heatmap & session recording setup",
          "Conversion funnel rebuild",
          "3 months of ongoing optimization",
          "Monthly performance reports",
          "Priority support",
        ],
      },
    ],
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization (CRO)",
    desc: "More traffic isn't always the answer — usually, more conversions is. Using heatmaps, session recordings, A/B testing, and proven CRO frameworks, we systematically increase the percentage of visitors who actually buy from you.",
    features: ["Data-driven A/B testing", "Heatmap & session analysis", "Funnel optimization", "Cart abandonment recovery"],
    packages: [
      {
        name: "Starter",
        price: "$400",
        tagline: "One-time CRO audit with actionable wins",
        includes: [
          "Full store CRO audit (PDF report)",
          "Heatmap setup (Hotjar/Microsoft Clarity)",
          "Top 10 prioritized recommendations",
          "Checkout flow review",
          "1 strategy call (60 min)",
          "Delivered in 7 days",
        ],
      },
      {
        name: "Growth",
        price: "$1,100/mo",
        tagline: "Monthly testing program for steady lift",
        includes: [
          "Everything in Starter",
          "2 A/B tests per month",
          "Funnel & abandonment analysis",
          "Implementation of winning variants",
          "Email & SMS recovery setup",
          "Monthly performance report",
          "Bi-weekly strategy calls",
        ],
      },
      {
        name: "Premium",
        price: "$2,500/mo",
        tagline: "Full CRO partnership for serious scaling brands",
        includes: [
          "Everything in Growth",
          "4–6 A/B tests per month",
          "Custom landing pages for campaigns",
          "Advanced segmentation & personalization",
          "Dedicated CRO strategist",
          "Weekly check-ins + Slack support",
          "Quarterly deep-dive reviews",
        ],
      },
    ],
  },
  {
    icon: Megaphone,
    title: "Ecommerce Marketing",
    desc: "A complete growth engine: paid ads on Meta, Google, and TikTok, SEO that ranks, email & SMS automations that print money, and influencer partnerships that build social proof. We run the whole funnel so you can focus on your product.",
    features: ["Meta, Google & TikTok ads", "SEO & content strategy", "Email & SMS automation (Klaviyo)", "Influencer outreach"],
    packages: [
      {
        name: "Starter",
        price: "$600/mo",
        tagline: "Single-channel growth for early-stage brands",
        includes: [
          "1 paid channel (Meta or Google)",
          "Ad creative direction (up to 6 ads/mo)",
          "Campaign setup & management",
          "Pixel & tracking setup",
          "Basic email flows (welcome + abandoned cart)",
          "Monthly performance report",
          "Ad spend not included",
        ],
      },
      {
        name: "Growth",
        price: "$1,500/mo",
        tagline: "Multi-channel marketing for scaling brands",
        includes: [
          "2–3 paid channels (Meta, Google, TikTok)",
          "12+ ad creatives per month",
          "Full Klaviyo email & SMS automations",
          "On-page SEO + 2 blog posts/mo",
          "Influencer outreach (5–10 creators)",
          "Bi-weekly strategy calls",
          "Detailed reporting dashboard",
        ],
      },
      {
        name: "Premium",
        price: "$3,500+/mo",
        tagline: "Full-funnel growth engine, end to end",
        includes: [
          "All paid channels managed",
          "Unlimited ad creative iterations",
          "Advanced email/SMS segmentation & automation",
          "Full SEO program + 4 blog posts/mo",
          "Influencer & UGC campaign management",
          "Dedicated growth team + Slack channel",
          "Weekly strategy calls + quarterly planning",
        ],
      },
    ],
  },
];

const tierStyles = [
  { icon: Sparkles, badge: "Starter", accent: "border-primary/15" },
  { icon: Rocket, badge: "Most Popular", accent: "border-primary ring-2 ring-primary/30" },
  { icon: Crown, badge: "Premium", accent: "border-primary/15" },
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

        {/* Pricing Packages */}
        <div className="mt-24">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Pricing Packages</h2>
            <p className="mt-3 text-foreground/70 text-lg">
              Transparent, flexible pricing for every stage of growth. Choose a tier per service — or bundle them for a custom rate.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((s) => (
              <div key={`${s.title}-packages`}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shadow-soft flex-shrink-0">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary">{s.title}</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {s.packages.map((pkg, idx) => {
                    const style = tierStyles[idx];
                    const Icon = style.icon;
                    const isFeatured = idx === 1;
                    return (
                      <div
                        key={pkg.name}
                        className={`relative bg-card rounded-2xl p-7 border ${style.accent} shadow-card hover:shadow-glow transition-all flex flex-col`}
                      >
                        {isFeatured && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-soft">
                            {style.badge}
                          </span>
                        )}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                            <Icon className="h-5 w-5" />
                          </div>
                          <h4 className="text-xl font-bold text-foreground">{pkg.name}</h4>
                        </div>
                        <div className="mb-2">
                          <span className="text-3xl font-extrabold gradient-text">{pkg.price}</span>
                        </div>
                        <p className="text-sm text-foreground/65 mb-5 min-h-[2.5rem]">{pkg.tagline}</p>
                        <ul className="space-y-2.5 mb-6 flex-1">
                          {pkg.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <a
                          href={`mailto:humiluxnetwork@gmail.com?subject=${encodeURIComponent(`${s.title} — ${pkg.name} Package Inquiry`)}&body=${encodeURIComponent(`Hi Humilux Network,%0D%0A%0D%0AI'm interested in the ${pkg.name} package for ${s.title}. Please share next steps.`)}`}
                          className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-sm transition-all ${
                            isFeatured
                              ? "gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02]"
                              : "border-2 border-primary/30 text-primary hover:bg-primary/5"
                          }`}
                        >
                          Get Started <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-foreground/65 text-sm max-w-2xl mx-auto">
            Need something custom or want to bundle multiple services? <a href="mailto:humiluxnetwork@gmail.com?subject=Custom%20Package%20Inquiry" className="text-primary font-semibold hover:underline">Email us</a> for a tailored quote.
          </p>
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
            <a
              href="mailto:humiluxnetwork@gmail.com?subject=Free%20Consultation%20Request&body=Hi%20Humilux%20Network%2C%20I%27d%20like%20to%20book%20a%20free%20consultation."
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-8 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
            >
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
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
