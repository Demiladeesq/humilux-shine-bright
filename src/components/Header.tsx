import { Link } from "@tanstack/react-router";
import { Mail, Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/80 hover:text-primary font-medium transition-colors relative"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/humiluxnetwork/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/5 transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01cb5bcebb3be53066"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-semibold text-sm border-2 border-primary/30 text-primary hover:bg-primary/5 transition-colors"
          >
            Upwork
          </a>
          <a
            href="mailto:humiluxnetwork@gmail.com?subject=Hello%20Humilux%20Network"
            className="hidden sm:inline-flex items-center gap-2 gradient-primary text-primary-foreground rounded-full px-6 py-3 font-semibold shadow-soft hover:shadow-glow transition-shadow"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-primary"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-primary/10 bg-background">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-lg hover:bg-accent text-foreground/80 font-medium"
                activeProps={{ className: "text-primary bg-accent font-semibold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="mailto:humiluxnetwork@gmail.com?subject=Hello%20Humilux%20Network"
              onClick={() => setOpen(false)}
              className="mt-2 py-3 px-3 rounded-lg gradient-primary text-primary-foreground font-semibold text-center"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
