import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Clock, Send, Briefcase, Instagram } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Humilux Network" },
      {
        name: "description",
        content:
          "Get in touch with Humilux Network. We reply within 24 hours. Email, WhatsApp, Upwork, or our contact form.",
      },
      { property: "og:title", content: "Contact Humilux Network" },
      { property: "og:description", content: "Let's talk about your project." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How fast can you start my project?",
    a: "We usually start within 1–2 days after discussing your requirements.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes! We work with clients globally and are comfortable across time zones.",
  },
  {
    q: "Can you redesign my existing Shopify store?",
    a: "Absolutely. We specialize in redesigning and optimizing Shopify stores for better conversions.",
  },
  {
    q: "What information do you need to begin?",
    a: "Basic access to your store (or idea details) and your goals. We'll guide you step-by-step.",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero title="Contact Us" subtitle="Let's Talk About Your Project" align="left" />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 pb-16">
        <p className="text-foreground/75 text-lg max-w-3xl">
          Have a project in mind or want to work together? Fill out the form and we'll get back to you within 24 hours.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <div className="bg-card rounded-2xl border border-primary/10 shadow-card p-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              ✉️ Send Us a Message
            </h2>
            {sent ? (
              <div className="mt-8 text-center py-12">
                <div className="h-16 w-16 mx-auto rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-3xl">
                  ✓
                </div>
                <p className="mt-4 text-lg font-semibold text-primary">Message sent!</p>
                <p className="mt-2 text-foreground/70">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your project…"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground rounded-xl py-4 font-bold shadow-soft hover:shadow-glow transition-shadow flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Get in touch */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-primary/10 shadow-card p-8">
              <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Upwork</div>
                      <div className="text-sm text-foreground/70 group-hover:text-primary transition-colors">
                        Visit Profile →
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                      <Instagram className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Instagram</div>
                      <div className="text-sm text-foreground/70">@humilux.network</div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    href="https://wa.me/message/KDYQZXMRNMJEN1"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="h-12 w-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">WhatsApp</div>
                      <div className="text-sm text-foreground/70 group-hover:text-primary transition-colors">
                        Chat with us →
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:humiluxnetwork@gmail.com" className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl gradient-primary text-primary-foreground flex items-center justify-center">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Email</div>
                      <div className="text-sm text-foreground/70 group-hover:text-primary transition-colors">
                        humiluxnetwork@gmail.com
                      </div>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-primary/10">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <Clock className="h-4 w-4" /> Quick Response
                </h3>
                <p className="mt-1 text-sm text-foreground/70">We typically reply within a few hours.</p>
                <div className="mt-3 inline-flex items-center gap-2 bg-accent text-accent-foreground rounded-full px-4 py-2 text-sm font-semibold">
                  Mon – Sat, 9 AM – 6 PM (WAT)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text text-center">Frequently Asked Questions</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="bg-card rounded-2xl border border-primary/10 shadow-card p-6 hover:shadow-glow transition-shadow"
              >
                <h3 className="font-bold text-primary">Q: {f.q}</h3>
                <p className="mt-3 text-foreground/75">
                  <span className="font-bold text-primary">A:</span> {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
