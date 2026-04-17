export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`wave-divider ${flip ? "rotate-180" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="var(--primary)"
          opacity="0.15"
        />
        <path
          d="M0,50 C240,90 480,10 720,50 C960,90 1200,10 1440,50 L1440,80 L0,80 Z"
          fill="var(--primary)"
          opacity="0.35"
        />
        <path
          d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,80 L0,80 Z"
          fill="var(--primary)"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
