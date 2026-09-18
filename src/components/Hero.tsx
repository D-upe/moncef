import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  Eyebrow,
  GoldDiamond,
  InstagramIcon,
  MaskLine,
  PhoneIcon,
} from "./ui";
import { useLang } from "../i18n";

export default function Hero() {
  const { c } = useLang();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "16%"],
  );
  const imgScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduced ? 1 : 1.12],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", reduced ? "0%" : "-22%"],
  );
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-lacquer"
    >
      {/* Full-bleed background */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="images/hero.webp"
          alt={c.hero.imgAlt}
          className="h-[112%] w-full object-cover object-[64%_center]"
          fetchPriority="high"
        />
      </motion.div>

      {/* Scrims */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(102deg, rgba(28,22,16,0.90) 0%, rgba(28,22,16,0.72) 30%, rgba(28,22,16,0.30) 62%, rgba(28,22,16,0.52) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          background:
            "linear-gradient(to top, rgba(28,22,16,0.92) 0%, rgba(28,22,16,0.35) 45%, rgba(28,22,16,0) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,22,16,0.55), rgba(28,22,16,0))",
        }}
      />

      {/* Left vertical rule + rotated eyebrow */}
      <div
        aria-hidden="true"
        className="absolute top-0 bottom-0 left-7 hidden w-px lg:block xl:left-11"
        style={{
          background:
            "linear-gradient(to bottom, rgba(240,197,102,0) 0%, rgba(240,197,102,0.55) 22%, rgba(240,197,102,0.55) 78%, rgba(240,197,102,0) 100%)",
        }}
      />
      <div className="absolute top-1/2 left-[3.35rem] hidden -translate-y-1/2 lg:block xl:left-[4.9rem]">
        <span className="label block rotate-180 whitespace-nowrap text-foil/75 [writing-mode:vertical-rl]">
          {c.hero.location}
        </span>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex min-h-[100svh] flex-col justify-end pt-32 pb-40 sm:pt-36 sm:pb-44 lg:pb-48"
      >
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Eyebrow tone="light">{c.hero.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="mt-7 font-display leading-[0.84] font-medium tracking-[-0.022em] text-paper">
            <MaskLine delay={0.28} className="text-[clamp(2.9rem,10.2vw,9.2rem)]">
              {c.hero.line1}
            </MaskLine>
            <MaskLine delay={0.42} className="text-[clamp(2.9rem,10.2vw,9.2rem)]">
              <span className="foil">{c.hero.line2}</span>
            </MaskLine>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.72, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,32rem)_auto] lg:items-end lg:gap-16"
          >
            <div>
              <div className="h-px w-16 bg-foil/60" />
              <p className="mt-6 max-w-xl font-display text-[1.24rem] leading-[1.62] text-paper/90 italic sm:text-[1.42rem]">
                {c.hero.lede}
              </p>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <a
                  href="tel:+213556728933"
                  className="btn rounded-full bg-gradient-to-r from-foil via-gold to-gold-deep px-8 py-4 text-[0.71rem] font-semibold tracking-[0.21em] text-lacquer uppercase shadow-[0_28px_50px_-26px_rgba(217,162,39,0.95)] hover:shadow-[0_34px_60px_-24px_rgba(217,162,39,1)]"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {c.hero.ctaPrimary}
                </a>
                <a
                  href="https://www.instagram.com/violoniste_moncef"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn rounded-full border border-foil/40 px-8 py-4 text-[0.71rem] font-semibold tracking-[0.21em] text-paper uppercase backdrop-blur-sm hover:border-foil hover:bg-paper hover:text-lacquer"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {c.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Proof block */}
            <div className="grid w-full max-w-md grid-cols-3 gap-5 border-t border-foil/22 pt-7 lg:max-w-none lg:border-t-0 lg:border-l lg:pt-0 lg:ps-12">
              {c.hero.stats.map((s, i) => (
                <div key={s.l} className={i === 2 ? "col-span-3 lg:col-span-1" : ""}>
                  <div className="tnum font-display text-[2.05rem] leading-none font-medium text-foil">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[0.62rem] font-medium tracking-[0.19em] text-paper/62 uppercase">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-[5.6rem] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2.5 md:flex">
        <span className="text-[0.58rem] font-medium tracking-[0.32em] text-paper/55 uppercase">
          {c.hero.scroll}
        </span>
        <span className="scroll-line block h-9 w-px bg-gradient-to-b from-foil/0 via-foil/80 to-foil/0" />
      </div>

      {/* Gold marquee ribbon */}
      <div className="marquee-wrap absolute inset-x-0 bottom-0 z-20 border-y border-gold-deep/35 bg-gradient-to-r from-gold-deep via-gold to-gold-deep py-4">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
              {c.hero.marquee.map((m) => (
                <span key={m} className="flex items-center">
                  <span className="px-7 text-[0.68rem] font-semibold tracking-[0.27em] text-lacquer/85 uppercase whitespace-nowrap">
                    {m}
                  </span>
                  <GoldDiamond className="h-[7px] w-[7px] text-lacquer/55" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
