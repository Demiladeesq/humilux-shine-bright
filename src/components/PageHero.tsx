import { WaveDivider } from "./WaveDivider";

export function PageHero({
  title,
  subtitle,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <section className="relative pt-16 pb-4">
      <div className={`max-w-5xl mx-auto px-6 lg:px-10 ${align === "center" ? "text-center" : ""}`}>
        <h1 className="text-5xl md:text-6xl font-bold gradient-text">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-xl text-foreground/70 font-medium">{subtitle}</p>
        )}
      </div>
      <div className="mt-10">
        <WaveDivider />
      </div>
    </section>
  );
}
