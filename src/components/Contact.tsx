import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Eyebrow,
  GoldDiamond,
  InstagramIcon,
  PhoneIcon,
  Reveal,
  WhatsAppIcon,
} from "./ui";
import { useLang } from "../i18n";

export default function Contact() {
  const { c } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const contacts = [
    {
      icon: PhoneIcon,
      label: c.contact.labels.phone,
      value: c.nav.phone,
      href: "tel:+213556728933",
    },
    {
      icon: WhatsAppIcon,
      label: c.contact.labels.whatsapp,
      value: c.nav.phone,
      href: "https://wa.me/213556728933",
    },
    {
      icon: InstagramIcon,
      label: c.contact.labels.instagram,
      value: "@violoniste_moncef",
      href: "https://www.instagram.com/violoniste_moncef",
    },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("nom") ?? "").trim();
    const reach = String(data.get("contact") ?? "").trim();
    if (!name || !reach) {
      setError(c.contact.error);
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-lacquer py-24 sm:py-28 lg:py-32"
    >
      <img
        src="images/texture.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12] mix-blend-screen"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(85% 70% at 12% 12%, rgba(217,162,39,0.16), transparent 62%), radial-gradient(70% 65% at 92% 88%, rgba(180,82,46,0.18), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow tone="light">{c.contact.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-7 font-display text-[clamp(2.55rem,6.4vw,5.25rem)] leading-[0.99] font-medium tracking-[-0.022em] text-paper">
                {c.contact.headingA}
                <br />
                <span className="foil italic">{c.contact.headingAccent}</span>
                <br />
                {c.contact.headingB}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-8 max-w-[31rem] text-[1.045rem] leading-[1.82] text-paper/72">
                {c.contact.para}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-11 space-y-px">
                {contacts.map((ct) => (
                  <li key={ct.label}>
                    <a
                      href={ct.href}
                      target={ct.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="group flex items-center gap-5 border-t border-paper/12 py-5 transition-colors duration-500 hover:border-gold/35"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/16 text-gold transition-colors duration-500 group-hover:border-gold/55 group-hover:bg-gold group-hover:text-lacquer">
                        <ct.icon className="h-[1.05rem] w-[1.05rem]" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-[0.635rem] font-semibold tracking-[0.24em] text-paper/52 uppercase">
                          {ct.label}
                        </span>
                        <span className="mt-1.5 block font-display text-[1.32rem] leading-none font-normal text-paper">
                          {ct.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-paper/32 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Form panel */}
          <Reveal delay={0.12}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-3 border border-gold/12"
              />
              <div className="relative bg-paper/[0.055] px-7 py-9 backdrop-blur-xl sm:px-9 sm:py-10">
                <div className="flex items-center gap-3">
                  <GoldDiamond className="h-[6px] w-[6px] text-gold" />
                  <span className="label text-gold">
                    {c.contact.formTitle}
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 0.61, 0.36, 1],
                      }}
                      className="py-12 text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/45 text-gold">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-6 w-6"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 12.6 10 17.4 19.2 7.2"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="mt-6 font-display text-[1.85rem] leading-tight text-paper">
                        {c.contact.successTitle}
                      </h3>
                      <p className="mx-auto mt-3 max-w-[22rem] text-[0.925rem] leading-[1.72] text-paper/62">
                        {c.contact.successText}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-7 text-[0.695rem] font-semibold tracking-[0.22em] text-gold uppercase underline underline-offset-8 transition-opacity hover:opacity-75"
                      >
                        {c.contact.successButton}
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      onSubmit={onSubmit}
                      noValidate
                      className="mt-8 space-y-6"
                    >
                      <Field
                        id="nom"
                        name="nom"
                        label={c.contact.name}
                        placeholder={c.contact.namePlaceholder}
                      />
                      <Field
                        id="contact"
                        name="contact"
                        label={c.contact.reach}
                        placeholder={c.contact.reachPlaceholder}
                      />
                      <div>
                        <label
                          htmlFor="type"
                          className="block text-[0.625rem] font-semibold tracking-[0.23em] text-paper/62 uppercase"
                        >
                          {c.contact.type}
                        </label>
                        <select
                          id="type"
                          name="type"
                          defaultValue={c.contact.types[0]}
                          className="mt-3 w-full appearance-none border-b border-paper/22 bg-transparent py-3 text-[0.965rem] text-paper transition-colors duration-400 focus:border-gold focus:outline-none"
                        >
                          {c.contact.types.map((o) => (
                            <option key={o} value={o} className="bg-lacquer">
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[0.625rem] font-semibold tracking-[0.23em] text-paper/62 uppercase"
                        >
                          {c.contact.project}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder={c.contact.projectPlaceholder}
                          className="mt-3 w-full resize-none border-b border-paper/22 bg-transparent py-3 text-[0.965rem] leading-relaxed text-paper placeholder:text-paper/42 transition-colors duration-400 focus:border-gold focus:outline-none"
                        />
                      </div>

                      {error && (
                        <p
                          role="alert"
                          className="text-[0.795rem] leading-relaxed text-foil"
                        >
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        className="btn w-full rounded-full bg-gradient-to-r from-foil via-gold to-gold-deep px-8 py-4.5 text-[0.705rem] font-semibold tracking-[0.21em] text-lacquer uppercase shadow-[0_28px_50px_-28px_rgba(217,162,39,0.9)]"
                      >
                        {c.contact.submit}
                        <ArrowUpRight className="h-4 w-4" />
                      </button>

                      <p className="pt-1 text-[0.685rem] leading-[1.7] text-paper/52">
                        {c.contact.privacy}
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.625rem] font-semibold tracking-[0.23em] text-paper/62 uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type="text"
        autoComplete="off"
        placeholder={placeholder}
        className="mt-3 w-full border-b border-paper/22 bg-transparent py-3 text-[0.965rem] text-paper placeholder:text-paper/42 transition-colors duration-400 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
