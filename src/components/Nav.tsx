import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Monogram, PhoneIcon, ArrowUpRight } from "./ui";
import { useLang, type Lang } from "../i18n";

const LANGS: { id: Lang; short: string; name: string }[] = [
  { id: "fr", short: "FR", name: "Français" },
  { id: "en", short: "EN", name: "English" },
  { id: "ar", short: "ع", name: "العربية" },
];

export function LangSwitch({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { lang, setLang } = useLang();
  return (
    <div
      role="group"
      aria-label="Language / Langue / اللغة"
      className={`inline-flex items-center gap-0.5 rounded-full border p-0.5 ${
        tone === "dark"
          ? "border-paper/22 bg-paper/8"
          : "border-gold-deep/25 bg-paper/50"
      } ${className}`}
    >
      {LANGS.map((l) => {
        const active = lang === l.id;
        return (
          <button
            key={l.id}
            type="button"
            onClick={() => setLang(l.id)}
            aria-pressed={active}
            title={l.name}
            className={`relative rounded-full px-3 py-1.5 text-[0.625rem] font-semibold tracking-[0.16em] uppercase transition-colors duration-400 ${
              active
                ? "bg-gold text-lacquer"
                : tone === "dark"
                  ? "text-paper/62 hover:bg-paper/12 hover:text-paper"
                  : "text-ink-soft hover:bg-gold-deep/12 hover:text-ink"
            }`}
          >
            {l.short}
          </button>
        );
      })}
    </div>
  );
}

export default function Nav() {
  const { c, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  const LINKS = [
    { label: c.nav.about, href: "#apropos" },
    { label: c.nav.parcours, href: "#parcours" },
    { label: c.nav.prestations, href: "#prestations" },
    { label: c.nav.teaching, href: "#cours" },
    { label: c.nav.acting, href: "#ecran" },
    { label: c.nav.gallery, href: "#galerie" },
    { label: c.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,padding] duration-500 ${
          scrolled
            ? "border-b border-gold-deep/18 bg-paper/92 py-3 shadow-[0_10px_40px_-28px_rgba(28,22,16,0.5)] backdrop-blur-xl"
            : "border-b border-transparent py-4 lg:py-5"
        }`}
      >
        <nav
          aria-label={c.nav.menuLabel}
          className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-5 px-6 sm:px-10 lg:px-16"
        >
          <a href="#top" className="group flex items-center gap-3" aria-label={c.nav.home}>
            <Monogram
              className={`h-9 w-9 transition-colors duration-500 lg:h-10 lg:w-10 ${
                scrolled ? "text-gold-deep" : "text-foil"
              }`}
            />
            <span className="hidden sm:block">
              <span
                className={`block font-display text-[1.02rem] leading-none font-semibold tracking-[0.16em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-ink" : "text-paper"
                }`}
              >
                Moncef
              </span>
              <span
                className={`mt-1 block text-[0.58rem] font-medium tracking-[0.32em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-sand" : "text-paper/70"
                }`}
              >
                Benouniche
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 xl:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative text-[0.7rem] font-medium tracking-[0.17em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-ink-soft hover:text-ink" : "text-paper/82 hover:text-paper"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-[width] duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LangSwitch tone={scrolled ? "light" : "dark"} className="hidden sm:inline-flex" />

            <a
              href="tel:+213556728933"
              className="btn hidden rounded-full border border-gold-deep/45 bg-gold px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.18em] text-lacquer uppercase shadow-[0_16px_30px_-20px_rgba(169,122,30,0.9)] hover:bg-foil md:inline-flex"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {c.nav.book}
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? c.nav.closeMenu : c.nav.openMenu}
              className={`relative z-[70] flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-400 xl:hidden ${
                open
                  ? "border-gold-deep/30 bg-paper text-ink"
                  : scrolled
                    ? "border-gold-deep/25 bg-transparent text-ink"
                    : "border-paper/30 bg-paper/10 text-paper backdrop-blur-md"
              }`}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-400 ${
                    open ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 block h-[1.5px] w-full bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[1.5px] w-full bg-current transition-transform duration-400 ${
                    open ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-paper xl:hidden"
          >
            <div className="paper-texture absolute inset-0 opacity-90" />
            <div className="relative flex min-h-full flex-col justify-between px-6 pt-28 pb-10 sm:px-10">
              <ul className="space-y-1">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduced ? 0 : 0.06 + i * 0.055,
                      duration: 0.55,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    className="border-b border-gold-deep/15"
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                    >
                      <span className="font-display text-[1.85rem] leading-tight font-medium text-ink sm:text-[2.15rem]">
                        {l.label}
                      </span>
                      <span className="label shrink-0 text-gold-deep/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduced ? 0 : 0.42, duration: 0.6 }}
                className="mt-9 space-y-6"
              >
                <LangSwitch tone="light" className="sm:hidden" />

                <a
                  href="tel:+213556728933"
                  onClick={() => setOpen(false)}
                  className="btn w-full rounded-full bg-ink px-7 py-4 text-[0.72rem] font-semibold tracking-[0.22em] text-paper uppercase"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {c.nav.phone}
                </a>
                <a
                  href="https://www.instagram.com/violoniste_moncef"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.22em] text-gold-deep uppercase"
                >
                  {c.nav.instagram} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                {/* Language row for tablet */}
                <div className="flex items-center gap-3 pt-1">
                  <span className="label text-sand">{c.nav.language}</span>
                  <LangSwitch tone="light" />
                </div>
                <button
                  type="button"
                  onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                  className="sr-only"
                >
                  toggle
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
