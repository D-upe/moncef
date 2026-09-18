import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow, Reveal, ArrowUpRight } from "./ui";
import { useLang } from "../i18n";

const ROMAN = ["I", "II", "III", "IV"];

export default function Parcours() {
  const { c } = useLang();
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="parcours"
      className="relative w-full overflow-hidden bg-paper-deep py-24 sm:py-28 lg:py-32"
    >
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow tone="terra">{c.parcours.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 font-display text-[clamp(2.5rem,6.6vw,5.25rem)] leading-[0.98] font-medium tracking-[-0.022em] text-ink">
                {c.parcours.headingA}
                <br />
                <span className="text-gold-deep italic">
                  {c.parcours.headingAccent}
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <p className="max-w-[27rem] text-[1.02rem] leading-[1.82] text-ink-soft lg:pb-3">
              {c.parcours.intro}
            </p>
          </Reveal>
        </div>

        {/* Ruled list */}
        <div className="mt-16 border-t border-ink/12">
          {c.parcours.rows.map((r, i) => {
            const isActive = active === i;
            return (
              <Reveal key={r.title} delay={0.05 * i}>
                <div
                  className={`group border-b border-ink/12 transition-colors duration-500 ${
                    isActive ? "bg-paper/70" : "hover:bg-paper/45"
                  }`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    onClick={() => setActive(isActive ? null : i)}
                    className="flex w-full items-start gap-5 px-2 py-7 text-start sm:gap-8 sm:px-5 sm:py-9"
                  >
                    <span
                      className={`mt-[0.42rem] font-display text-[1.35rem] leading-none font-medium transition-colors duration-500 sm:text-[1.75rem] ${
                        isActive ? "text-terra" : "text-gold-deep/55"
                      }`}
                    >
                      {ROMAN[i]}
                    </span>

                    <span className="flex-1">
                      <span className="block font-display text-[clamp(1.72rem,4.2vw,2.95rem)] leading-[1.08] font-medium tracking-[-0.016em] text-ink">
                        {r.title}
                      </span>
                      <span className="mt-2.5 block text-[0.695rem] font-semibold tracking-[0.21em] text-sand uppercase">
                        {r.sub}
                      </span>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            key="body"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.5,
                              ease: [0.22, 0.61, 0.36, 1],
                            }}
                            className="block overflow-hidden"
                          >
                            <span className="block max-w-[46rem] pt-5 text-[0.985rem] leading-[1.8] text-ink-soft">
                              {r.body}
                            </span>
                            <span className="mt-5 flex flex-wrap gap-2.5">
                              {r.detail.map((d) => (
                                <span
                                  key={d}
                                  className="rounded-full border border-gold-deep/30 px-4 py-2 text-[0.635rem] font-semibold tracking-[0.19em] text-gold-deep uppercase"
                                >
                                  {d}
                                </span>
                              ))}
                            </span>
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>

                    <span
                      className={`mt-[0.45rem] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isActive
                          ? "rotate-0 border-terra bg-terra text-paper"
                          : "rotate-45 border-ink/18 text-ink/50 group-hover:rotate-0 group-hover:border-gold-deep/50 group-hover:text-gold-deep"
                      }`}
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
