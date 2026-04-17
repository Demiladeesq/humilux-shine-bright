import { WaveDivider } from "./WaveDivider";

export function PageHero({
  title,
  subtitle,
  align = "center",
  banner,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  banner?: string;
}) {
  return (
    <section className="relative pt-10 pb-4">
      {banner && (
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden shadow-glow border border-primary/10 aspect-[16/6] md:aspect-[16/5]">
            <img
              src={banner}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
            <div
              className={`relative z-10 h-full flex flex-col justify-center px-8 md:px-14 ${
                align === "center" ? "items-center text-center" : "items-start"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground drop-shadow-lg max-w-3xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 text-lg md:text-xl text-primary-foreground/90 font-medium max-w-2xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
      {!banner && (
        <div className={`max-w-5xl mx-auto px-6 lg:px-10 ${align === "center" ? "text-center" : ""}`}>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">{title}</h1>
          {subtitle && <p className="mt-4 text-xl text-foreground/70 font-medium">{subtitle}</p>}
        </div>
      )}
      <div className="mt-10">
        <WaveDivider />
      </div>
    </section>
  );
}
