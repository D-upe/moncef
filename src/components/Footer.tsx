import {
  ArrowUpRight,
  GoldDiamond,
  InstagramIcon,
  Monogram,
  PhoneIcon,
  WhatsAppIcon,
} from "./ui";
import { LangSwitch } from "./Nav";
import { useLang } from "../i18n";

const NAV_HREFS = [
  "#apropos",
  "#parcours",
  "#prestations",
  "#cours",
  "#ecran",
  "#galerie",
];
const SERVICE_HREFS = [
  "#prestations",
  "#prestations",
  "#ecran",
  "#cours",
  "#contact",
];

export default function Footer() {
  const { c } = useLang();

  return (
    <footer className="relative w-full overflow-hidden bg-paper pt-20 pb-10">
      <div className="paper-texture pointer-events-none absolute inset-0 opacity-70" />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="hairline" />

        <div className="grid gap-12 pt-14 lg:grid-cols-[1.35fr_0.72fr_0.72fr_1fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-4">
              <Monogram className="h-13 w-13 text-gold-deep" />
              <div>
                <div className="font-display text-[1.32rem] leading-none font-semibold tracking-[0.13em] text-ink uppercase">
                  Moncef Benouniche
                </div>
                <div className="mt-2 text-[0.615rem] font-medium tracking-[0.28em] text-sand uppercase">
                  {c.footer.role}
                </div>
              </div>
            </div>

            <p className="mt-7 max-w-[24rem] text-[0.945rem] leading-[1.82] text-sand">
              {c.footer.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                {
                  href: "tel:+213556728933",
                  Icon: PhoneIcon,
                  label: c.footer.call,
                },
                {
                  href: "https://www.instagram.com/violoniste_moncef",
                  Icon: InstagramIcon,
                  label: c.nav.instagram,
                },
                {
                  href: "https://wa.me/213556728933",
                  Icon: WhatsAppIcon,
                  label: c.footer.whatsapp,
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-deep/28 text-gold-deep transition-all duration-500 hover:-translate-y-1 hover:border-gold-deep hover:bg-gold-deep hover:text-paper"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <LangSwitch tone="light" />
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label={c.footer.navTitle}>
            <div className="flex items-center gap-2.5">
              <GoldDiamond className="h-[5px] w-[5px] text-terra" />
              <h3 className="text-[0.625rem] font-semibold tracking-[0.25em] text-ink uppercase">
                {c.footer.navTitle}
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {c.footer.navItems.map((label, i) => (
                <li key={label}>
                  <a
                    href={NAV_HREFS[i]}
                    className="group inline-flex items-center gap-1.5 text-[0.875rem] text-sand transition-colors duration-400 hover:text-ink"
                  >
                    <span className="h-px w-0 bg-gold-deep transition-[width] duration-500 group-hover:w-3.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label={c.footer.servicesTitle}>
            <div className="flex items-center gap-2.5">
              <GoldDiamond className="h-[5px] w-[5px] text-terra" />
              <h3 className="text-[0.625rem] font-semibold tracking-[0.25em] text-ink uppercase">
                {c.footer.servicesTitle}
              </h3>
            </div>
            <ul className="mt-6 space-y-3.5">
              {c.footer.serviceItems.map((label, i) => (
                <li key={label}>
                  <a
                    href={SERVICE_HREFS[i]}
                    className="group inline-flex items-center gap-1.5 text-[0.875rem] text-sand transition-colors duration-400 hover:text-ink"
                  >
                    <span className="h-px w-0 bg-gold-deep transition-[width] duration-500 group-hover:w-3.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <GoldDiamond className="h-[5px] w-[5px] text-terra" />
              <h3 className="text-[0.625rem] font-semibold tracking-[0.25em] text-ink uppercase">
                {c.footer.contactTitle}
              </h3>
            </div>

            <a
              href="tel:+213556728933"
              className="mt-6 block font-display text-[1.62rem] leading-none font-normal text-ink transition-colors duration-400 hover:text-gold-deep"
            >
              {c.nav.phone}
            </a>

            <div className="mt-4">
              <div className="text-[0.625rem] font-semibold tracking-[0.24em] text-sand/80 uppercase">
                {c.footer.emailLabel}
              </div>
              <a
                href={`mailto:${c.footer.email}`}
                className="mt-1.5 block text-[0.925rem] text-sand transition-colors duration-400 hover:text-ink"
              >
                {c.footer.email}
              </a>
            </div>

            <div className="mt-2 text-[0.865rem] text-sand">
              {c.footer.city}
            </div>

            <div className="mt-7">
              <a
                href="#contact"
                className="btn rounded-full border border-ink/22 px-7 py-3.5 text-[0.695rem] font-semibold tracking-[0.21em] text-ink uppercase hover:border-ink hover:bg-ink hover:text-paper"
              >
                {c.footer.quote}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gold-deep/18 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.715rem] tracking-[0.14em] text-sand/85 uppercase">
              © {new Date().getFullYear()} Moncef Benouniche —{" "}
              {c.footer.rights}
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
              <a
                href="https://www.instagram.com/violoniste_moncef"
                target="_blank"
                rel="noreferrer noopener"
                className="text-[0.715rem] tracking-[0.14em] text-sand/85 uppercase transition-colors hover:text-ink"
              >
                Instagram
              </a>
              <a
                href="#top"
                className="group inline-flex items-center gap-2 text-[0.715rem] font-semibold tracking-[0.18em] text-gold-deep uppercase"
              >
                {c.footer.backToTop}
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold-deep/35 transition-transform duration-500 group-hover:-translate-y-1">
                  <ArrowUpRight className="h-3 w-3 -rotate-45" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
