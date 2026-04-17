import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, RefreshCw, TrendingUp, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Humilux Network" },
      {
        name: "description",
        content:
          "Shopify store design, redesign, conversion rate optimization, and ecommerce marketing services from Humilux Network.",
      },
      { property: "og:title", content: "Our Services — Humilux Network" },
      { property: "og:description", content: "Boost your ecommerce business with Shopify and marketing experts." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Design",
    desc: "Custom Shopify store setup & design. We create unique, high-converting Shopify stores tailored to your brand.",
  },
  {
    icon: RefreshCw,
    title: "Store Redesign & Optimization",
    desc: "Revamp and optimize your existing store. We refresh outdated stores, enhance user experience, and boost performance.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Rate Optimization",
    desc: "Increase your store's conversion rates. We analyze data and implement strategies to turn more visitors into customers.",
  },
  {
    icon: Megaphone,
    title: "Ecommerce Marketing",
    desc: "We use SEO, PPC, and email marketing to attract and convert leads into loyal customers.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero title="Our Services" subtitle="Boost Your Ecommerce Business" />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-16">
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why we're best */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Why We're the Best</h2>
          <ul className="mt-8 space-y-4 text-left">
            {[
              { t: "Proven Success", d: "Clear, measurable improvement in sales and traffic." },
              { t: "Tailored Strategies", d: "Custom approaches that fit your business." },
              { t: "Ongoing Support", d: "Continuous optimization and expert advice." },
            ].map((i) => (
              <li
                key={i.t}
                className="flex gap-3 bg-card p-5 rounded-xl border border-primary/10 shadow-card"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
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
          <p className="mt-3 text-foreground/70 text-lg">Let's take your store to the next level!</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-8 py-4 font-semibold shadow-glow hover:scale-[1.02] transition-transform"
          >
            Get a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
