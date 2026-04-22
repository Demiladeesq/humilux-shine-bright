import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShoppingBag, RefreshCw, TrendingUp, Megaphone, CheckCircle2, Star, Briefcase } from "lucide-react";
import { WaveDivider } from "@/components/WaveDivider";
import bannerHome from "@/assets/banner-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humilux Network — Shopify Design & Digital Marketing Agency" },
      {
        name: "description",
        content:
          "Humilux Network builds high-converting Shopify stores and runs growth marketing campaigns that turn visitors into loyal customers. Design. Optimize. Convert.",
      },
      { property: "og:title", content: "Humilux Network — Design. Optimize. Convert." },
      {
        property: "og:description",
        content:
          "We design beautiful Shopify stores and run digital marketing systems that drive real, measurable revenue for ecommerce brands worldwide.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Design",
    desc: "Beautiful, custom-built Shopify stores designed around your brand identity, your products, and your customer journey — engineered to convert from the very first visit.",
  },
  {
    icon: RefreshCw,
    title: "Store Redesign & Optimization",
    desc: "We refresh outdated or underperforming stores, fix slow load times, fix clunky checkouts, and rebuild the user experience so your store finally feels premium.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    desc: "Using real data, A/B testing, heatmaps, and proven CRO frameworks, we turn more of your existing traffic into paying customers — no extra ad spend required.",
  },
  {
    icon: Megaphone,
    title: "Ecommerce Marketing",
    desc: "Full-funnel SEO, paid ads on Meta and Google, email & SMS automation, and influencer partnerships that grow your revenue month after month.",
  },
];

function HomePage() {
  return (
    <>
      {/* Hero with banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl" />
        </div>

        {/* Banner image strip */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8">
          <div className="relative rounded-3xl overflow-hidden shadow-glow border border-primary/10 aspect-[16/7] md:aspect-[16/5]">
            <img
              src={bannerHome}
              alt="Humilux Network — Shopify and digital marketing experts"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/20" />
            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-14 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur text-primary-foreground px-4 py-1.5 text-xs md:text-sm font-semibold w-fit border border-white/20">
                <Sparkles className="h-4 w-4" /> Shopify & Digital Marketing Experts
              </span>
              <h1 className="mt-4 text-3xl md:text-6xl font-bold text-primary-foreground leading-[1.05] drop-shadow-lg">
                Design. Optimize. Convert.
              </h1>
              <p className="mt-4 text-sm md:text-lg text-primary-foreground/95 max-w-lg">
                Humilux Network helps ambitious ecommerce brands launch stunning Shopify stores and run marketing systems that turn clicks into loyal, paying customers.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text">Your store deserves more</span>
              <br />
              <span className="text-foreground">than a template.</span>
            </h2>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              Most Shopify stores look the same and convert at half their potential. We design custom, brand-led experiences and pair them with marketing systems that grow revenue predictably — so you stop guessing and start scaling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:humiluxnetwork@gmail.com?subject=Start%20My%20Project&body=Hi%20Humilux%20Network%2C%20I%27d%20like%20to%20start%20a%20project%20with%20you."
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-7 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold border-2 border-primary/30 text-primary hover:bg-primary/5 transition-colors"
              >
                <Briefcase className="h-4 w-4" /> Hire on Upwork
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground text-xs font-bold"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground/70">Top-rated by brands worldwide on Upwork</p>
              </div>
            </div>
          </div>

          {/* Visual stats card */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl shadow-glow p-8 border border-primary/10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "+85%", label: "Avg. conversion lift" },
                  { stat: "120+", label: "Stores launched" },
                  { stat: "+290%", label: "Best ad ROI" },
                  { stat: "24h", label: "Reply time" },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-gradient-to-br from-accent to-secondary p-5">
                    <div className="text-3xl font-bold gradient-text">{s.stat}</div>
                    <div className="text-sm text-foreground/70 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl gradient-primary text-primary-foreground p-5">
                <div className="text-sm opacity-80">This month</div>
                <div className="text-2xl font-bold">+42% store revenue</div>
                <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[78%] rounded-full" />
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-2xl bg-card shadow-glow p-4 border border-primary/10 hidden md:block">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* Services preview */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">What We Do</h2>
          <p className="mt-3 text-lg text-foreground/70">
            A complete, end-to-end growth toolkit for ecommerce brands — from your first product page to your hundredth campaign.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-2xl p-6 border border-primary/10 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Explore all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-gradient-to-b from-secondary/40 to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Why brands pick Humilux</h2>
            <p className="mt-4 text-lg text-foreground/70">
              We're not a generic agency juggling 50 industries. We focus exclusively on Shopify and the marketing layer around it — every project we touch is tuned for measurable revenue, not vanity metrics.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  t: "Proven, measurable success",
                  d: "We don't promise traffic — we promise sales. Every project ships with clear KPIs and monthly performance reports so you always know what's working.",
                },
                {
                  t: "Tailored strategies, not templates",
                  d: "Your brand isn't generic, so neither is our approach. Every store, funnel, and campaign is custom-built for your audience, your products, and your goals.",
                },
                {
                  t: "Ongoing support that scales with you",
                  d: "From launch day to month 12 and beyond, we stay on as your growth partner — continuously optimizing, testing, and shipping improvements.",
                },
                {
                  t: "Top-rated on Upwork",
                  d: "We've earned 5-star feedback from brands across fashion, beauty, home, and wellness — verified through our public Upwork profile.",
                },
              ].map((i) => (
                <li key={i.t} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-primary">{i.t}</div>
                    <div className="text-foreground/70">{i.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "100%", l: "Project ownership — you keep everything we build" },
              { v: "30+", l: "Brands scaled across 4 continents" },
              { v: "5★", l: "Average client rating on Upwork" },
              { v: "24h", l: "Average response time, 6 days a week" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-card p-6 border border-primary/10 shadow-card text-center">
                <div className="text-4xl font-bold gradient-text">{s.v}</div>
                <div className="mt-2 text-sm text-foreground/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative gradient-primary rounded-3xl p-12 md:p-16 text-center text-primary-foreground overflow-hidden shadow-glow">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-bold relative">Ready to Grow Your Sales?</h2>
          <p className="mt-4 text-lg opacity-90 relative max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll review your store, identify your biggest growth levers, and show you exactly how Humilux Network can help you scale.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center relative">
            <a
              href="mailto:humiluxnetwork@gmail.com?subject=Free%20Consultation%20Request&body=Hi%20Humilux%20Network%2C%20I%27d%20like%20to%20book%20a%20free%2030-minute%20consultation."
              className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-8 py-4 font-bold hover:scale-[1.02] transition-transform"
            >
              Get a Free Consultation <ArrowRight className="h-4 w-4" />
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
