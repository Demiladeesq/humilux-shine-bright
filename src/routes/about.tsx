import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Target, Eye, Heart, Briefcase, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import bannerAbout from "@/assets/banner-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Humilux Network | Shopify & Marketing Agency" },
      {
        name: "description",
        content:
          "Meet Humilux Network — a passionate team of Shopify designers, developers, and marketers helping ecommerce brands worldwide design beautifully, optimize relentlessly, and convert consistently.",
      },
      { property: "og:title", content: "About Humilux Network — Our Story, Vision & Team" },
      {
        property: "og:description",
        content:
          "Discover the team, vision, and mission behind Humilux Network — and why ecommerce brands trust us to design, optimize, and convert.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Ajiki Demilade",
    role: "Founder & CEO",
    bio: "Leads strategy, partnerships, and client growth — making sure every project we ship moves the revenue needle.",
    skills: ["Business Strategy", "Shopify Growth", "Client Management"],
  },
  {
    name: "Daniel Okoye",
    role: "Lead Developer",
    bio: "Architect of every Shopify store we build. Obsessed with clean code, fast load times, and pixel-perfect execution.",
    skills: ["Shopify Development", "Custom Liquid Coding", "Performance Optimization"],
  },
  {
    name: "Grace Williams",
    role: "UI/UX Designer",
    bio: "Translates brand stories into beautiful, conversion-focused interfaces that customers actually want to shop in.",
    skills: ["Store Design", "User Experience", "Brand Identity"],
  },
  {
    name: "Michael Ade",
    role: "Marketing Specialist",
    bio: "Runs paid ads and conversion funnels that scale profitably — from first click to repeat purchase.",
    skills: ["Facebook & Google Ads", "Conversion Funnels", "Email Marketing"],
  },
  {
    name: "Esther Bello",
    role: "SEO & Analytics Expert",
    bio: "Turns data into decisions. Builds the SEO foundations and analytics dashboards that fuel long-term growth.",
    skills: ["SEO Optimization", "Data Analysis", "Growth Tracking"],
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        title="About Humilux Network"
        subtitle="Design. Optimize. Convert. — The team behind your next growth chapter."
        banner={bannerAbout}
      />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-16">
        {/* Who we are */}
        <div className="bg-card rounded-2xl p-8 md:p-10 border border-primary/10 shadow-card">
          <h2 className="text-3xl font-bold text-primary border-b-2 border-primary/20 pb-3 inline-block">
            Who We Are
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            Humilux Network is a boutique Shopify and digital marketing agency built by a passionate, multidisciplinary team of designers, developers, and growth marketers. We exist for one reason: to help ambitious ecommerce brands turn beautiful stores into profitable, predictable businesses.
          </p>
          <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
            From sleek custom storefronts and high-converting redesigns to data-driven marketing campaigns and SEO systems, every project we touch is engineered to convert and scale — beautifully, sustainably, and measurably. We've worked with founders across fashion, beauty, wellness, home decor, and more, and we're proudly verified and top-rated on Upwork.
          </p>
          <p className="mt-4 text-lg text-foreground/75 leading-relaxed">
            We're small enough to care deeply about every client and skilled enough to deliver agency-level work. When you hire Humilux Network, you're not getting a junior account manager — you're getting the team that actually does the work.
          </p>
          <div className="mt-8">
            <a
              href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-6 py-3 font-semibold shadow-soft hover:shadow-glow transition-shadow"
            >
              <Briefcase className="h-4 w-4" /> View our Upwork profile
            </a>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="bg-card rounded-2xl p-8 border border-primary/10 shadow-card hover:shadow-glow transition-shadow">
            <div className="h-14 w-14 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-primary">Our Vision</h2>
            <p className="mt-3 text-foreground/75 leading-relaxed">
              To become the most trusted Shopify and digital marketing partner for independent ecommerce brands worldwide — known for design that delights, marketing that performs, and relationships that last well beyond launch day.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-primary/10 shadow-card hover:shadow-glow transition-shadow">
            <div className="h-14 w-14 rounded-2xl gradient-primary text-primary-foreground flex items-center justify-center shadow-soft">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-primary">Our Mission</h2>
            <p className="mt-3 text-foreground/75 leading-relaxed">
              To empower ecommerce brands with the design, technology, and marketing systems they need to grow profitably — without the bloated retainers, slow timelines, and impersonal service of a traditional agency.
            </p>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-12 bg-card rounded-2xl p-8 md:p-10 border border-primary/10 shadow-card">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center">
              <Heart className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Our Core Values</h2>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                t: "Craftsmanship",
                d: "Every pixel, every line of code, every campaign is built with care. We sweat the small stuff because that's what separates a good store from a great one.",
              },
              {
                t: "Transparency",
                d: "Clear pricing, clear timelines, clear reports. You'll always know what we're doing, why, and what it's costing — no surprises, no jargon.",
              },
              {
                t: "Partnership",
                d: "We treat your business like ours. Your wins are our wins, and we're invested in your long-term growth, not a one-off project.",
              },
              {
                t: "Results, not vanity",
                d: "We measure success in revenue, retention, and ROI — not impressions, likes, or empty traffic. Numbers that matter to your bottom line.",
              },
            ].map((v) => (
              <div key={v.t} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-primary">{v.t}</div>
                  <div className="text-foreground/75 text-sm mt-1 leading-relaxed">{v.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Meet Our Team</h2>
          <p className="mt-3 text-foreground/70 text-lg max-w-2xl mx-auto">
            A handpicked group of specialists — each at the top of their craft — working together on every project we deliver.
          </p>
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
              <p className="mt-3 text-sm text-foreground/70 text-center leading-relaxed">{m.bio}</p>
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

        {/* CTA */}
        <div className="mt-20 gradient-primary rounded-3xl p-10 md:p-14 text-center text-primary-foreground shadow-glow">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something Great Together</h2>
          <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
            Whether you're launching your first store or scaling a 7-figure brand, our team is ready to help you design, optimize, and convert.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:humiluxnetwork@gmail.com?subject=Let%27s%20Work%20Together&body=Hi%20Humilux%20Network%2C%20I%27d%20like%20to%20get%20in%20touch."
              className="inline-flex items-center gap-2 bg-white text-primary rounded-full px-7 py-3 font-bold hover:scale-[1.02] transition-transform"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-primary-foreground rounded-full px-7 py-3 font-bold hover:bg-white/20 transition-colors"
            >
              <Briefcase className="h-4 w-4" /> Hire on Upwork
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
