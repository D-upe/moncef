import {
  ArrowUpRight,
  Eyebrow,
  GoldDiamond,
  PhoneIcon,
  Reveal,
} from "./ui";
import { useLang } from "../i18n";

export default function Teaching() {
  const { c } = useLang();

  return (
    <section
      id="cours"
      className="relative w-full overflow-hidden bg-paper-deep py-24 sm:py-28 lg:py-32"
    >
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto grid w-full max-w-[1360px] gap-14 px-6 sm:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:px-16">
        {/* Copy + features */}
        <div>
          <Reveal>
            <Eyebrow tone="terra">{c.teaching.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-[clamp(2.5rem,5.9vw,4.85rem)] leading-[1] font-medium tracking-[-0.022em] text-ink">
              {c.teaching.headingA}
              <br />
              <span className="text-gold-deep italic">
                {c.teaching.headingAccent}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.13}>
            <p className="mt-8 max-w-[36rem] text-[1.055rem] leading-[1.82] text-ink-soft">
              {c.teaching.para1}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-5 max-w-[36rem] text-[1rem] leading-[1.82] text-sand">
              {c.teaching.para2}
            </p>
          </Reveal>

          {/* Feature grid */}
          <div className="mt-11 grid gap-px sm:grid-cols-2">
            {c.teaching.features.map((f, i) => (
              <Reveal key={f.title} delay={0.06 * i}>
                <div className="group h-full border-t border-gold-deep/22 pt-5 transition-colors duration-500">
                  <div className="flex items-start gap-3">
                    <GoldDiamond className="mt-[0.55rem] h-[5px] w-[5px] shrink-0 text-gold-deep/70 transition-colors duration-500 group-hover:text-terra" />
                    <div>
                      <h3 className="text-[0.755rem] font-semibold tracking-[0.19em] text-ink uppercase">
                        {f.title}
                      </h3>
                      <p className="mt-2.5 text-[0.915rem] leading-[1.72] text-sand">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="tel:+213556728933"
                className="btn rounded-full bg-gradient-to-r from-foil via-gold to-gold-deep px-8 py-4 text-[0.7rem] font-semibold tracking-[0.21em] text-lacquer uppercase shadow-[0_26px_48px_-28px_rgba(217,162,39,0.95)]"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                {c.teaching.cta}
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-[0.71rem] font-semibold tracking-[0.21em] text-gold-deep uppercase"
              >
                {c.nav.contact}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Poster block */}
        <Reveal delay={0.12}>
          <figure className="group relative mx-auto w-full max-w-[30rem] lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 border border-gold-deep/28 sm:-inset-6"
            />
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <img
                src="images/teaching.jpg"
                alt={c.teaching.imgAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.045]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(28,22,16,0.90) 0%, rgba(28,22,16,0.34) 38%, rgba(28,22,16,0.06) 72%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-5 border border-foil/45"
              />

              <figcaption className="absolute right-5 bottom-5 left-5 sm:right-8 sm:bottom-8 sm:left-8">
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-7 bg-foil" />
                  <span className="label text-foil">
                    {c.teaching.posterLabel}
                  </span>
                </div>
                <div className="mt-4 font-display text-[clamp(1.95rem,4.2vw,2.85rem)] leading-[1.05] font-medium text-paper">
                  {c.teaching.posterTitle}
                </div>
                <div className="mt-3 text-[0.705rem] font-semibold tracking-[0.21em] text-paper/72 uppercase">
                  {c.teaching.posterText}
                </div>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
