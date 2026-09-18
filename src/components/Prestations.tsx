import { Eyebrow, Reveal, ArrowUpRight, GoldDiamond } from "./ui";
import { useLang } from "../i18n";

  const IMGS = ["images/wedding.jpg", "images/event.webp"];
const RATIOS = ["aspect-[4/3]", "aspect-[4/5]"];
const SPANS = ["lg:col-span-7", "lg:col-span-5"];
const OFFSETS = ["", "lg:mt-16"];

export default function Prestations() {
  const { c } = useLang();

  return (
    <section
      id="prestations"
      className="relative w-full overflow-hidden bg-paper py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{c.prestations.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 font-display text-[clamp(2.5rem,6.2vw,5rem)] leading-[1] font-medium tracking-[-0.022em] text-ink">
                {c.prestations.headingA}{" "}
                <span className="text-gold-deep italic">
                  {c.prestations.headingAccent}
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="lg:pb-4">
              <div className="flex items-start gap-4">
                <GoldDiamond className="mt-[0.55rem] h-[7px] w-[7px] shrink-0 text-terra" />
                <p className="max-w-[26rem] text-[1.02rem] leading-[1.82] text-ink-soft">
                  {c.prestations.intro}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Asymmetric mosaic */}
        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {c.prestations.items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={0.06 * i}
              className={`${SPANS[i]} ${OFFSETS[i]}`}
            >
              <figure className="group relative h-full overflow-hidden">
                <div className={`${RATIOS[i]} w-full overflow-hidden`}>
                  <img
                    src={IMGS[i]}
                    alt={it.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.055]"
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(28,22,16,0.86) 0%, rgba(28,22,16,0.18) 42%, rgba(28,22,16,0) 70%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-4 border border-foil/0 transition-colors duration-700 group-hover:border-foil/40"
                />

                <span className="tnum absolute top-6 left-6 font-display text-[1.05rem] font-medium tracking-[0.14em] text-foil/90">
                  {it.idx}
                </span>

                <figcaption className="absolute right-6 bottom-7 left-6">
                  <h3 className="font-display text-[clamp(1.55rem,3.1vw,2.35rem)] leading-tight font-medium text-paper">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-[28rem] text-[0.915rem] leading-[1.72] text-paper/82">
                    {it.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-[0.665rem] font-semibold tracking-[0.22em] text-foil uppercase"
                  >
                    {c.prestations.request}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Wide banner */}
        <Reveal delay={0.1}>
          <figure className="group relative mt-7 overflow-hidden lg:mt-2">
            <div className="aspect-[16/10] w-full overflow-hidden sm:aspect-[21/9]">
              <img
                src="images/hero.webp"
                alt={c.prestations.bannerAlt}
                loading="lazy"
                className="h-full w-full object-cover object-[62%_42%] transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(100deg, rgba(28,22,16,0.82) 0%, rgba(28,22,16,0.42) 48%, rgba(28,22,16,0.12) 100%)",
              }}
            />
            <figcaption className="absolute inset-y-0 left-0 flex max-w-[34rem] flex-col justify-center px-7 sm:px-12 lg:px-16">
              <span className="label text-foil">
                {c.prestations.bannerLabel}
              </span>
              <p className="mt-5 font-display text-[clamp(1.55rem,3.4vw,2.65rem)] leading-[1.16] font-medium text-paper">
                {c.prestations.bannerQuote}
              </p>
              <span className="mt-5 text-[0.72rem] font-medium tracking-[0.22em] text-paper/62 uppercase">
                {c.prestations.bannerAuthor}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
