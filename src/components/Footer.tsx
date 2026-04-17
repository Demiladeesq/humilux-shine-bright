import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Clock, Globe, Phone, Briefcase } from "lucide-react";
import logo from "@/assets/humilux-logo.jpg";

export function Footer() {
  return (
    <footer className="relative mt-24 gradient-primary text-primary-foreground overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full -translate-y-px"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,60 C240,0 480,60 720,30 C960,0 1200,60 1440,20 L1440,0 L0,0 Z" fill="var(--background)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 object-contain mix-blend-screen" />
            <span className="text-xl font-bold">
              Humilux <span className="font-light opacity-80">Network</span>
            </span>
          </div>
          <p className="mt-4 text-primary-foreground/80 font-medium">Design. Optimize. Convert.</p>
          <p className="mt-3 text-sm text-primary-foreground/70 max-w-xs">
            We help Shopify brands turn their stores into powerful, high-converting marketing experiences.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-primary-foreground/80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  › {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-3 text-primary-foreground/85 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:humiluxnetwork@gmail.com" className="hover:text-white">
                humiluxnetwork@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+2349066050267" className="hover:text-white">
                +234 906 605 0267
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <a
                href="https://wa.me/message/KDYQZXMRNMJEN1"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                WhatsApp Chat
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <a
                href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Hire us on Upwork
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Mon – Sat, 9 AM – 6 PM (WAT)
            </li>
            <li className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Worldwide Service
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 text-center text-sm text-primary-foreground/75">
          © {new Date().getFullYear()} Humilux Network. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
