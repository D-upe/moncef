import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow, GoldDiamond, PlayIcon, Reveal, ArrowUpRight } from "./ui";
import { useLang } from "../i18n";

type Item = {
  src: string;
  alt: string;
  cat: number;
  video?: string;
  span: string;
  ratio: string;
};

export default function Gallery() {
  const { c } = useLang();
  const filters = c.gallery.filters;

  const items: Item[] = [
    {
      src: "images/gallery-stage.jpg",
      alt: "",
      cat: 5,
      span: "lg:col-span-7",
      ratio: "aspect-[16/10]",
    },
    {
      src: "images/acting.jpg",
      alt: "",
      cat: 3,
      span: "lg:col-span-5",
      ratio: "aspect-[16/10] lg:aspect-[4/5]",
    },
    {
      src: "images/wedding.jpg",
      alt: "",
      cat: 1,
      span: "lg:col-span-5",
      ratio: "aspect-[4/3]",
    },
    {
      src: "images/hero.jpg",
      alt: "",
      cat: 5,
      video: "presentation.mp4",
      span: "lg:col-span-7",
      ratio: "aspect-[4/3]",
    },
    {
      src: "images/event.jpg",
      alt: "",
      cat: 2,
      video: "presentation.mp4",
      span: "lg:col-span-7",
      ratio: "aspect-[16/10]",
    },
    {
      src: "images/teaching.jpg",
      alt: "",
      cat: 4,
      span: "lg:col-span-5",
      ratio: "aspect-[16/10] lg:aspect-[4/5]",
    },
    {
      src: "images/gallery-hands.jpg",
      alt: "",
      cat: 5,
      span: "lg:col-span-4",
      ratio: "aspect-square",
    },
    {
      src: "images/film.jpg",
      alt: "",
      cat: 3,
      span: "lg:col-span-4",
      ratio: "aspect-square",
    },
    {
      src: "images/portrait.jpg",
      alt: "",
      cat: 2,
      span: "lg:col-span-4",
      ratio: "aspect-square",
    },
  ];

  const [filter, setFilter] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setVideoFailed(false);
  }, [openIdx, filter]);

  const visible = filter === 0 ? items : items.filter((i) => i.cat === filter);

  const close = useCallback(() => setOpenIdx(null), []);
  const step = useCallback(
    (dir: number) => {
      setOpenIdx((prev) => {
        if (prev === null) return prev;
        return (prev + dir + visible.length) % visible.length;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIdx === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = openIdx !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, step]);

  return (
    <section
      id="galerie"
      className="relative w-full overflow-hidden bg-paper py-24 sm:py-28 lg:py-32"
    >
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{c.gallery.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 font-display text-[clamp(2.55rem,6.4vw,5.15rem)] leading-[0.99] font-medium tracking-[-0.022em] text-ink">
                {c.gallery.headingA}
                <br />
                <span className="text-gold-deep italic">
                  {c.gallery.headingAccent}
                </span>{" "}
                {c.gallery.headingC}
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="flex items-start gap-4 lg:pb-3">
              <GoldDiamond className="mt-[0.55rem] h-[7px] w-[7px] shrink-0 text-terra" />
              <p className="max-w-[27rem] text-[1.02rem] leading-[1.82] text-ink-soft">
                {c.gallery.intro}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {filters.map((f, i) => {
              const active = filter === i;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => {
                    setFilter(i);
                    setOpenIdx(null);
                  }}
                  aria-pressed={active}
                  className={`rounded-full border px-5 py-2.5 text-[0.675rem] font-semibold tracking-[0.19em] uppercase transition-all duration-400 ${
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-gold-deep/25 text-ink-soft hover:-translate-y-0.5 hover:border-gold-deep/60 hover:text-ink"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        {visible.length === 0 ? (
          <div className="mt-16 border border-dashed border-gold-deep/30 px-8 py-20 text-center">
            <p className="font-display text-[1.55rem] text-ink">
              {c.gallery.empty}
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:gap-6 lg:grid-cols-12">
            {visible.map((it, i) => (
              <Reveal
                key={it.src + i}
                delay={0.05 * (i % 4)}
                className={it.span}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  className="group relative block w-full overflow-hidden text-start"
                  aria-label={`${c.gallery.open} — ${filters[it.cat]}`}
                >
                  <div className={`${it.ratio} w-full overflow-hidden`}>
                    <img
                      src={it.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.055]"
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(28,22,16,0.82) 0%, rgba(28,22,16,0.12) 55%, rgba(28,22,16,0) 100%)",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-4 border border-foil/0 transition-colors duration-700 group-hover:border-foil/45"
                  />

                  {it.video && (
                    <span className="absolute top-5 left-5 flex items-center gap-2 rounded-full bg-lacquer/70 px-3.5 py-2 backdrop-blur-sm">
                      <PlayIcon className="h-3 w-3 text-foil" />
                      <span className="text-[0.585rem] font-semibold tracking-[0.21em] text-foil uppercase">
                        {c.gallery.video}
                      </span>
                    </span>
                  )}

                  <span className="absolute right-5 bottom-5 left-5 flex translate-y-2 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-[0.655rem] font-semibold tracking-[0.21em] text-paper uppercase">
                      {filters[it.cat]}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foil/60 text-foil">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {openIdx !== null && visible[openIdx] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-lacquer/94 px-4 py-20 backdrop-blur-md sm:px-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={c.gallery.open}
          >
            <button
              type="button"
              onClick={close}
              aria-label={c.gallery.close}
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:border-paper/60 hover:bg-paper/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <motion.figure
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative max-h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] w-full overflow-hidden bg-lacquer">
                {visible[openIdx].video && !videoFailed ? (
                  <video
                    key={visible[openIdx].video}
                    className="mx-auto max-h-[70vh] w-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster={visible[openIdx].src}
                    onError={() => setVideoFailed(true)}
                  >
                    <source
                      src={visible[openIdx].video}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <img
                    key={visible[openIdx].src}
                    src={visible[openIdx].src}
                    alt=""
                    className="mx-auto max-h-[70vh] w-full object-contain"
                  />
                )}
              </div>

              <figcaption className="mt-5 flex items-center justify-between gap-6">
                <span className="text-[0.675rem] font-semibold tracking-[0.21em] text-foil uppercase">
                  {filters[visible[openIdx].cat]}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label={c.gallery.previous}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/22 text-paper transition-colors hover:border-foil/60 hover:text-foil"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M14 6l-6 6 6 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label={c.gallery.next}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/22 text-paper transition-colors hover:border-foil/60 hover:text-foil"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M10 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
