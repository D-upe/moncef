import { ArrowUpRight, Eyebrow, GoldDiamond, Reveal } from "./ui";
import { useLang } from "../i18n";

export default function Acting() {
  const { c } = useLang();

  return (
    <section
      id="ecran"
      className="relative w-full overflow-hidden bg-lacquer py-20 sm:py-24 lg:py-28"
    >
      <img
        src="images/texture.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.10] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 8% 10%, rgba(217,162,39,0.14), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-[1360px] gap-12 px-6 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:px-16">
        <div>
          <Reveal>
            <Eyebrow tone="light">{c.acting.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-7 font-display text-[clamp(2.5rem,5.9vw,4.95rem)] leading-[1] font-medium tracking-[-0.022em] text-paper">
              {c.acting.headingA}
              <br />
              <span className="foil italic">{c.acting.headingAccent}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-8 max-w-[34rem] text-[1.045rem] leading-[1.82] text-paper/76">
              {c.acting.para}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <a
                href="#galerie"
                className="btn rounded-full border border-foil/45 px-8 py-4 text-[0.705rem] font-semibold tracking-[0.21em] text-foil uppercase backdrop-blur-sm hover:bg-foil hover:text-lacquer"
              >
                {c.acting.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-3">
                <GoldDiamond className="h-[6px] w-[6px] text-gold" />
                <span className="text-[0.705rem] font-medium tracking-[0.19em] text-paper/62 uppercase">
                  {c.acting.badge}
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Collage */}
        <Reveal delay={0.12}>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <figure className="group relative col-span-2 overflow-hidden sm:col-span-1">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src="images/acting.jpeg"
                  alt={c.acting.imgAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 border border-foil/25"
              />
            </figure>

            <figure className="group relative overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="images/film.jpg"
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
            </figure>

            <figure className="group relative overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src="images/gallery-stage.jpg"
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
            </figure>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
