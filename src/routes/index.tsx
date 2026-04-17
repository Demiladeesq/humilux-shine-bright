import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShoppingBag, RefreshCw, TrendingUp, Megaphone, CheckCircle2, Star } from "lucide-react";
import { WaveDivider } from "@/components/WaveDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humilux Network — Shopify Design & Digital Marketing" },
      {
        name: "description",
        content:
          "We build high-converting Shopify stores and run growth marketing campaigns. Design. Optimize. Convert.",
      },
      { property: "og:title", content: "Humilux Network — Design. Optimize. Convert." },
      {
        property: "og:description",
        content: "High-converting Shopify stores and digital marketing that drive real revenue.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: ShoppingBag, title: "Shopify Store Design", desc: "Custom, conversion-focused stores tailored to your brand." },
  { icon: RefreshCw, title: "Store Redesign & Optimization", desc: "Refresh outdated stores and boost user experience." },
  { icon: TrendingUp, title: "Conversion Rate Optimization", desc: "Turn more visitors into paying customers with data." },
  { icon: Megaphone, title: "Ecommerce Marketing", desc: "SEO, PPC, and email campaigns that grow revenue." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 -right-32 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-sm font-semibold">
              <Sparkles className="h-4 w-4" /> Shopify & Digital Marketing Experts
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              <span className="gradient-text">Design.</span>
              <br />
              <span className="gradient-text">Optimize.</span>
              <br />
              <span className="text-foreground">Convert.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-lg">
              We help ecommerce brands build stunning Shopify stores and run marketing systems that turn clicks into customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-7 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold border-2 border-primary/30 text-primary hover:bg-primary/5 transition-colors"
              >
                See Past Projects
              </Link>
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
                <p className="text-foreground/70">Trusted by growing brands worldwide</p>
              </div>
            </div>
          </div>

          {/* Visual card */}
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
          <p className="mt-3 text-lg text-foreground/70">A complete growth toolkit for ecommerce brands.</p>
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
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
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
              We're not a generic agency. We focus on Shopify and the marketing layer around it — every project is tuned for measurable revenue.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { t: "Proven Success", d: "Clear, measurable improvements in sales and traffic." },
                { t: "Tailored Strategies", d: "Custom approaches that fit your brand and audience." },
                { t: "Ongoing Support", d: "Continuous optimization and expert advice." },
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
              { v: "100%", l: "Project ownership" },
              { v: "30+", l: "Brands scaled" },
              { v: "5★", l: "Avg. client rating" },
              { v: "24h", l: "Response time" },
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
          <p className="mt-4 text-lg opacity-90 relative">Let's take your store to the next level.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white text-primary rounded-full px-8 py-4 font-bold hover:scale-[1.02] transition-transform relative"
          >
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
