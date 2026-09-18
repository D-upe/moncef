import {
  Eyebrow,
  Reveal,
  PhoneIcon,
  ArrowUpRight,
  GoldDiamond,
} from "./ui";
import { useLang } from "../i18n";

const ROMAN = ["I", "II", "III", "IV"];

export default function About() {
  const { c, rtl } = useLang();

  return (
    <section id="apropos" className="relative w-full overflow-hidden bg-paper">
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-70" />
      <img
        src="images/texture.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-multiply"
      />

      <div className="relative grid w-full lg:grid-cols-[0.92fr_1.08fr]">
        {/* Portrait — bleeds off the page edge */}
        <div className="relative min-h-[26rem] w-full lg:min-h-[52rem]">
          <div className="absolute inset-0 lg:right-10">
            <img
              src="images/portrait.jpg"
              alt={c.about.portraitAlt}
              className="h-full w-full object-cover object-[52%_28%]"
              loading="lazy"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(28,22,16,0.16) 0%, rgba(28,22,16,0) 46%, rgba(247,241,231,0.30) 100%)",
              }}
            />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-6 border border-foil/45 lg:inset-x-12 lg:inset-y-14 lg:right-[4.25rem]"
          />

          {/* Overlapping caption plane */}
          <Reveal
            delay={0.15}
            className="absolute right-6 bottom-6 left-6 max-w-[22rem] lg:right-0 lg:left-auto lg:bottom-16"
          >
            <div className="bg-lacquer/96 px-7 py-6 shadow-[0_40px_70px_-38px_rgba(28,22,16,0.95)] backdrop-blur-[2px] lg:pr-16">
              <div className="flex items-center gap-2.5">
                <GoldDiamond className="h-[6px] w-[6px] text-gold" />
                <span className="label text-gold">{c.about.captionLabel}</span>
              </div>
              <div className="tnum mt-3 font-display text-[3.4rem] leading-none font-light text-paper">
                2011
              </div>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-paper/72">
                {c.about.captionText}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Editorial column */}
        <div className="relative px-6 py-20 sm:px-10 lg:py-28 lg:pr-16 lg:pl-16 xl:pr-24 xl:pl-20">
          <Reveal>
            <Eyebrow>{c.about.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-[clamp(2.35rem,5.4vw,4.35rem)] leading-[1.02] font-medium tracking-[-0.02em] text-ink">
              {c.about.headingA}
              <br className="hidden sm:block" /> {c.about.headingB}{" "}
              <span className="text-gold-deep italic">
                {c.about.headingAccent}
              </span>{" "}
              {c.about.headingC}
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-[38rem] text-[1.06rem] leading-[1.82] text-ink-soft">
              {!rtl && (
                <span className="float-left mt-[0.42em] mr-3 font-display text-[4.4rem] leading-[0.72] font-medium text-gold-deep">
                  {c.about.para1Lead}
                </span>
              )}
              {rtl ? c.about.para1Lead + c.about.para1 : c.about.para1}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-[38rem] text-[1.02rem] leading-[1.82] text-sand">
              {c.about.para2Lead}
              <em className="font-display font-medium text-ink-soft not-italic">
                {c.about.para2Em}
              </em>
              {c.about.para2End}
            </p>
          </Reveal>

          {/* Ruled credentials */}
          <div className="mt-12 border-t border-gold-deep/22">
            {c.about.credentials.map((cred, i) => (
              <Reveal key={cred.title} delay={0.06 * i}>
                <div className="group grid grid-cols-[2.6rem_1fr] items-start gap-x-4 border-b border-gold-deep/16 py-5 transition-colors duration-500 hover:bg-paper-deep/45">
                  <span className="pt-[0.28rem] font-display text-[1.15rem] font-medium text-gold-deep/75 transition-colors duration-400 group-hover:text-terra">
                    {ROMAN[i]}
                  </span>
                  <div>
                    <h3 className="text-[0.78rem] font-semibold tracking-[0.17em] text-ink uppercase">
                      {cred.title}
                    </h3>
                    <p className="mt-2 max-w-[32rem] text-[0.925rem] leading-[1.72] text-sand">
                      {cred.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contact"
                className="btn rounded-full bg-ink px-8 py-4 text-[0.7rem] font-semibold tracking-[0.21em] text-paper uppercase hover:bg-lacquer"
              >
                <PhoneIcon className="h-3.5 w-3.5 text-foil" />
                {c.about.cta1}
              </a>
              <a
                href="#prestations"
                className="group inline-flex items-center gap-2 text-[0.71rem] font-semibold tracking-[0.21em] text-gold-deep uppercase"
              >
                {c.about.cta2}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
