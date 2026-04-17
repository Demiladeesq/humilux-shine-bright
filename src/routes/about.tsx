import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Humilux Network" },
      {
        name: "description",
        content:
          "Meet Humilux Network — a passionate team building high-converting Shopify stores and digital marketing systems.",
      },
      { property: "og:title", content: "About Humilux Network" },
      { property: "og:description", content: "Design. Optimize. Convert. Meet the team behind Humilux Network." },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Ajiki Demilade",
    role: "Founder & CEO",
    skills: ["Business Strategy", "Shopify Growth", "Client Management"],
  },
  {
    name: "Daniel Okoye",
    role: "Lead Developer",
    skills: ["Shopify Development", "Custom Coding", "Performance Optimization"],
  },
  {
    name: "Grace Williams",
    role: "UI/UX Designer",
    skills: ["Store Design", "User Experience", "Branding"],
  },
  {
    name: "Michael Ade",
    role: "Marketing Specialist",
    skills: ["Facebook Ads", "Conversion Funnels", "Email Marketing"],
  },
  {
    name: "Esther Bello",
    role: "SEO & Analytics Expert",
    skills: ["SEO Optimization", "Data Analysis", "Growth Tracking"],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero title="About Humilux Network" subtitle="Design. Optimize. Convert." />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-16">
        {/* Who we are */}
        <div className="bg-card rounded-2xl p-8 md:p-10 border border-primary/10 shadow-card">
          <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-3 inline-block">
            Who We Are
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            We are a passionate team dedicated to building high-converting Shopify stores that drive sales for our
            clients. With expertise across design, development, and marketing, we help ecommerce brands turn casual
            visitors into loyal customers.
          </p>
          <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
            From sleek custom storefronts to data-backed marketing systems, every project is built to convert and
            scale — beautifully.
          </p>
        </div>

        {/* Team */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Meet Our Team</h2>
          <p className="mt-3 text-foreground/70 text-lg">Specialists who deliver results.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-card rounded-2xl p-6 border border-primary/10 shadow-card hover:shadow-glow hover:-translate-y-1 transition-all"
            >
              <div className="h-16 w-16 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-soft mx-auto">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary text-center">{m.name}</h3>
              <p className="text-center text-foreground/70 text-sm font-medium">{m.role}</p>
              <ul className="mt-5 space-y-2 border-t border-primary/10 pt-4">
                {m.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mt-20 gradient-primary rounded-3xl p-10 md:p-14 text-center text-primary-foreground shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            To empower ecommerce brands with the design, technology, and marketing they need to grow — without the
            overhead of a traditional agency.
          </p>
        </div>
      </section>
    </>
  );
}
