import { Eyebrow, GoldDiamond, Reveal } from "./ui";
import { useLang } from "../i18n";

export default function Testimonials() {
  const { c } = useLang();

  return (
    <section
      id="temoignages"
      className="relative w-full overflow-hidden bg-paper py-24 sm:py-28 lg:py-32"
    >
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <Reveal>
          <Eyebrow tone="terra">{c.testimonials.eyebrow}</Eyebrow>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <Reveal delay={0.08}>
            <figure className="relative">
              <GoldDiamond className="h-7 w-7 text-gold-deep/35" />
              <blockquote className="mt-7 font-display text-[clamp(1.72rem,3.9vw,3.15rem)] leading-[1.28] font-normal text-ink italic">
                {c.testimonials.quoteA}{" "}
                <span className="text-gold-deep not-italic">
                  {c.testimonials.quoteAccent}
                </span>{" "}
                {c.testimonials.quoteB}
              </blockquote>
              <figcaption className="mt-9 flex items-center gap-4">
                <span className="h-px w-11 bg-gold-deep/55" />
                <span>
                  <span className="block text-[0.765rem] font-semibold tracking-[0.2em] text-ink uppercase">
                    {c.testimonials.author}
                  </span>
                  <span className="mt-1.5 block text-[0.705rem] tracking-[0.19em] text-sand uppercase">
                    {c.testimonials.authorRole}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="border-t border-gold-deep/22 lg:border-t-0 lg:border-s lg:ps-14">
            {c.testimonials.items.map((s, i) => (
              <Reveal key={s.name} delay={0.08 * i}>
                <div className="border-b border-gold-deep/16 py-7 first:pt-0 lg:first:pt-1">
                  <p className="font-display text-[1.16rem] leading-[1.72] text-ink-soft italic">
                    « {s.quote} »
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-[0.715rem] font-semibold tracking-[0.19em] text-ink uppercase">
                      {s.name}
                    </span>
                    <span className="h-[3px] w-[3px] rounded-full bg-gold-deep/50" />
                    <span className="text-[0.675rem] tracking-[0.17em] text-sand uppercase">
                      {s.place}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
