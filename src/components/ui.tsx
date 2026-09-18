import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/* ---------------- Monogram (hand-drawn SVG) ---------------- */
export function Monogram({
  className = "h-11 w-11",
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 72"
      className={className}
      role="img"
      aria-label="Monogramme MB"
      fill="none"
    >
      <circle cx="36" cy="36" r="34" stroke={stroke} strokeWidth="1.2" opacity="0.55" />
      <circle cx="36" cy="36" r="29" stroke={stroke} strokeWidth="0.7" opacity="0.32" />
      <path
        d="M18 46V26l8.4 13.2L34.8 26v20"
        stroke={stroke}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 46V26h6.2a6.2 6.2 0 0 1 0 11.6H42m6.4 0a6.6 6.6 0 0 1 0 8.4H42"
        stroke={stroke}
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 53.5c7.8 4.4 19.2 4.4 27 0"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

/* ---------------- Icons ---------------- */
export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6.2 3.4h2.9l1.7 4.2-2 1.6a12.4 12.4 0 0 0 5.9 5.9l1.6-2 4.2 1.7v2.9a2.1 2.1 0 0 1-2.3 2.1A16.9 16.9 0 0 1 4.1 5.7a2.1 2.1 0 0 1 2.1-2.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.1" cy="6.9" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M3.6 20.4l1.3-4.2A8.1 8.1 0 1 1 7.9 19l-4.3 1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 7.6c.25-.55.5-.56.78-.57h.66c.2 0 .48-.05.72.53l.8 1.95c.08.2.13.42.02.62l-.42.68c-.13.2-.26.4-.12.68a7.4 7.4 0 0 0 3.2 2.8c.28.13.48.11.66-.1l.7-.8c.2-.22.4-.18.66-.08l1.83.87c.28.13.46.2.52.32.07.12.07.68-.16 1.33-.23.65-1.35 1.26-1.87 1.32-.5.06-1.13.28-3.8-.8a13.4 13.4 0 0 1-4.86-4.3c-.37-.6-.79-1.34-.79-2.28 0-.94.48-1.4.66-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M8.6 7H17v8.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8.4 5.6a1 1 0 0 1 1.53-.85l8.2 6.4a1.28 1.28 0 0 1 0 2.02l-8.2 6.4a1 1 0 0 1-1.62-.8Z" />
    </svg>
  );
}

/* ---------------- Reveal helpers ---------------- */
const riseVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "figure";
}) {
  const reduced = useReducedMotion();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      variants={riseVariants}
      initial={reduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -80px 0px" }}
      transition={{ delay, duration: 0.85, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

/** Text line that slides up from behind a mask */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <span className={`block overflow-hidden pb-[0.12em] ${className}`}>
      <motion.span
        className="block"
        initial={reduced ? { opacity: 1 } : { y: "108%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.15,
          delay,
          ease: [0.19, 0.9, 0.28, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Small caps label with a leading gold rule */
export function Eyebrow({
  children,
  tone = "gold",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "light" | "terra";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-foil"
      : tone === "terra"
        ? "text-terra"
        : "text-gold-deep";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-px w-9 ${tone === "light" ? "bg-foil/70" : "bg-gold-deep/60"}`}
      />
      <span className={`label ${color}`}>{children}</span>
    </div>
  );
}

export function GoldDiamond({ className = "h-1.5 w-1.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path d="M6 0.6 11.4 6 6 11.4 0.6 6z" fill="currentColor" />
    </svg>
  );
}
