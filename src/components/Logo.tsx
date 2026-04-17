import logo from "@/assets/humilux-logo.jpg";
import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src={logo}
        alt="Humilux Network logo"
        className="h-10 w-10 object-contain mix-blend-multiply"
      />
      <span className={`text-xl font-bold tracking-tight ${light ? "text-primary-foreground" : "text-primary"}`}>
        Humilux <span className="font-light opacity-80">Network</span>
      </span>
    </Link>
  );
}
