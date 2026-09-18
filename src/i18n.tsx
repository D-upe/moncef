import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en" | "ar";

/* ------------------------------------------------------------------ */
/*  Dictionnaire — FR (référence), EN, AR                              */
/* ------------------------------------------------------------------ */

const fr = {
  dir: "ltr",
  nav: {
    about: "À propos",
    parcours: "Parcours",
    prestations: "Prestations",
    teaching: "Cours",
    acting: "À l'écran",
    gallery: "Galerie",
    contact: "Contact",
    book: "Réserver",
    phone: "+213 556 72 89 33",
    instagram: "Instagram",
    menuLabel: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    home: "Moncef Benouniche — accueil",
    language: "Langue",
  },
  hero: {
    eyebrow: "Violoniste · Professeur · Acteur",
    line1: "Moncef",
    line2: "Benouniche",
    lede: "Le violon comme langage. Plus de treize ans de scène, du répertoire classique aux plus belles célébrations d'Algérie — une musique pensée pour l'instant, jouée avec le cœur.",
    ctaPrimary: "Réserver une prestation",
    ctaSecondary: "Instagram",
    stats: [
      { n: "13+", l: "Ans de scène" },
      { n: "200+", l: "Concerts & événements" },
      { n: "40+", l: "Élèves formés" },
    ],
    marquee: [
      "13 ans de scène",
      "Conservatoire d'El Biar",
      "YAMAHA Algérie",
      "MELTIN ART",
      "Mariages & cérémonies",
      "Cours de violon",
      "Cinéma & télévision",
      "Alger · Oran · Constantine",
      "Musique jouée en direct",
    ],
    scroll: "Défiler",
    location: "Alger, Algérie — Depuis 2011",
    imgAlt:
      "Moncef Benouniche jouant du violon dans une cour algérienne au coucher du soleil",
  },
  about: {
    eyebrow: "À propos",
    headingA: "Une vie passée",
    headingB: "à faire",
    headingAccent: "vibrer",
    headingC: "les notes.",
    para1Lead: "M",
    para1: "oncef Benouniche est violoniste, professeur et acteur. Formé au Conservatoire d'El Biar, il construit depuis plus de treize ans un parcours où la rigueur du classique rencontre la chaleur du répertoire méditerranéen — de la pièce intimiste au grand événement.",
    para2Lead: "Professeur auprès de YAMAHA Algérie et collaborateur de MELTIN ART, il a formé des dizaines d'élèves et prêté son jeu à des productions filmées, dont la série ",
    para2Em: "FATMA",
    para2End:
      ". Sa démarche est simple : écouter le lieu, comprendre les personnes, puis faire de la musique le fil qui relie tout.",
    credentials: [
      {
        title: "Conservatoire d'El Biar",
        text: "Formation classique et professorat — la fondation d'un jeu précis, patient et profondément lyrique.",
      },
      {
        title: "YAMAHA Algérie",
        text: "Enseignement du violon auprès d'élèves de tous niveaux, de la première note à la scène.",
      },
      {
        title: "MELTIN ART",
        text: "Direction artistique et collaboration créative sur des projets scéniques et audiovisuels.",
      },
      {
        title: "Cinéma & télévision",
        text: "Interprète à l'écran, notamment dans la série FATMA, et musicien pour des productions filmées.",
      },
    ],
    cta1: "Discuter de votre événement",
    cta2: "Voir les prestations",
    captionLabel: "Sur scène depuis",
    captionText: "Mariages, cérémonies, galas d'entreprise, cours et tournages — partout en Algérie.",
    portraitAlt: "Portrait de Moncef Benouniche avec son violon",
  },
  parcours: {
    eyebrow: "Le programme",
    headingA: "Quatre mouvements,",
    headingAccent: "une même exigence.",
    intro: "Chaque prestation est pensée comme un programme de concert : un fil, une intention, une progression. Choisissez le mouvement qui vous ressemble — le reste s'écrit ensemble.",
    rows: [
      {
        title: "Le violon",
        sub: "Répertoire classique & méditerranéen",
        body: "Un jeu nourri par la formation classique au Conservatoire d'El Biar et par une oreille ouverte sur les mélodies d'ici. Solo, duo ou ensemble — le répertoire est choisi avec vous, mesure après mesure.",
        detail: ["Cérémonie", "Cocktail", "Solo ou ensemble"],
      },
      {
        title: "La transmission",
        sub: "Cours de violon · Tous niveaux",
        body: "Enseigner, c'est transmettre un geste autant qu'un son. Les cours s'adressent aux débutants comme aux élèves avancés, avec une méthode structurée, patiente et profondément humaine.",
        detail: ["Débutants", "Perfectionnement", "Préparation auditions"],
      },
      {
        title: "Le cinéma",
        sub: "Interprétation & présence à l'écran",
        body: "De la série FATMA aux productions audiovisuelles, Moncef prête son jeu et son visage à l'écran. Une compréhension naturelle du rythme, du cadre et de l'émotion filmée.",
        detail: ["Séries & films", "Publicité", "Clips musicaux"],
      },
      {
        title: "La scène privée",
        sub: "Mariages, galas & événements d'entreprise",
        body: "Le cœur du métier : créer l'émotion d'un instant. Direction musicale, coordination avec les autres artistes et adaptation en temps réel au fil de votre soirée.",
        detail: ["Mariage", "Gala d'entreprise", "Réception privée"],
      },
    ],
  },
  prestations: {
    eyebrow: "Prestations",
    headingA: "L'art de rendre un instant",
    headingAccent: "inoubliable.",
    intro: "Chaque événement est unique. Le répertoire, la formation (solo, duo, ensemble) et la mise en scène sont construits avec vous, en amont, pour que la musique soit exactement à sa place.",
    items: [
      {
        idx: "01",
        title: "Mariages & cérémonies",
        text: "De la marche nuptiale à la dernière danse : un fil musical vivant, pensé pour votre journée et joué en direct.",
        alt: "Violoniste jouant lors d'une réception de mariage au coucher du soleil",
      },
      {
        idx: "02",
        title: "Événements & galas",
        text: "Cocktails, lancements, dîners de gala — une présence élégante qui sublime l'ambiance sans jamais l'écraser.",
        alt: "Violoniste sur scène lors d'un gala d'entreprise",
      },
    ],
    bannerLabel: "Sur mesure",
    bannerQuote:
      "« Racontez-moi votre soirée. Je m'occupe de la façon dont on s'en souviendra. »",
    bannerAuthor: "Moncef Benouniche",
    bannerAlt: "Moncef Benouniche en répétition dans une cour algérienne",
    request: "Demander un devis",
  },
  teaching: {
    eyebrow: "Enseignement",
    headingA: "Apprendre le violon,",
    headingAccent: "à son rythme.",
    para1: "Moncef enseigne le violon depuis plus de dix ans — au Conservatoire d'El Biar, auprès de YAMAHA Algérie et en cours particuliers. Une pédagogie structurée, patiente, qui respecte la vitesse de chacun.",
    para2: "Enfants, adolescents ou adultes : chaque parcours est construit autour d'objectifs clairs, d'un répertoire motivant et d'un vrai plaisir de jouer. Cours à domicile, en studio ou en petit groupe.",
    features: [
      {
        title: "Tous niveaux",
        text: "De la première position aux pièces de concours, avec un programme adapté à chaque élève.",
      },
      {
        title: "Tous âges",
        text: "Enfants dès 6 ans, adolescents et adultes — il n'est jamais trop tard pour commencer.",
      },
      {
        title: "Méthode structurée",
        text: "Lecture, technique, oreille et posture : des bases solides, sans jamais perdre le plaisir.",
      },
      {
        title: "Préparation scène",
        text: "Auditions, examens et prestations — l'élève apprend aussi à respirer devant un public.",
      },
    ],
    cta: "S'inscrire aux cours",
    posterLabel: "Cours de violon",
    posterTitle: "Inscriptions ouvertes",
    posterText: "Cours particuliers & petits groupes — Alger",
    posterNote:
      "Emplacement réservé à votre affiche pédagogique (public/images/teaching.jpg).",
    imgAlt: "Professeur de violon accompagnant un élève en studio",
  },
  acting: {
    eyebrow: "À l'écran",
    headingA: "L'acteur",
    headingAccent: "derrière l'instrument.",
    para: "Violoniste et acteur, Moncef apparaît également devant la caméra — notamment dans la série FATMA. Sa posture de musicien, son sens du rythme et sa présence silencieuse nourrissent un jeu sobre et juste. Voici quelques clichés de tournage et de plateau.",
    stillsLabel: "Coulisses & plateau",
    cta: "Voir toute la galerie",
    badge: "Série FATMA",
    imgAlt: "Moncef Benouniche en costume sur un plateau de tournage",
  },
  gallery: {
    eyebrow: "Galerie",
    headingA: "Des scènes,",
    headingAccent: "des visages,",
    headingC: "des instants.",
    intro: "Mariages, galas, plateau, studio ou salle de cours — une sélection d'images et de vidéos qui racontent le travail au quotidien.",
    filters: ["Tout", "Mariages", "Galas", "Plateau", "Cours", "Scène"],
    open: "Agrandir",
    video: "Vidéo",
    close: "Fermer",
    previous: "Précédent",
    next: "Suivant",
    empty: "Aucun média dans cette catégorie pour le moment.",
  },
  testimonials: {
    eyebrow: "Ils en parlent",
    quoteA: "« Moncef ne joue pas seulement devant les gens — il joue",
    quoteAccent: "avec",
    quoteB: "eux. Il a fait de notre soirée un souvenir que nous garderons toute une vie. »",
    author: "Leïla & Amine",
    authorRole: "Mariage — Oran, 2025",
    items: [
      {
        quote:
          "Une présence discrète et une musique magnifique. Nos invités en parlent encore.",
        name: "Yasmine & Karim",
        place: "Mariage — Alger",
      },
      {
        quote:
          "Professionnel, ponctuel, et d'une sensibilité rare. Il a compris notre univers en une seule rencontre.",
        name: "Direction de production",
        place: "Tournage — série télévisée",
      },
      {
        quote:
          "Mes élèves ont progressé bien plus vite que je ne l'imaginais. Une pédagogie patiente et exigeante.",
        name: "Parent d'élève",
        place: "Cours de violon",
      },
    ],
  },
  contact: {
    eyebrow: "Réservations",
    headingA: "Écrivons ensemble",
    headingAccent: "votre prochain",
    headingB: "mouvement.",
    para: "Mariage, gala, cérémonie, tournage ou cours de violon — décrivez votre projet en quelques mots. Réponse sous 24 heures, avec une proposition adaptée à votre budget et à votre lieu.",
    labels: { phone: "Téléphone", whatsapp: "WhatsApp", instagram: "Instagram" },
    formTitle: "Demande de devis",
    name: "Nom complet",
    namePlaceholder: "Votre nom",
    reach: "Téléphone ou e-mail",
    reachPlaceholder: "Comment vous joindre",
    type: "Type d'événement",
    types: [
      "Mariage",
      "Événement d'entreprise",
      "Cérémonie / privé",
      "Cinéma / télévision",
      "Cours de violon",
      "Autre",
    ],
    project: "Votre projet",
    projectPlaceholder: "Date, lieu, ambiance souhaitée…",
    submit: "Envoyer la demande",
    privacy:
      "Vos informations restent confidentielles et ne servent qu'à répondre à votre demande.",
    error: "Merci d'indiquer votre nom et un moyen de vous contacter.",
    successTitle: "Merci, votre demande est partie.",
    successText:
      "Moncef vous répondra personnellement sous 24 heures. Pour une réponse immédiate, appelez le +213 556 72 89 33.",
    successButton: "Envoyer une autre demande",
  },
  footer: {
    description:
      "Musique live, enseignement et présence scénique partout en Algérie. Une approche sur mesure, du premier échange à la dernière note.",
    navTitle: "Navigation",
    servicesTitle: "Prestations",
    contactTitle: "Contact",
    navItems: [
      "À propos",
      "Parcours",
      "Prestations",
      "Cours de violon",
      "À l'écran",
      "Galerie",
    ],
    serviceItems: [
      "Mariage & cérémonie",
      "Événement d'entreprise",
      "Cinéma & télévision",
      "Cours de violon",
      "Musicien accompagnateur",
    ],
    quote: "Demander un devis",
    rights: "Tous droits réservés",
    backToTop: "Haut de page",
    call: "Appeler",
    whatsapp: "WhatsApp",
    role: "Violoniste · Professeur · Acteur",
    emailLabel: "E-mail",
    email: "moncef.benouniche@gmail.com",
    city: "Alger, Algérie",
  },
  common: {
    langName: "Français",
  },
};

export type Dict = typeof fr;

const en: Dict = {
  dir: "ltr",
  nav: {
    about: "About",
    parcours: "Journey",
    prestations: "Services",
    teaching: "Lessons",
    acting: "On screen",
    gallery: "Gallery",
    contact: "Contact",
    book: "Book now",
    phone: "+213 556 72 89 33",
    instagram: "Instagram",
    menuLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    home: "Moncef Benouniche — home",
    language: "Language",
  },
  hero: {
    eyebrow: "Violinist · Teacher · Actor",
    line1: "Moncef",
    line2: "Benouniche",
    lede: "The violin as a language. More than thirteen years on stage, from the classical repertoire to Algeria's most beautiful celebrations — music made for the moment, played from the heart.",
    ctaPrimary: "Book a performance",
    ctaSecondary: "Instagram",
    stats: [
      { n: "13+", l: "Years on stage" },
      { n: "200+", l: "Concerts & events" },
      { n: "40+", l: "Students taught" },
    ],
    marquee: [
      "13 years on stage",
      "El Biar Conservatory",
      "YAMAHA Algeria",
      "MELTIN ART",
      "Weddings & ceremonies",
      "Violin lessons",
      "Film & television",
      "Algiers · Oran · Constantine",
      "Music performed live",
    ],
    scroll: "Scroll",
    location: "Algiers, Algeria — Since 2011",
    imgAlt:
      "Moncef Benouniche playing the violin in an Algerian courtyard at sunset",
  },
  about: {
    eyebrow: "About",
    headingA: "A lifetime spent",
    headingB: "making the",
    headingAccent: "notes",
    headingC: "resonate.",
    para1Lead: "M",
    para1: "oncef Benouniche is a violinist, teacher and actor. Trained at the El Biar Conservatory, he has spent more than thirteen years building a path where classical rigour meets the warmth of the Mediterranean repertoire — from intimate pieces to grand occasions.",
    para2Lead: "A teacher with YAMAHA Algeria and a collaborator with MELTIN ART, he has trained dozens of students and lent his playing to filmed productions, including the series ",
    para2Em: "FATMA",
    para2End:
      ". His approach is simple: listen to the room, understand the people, then let the music become the thread that holds everything together.",
    credentials: [
      {
        title: "El Biar Conservatory",
        text: "Classical training and teaching — the foundation of a precise, patient and deeply lyrical playing style.",
      },
      {
        title: "YAMAHA Algeria",
        text: "Teaching the violin to students of every level, from the very first note to the stage.",
      },
      {
        title: "MELTIN ART",
        text: "Artistic direction and creative collaboration on stage and audiovisual projects.",
      },
      {
        title: "Film & television",
        text: "Performer on screen, notably in the series FATMA, and musician for filmed productions.",
      },
    ],
    cta1: "Talk about your event",
    cta2: "See the services",
    captionLabel: "On stage since",
    captionText:
      "Weddings, ceremonies, corporate galas, lessons and film sets — all across Algeria.",
    portraitAlt: "Portrait of Moncef Benouniche with his violin",
  },
  parcours: {
    eyebrow: "The programme",
    headingA: "Four movements,",
    headingAccent: "one standard.",
    intro: "Every performance is conceived like a concert programme: a thread, an intention, a progression. Choose the movement that feels like yours — the rest is written together.",
    rows: [
      {
        title: "The violin",
        sub: "Classical & Mediterranean repertoire",
        body: "A playing style shaped by classical training at the El Biar Conservatory and an ear open to local melodies. Solo, duo or ensemble — the repertoire is chosen with you, measure by measure.",
        detail: ["Ceremony", "Cocktail", "Solo or ensemble"],
      },
      {
        title: "Teaching",
        sub: "Violin lessons · All levels",
        body: "Teaching is passing on a gesture as much as a sound. Lessons welcome beginners and advanced students alike, with a structured, patient and deeply human method.",
        detail: ["Beginners", "Advanced", "Audition prep"],
      },
      {
        title: "Cinema",
        sub: "Performance & presence on screen",
        body: "From the series FATMA to audiovisual productions, Moncef lends his playing and his face to the camera. A natural sense of rhythm, framing and filmed emotion.",
        detail: ["Series & film", "Advertising", "Music videos"],
      },
      {
        title: "The private stage",
        sub: "Weddings, galas & corporate events",
        body: "The heart of the craft: creating the emotion of a moment. Musical direction, coordination with other artists and real-time adaptation throughout your evening.",
        detail: ["Wedding", "Corporate gala", "Private reception"],
      },
    ],
  },
  prestations: {
    eyebrow: "Services",
    headingA: "The art of making a moment",
    headingAccent: "unforgettable.",
    intro: "Every event is unique. The repertoire, the line-up (solo, duo, ensemble) and the staging are built with you in advance, so the music sits exactly where it should.",
    items: [
      {
        idx: "01",
        title: "Weddings & ceremonies",
        text: "From the bridal march to the last dance: a living musical thread, designed for your day and performed live.",
        alt: "Violinist performing at a wedding reception at sunset",
      },
      {
        idx: "02",
        title: "Events & galas",
        text: "Cocktails, launches, gala dinners — an elegant presence that lifts the atmosphere without ever overpowering it.",
        alt: "Violinist on stage at a corporate gala",
      },
    ],
    bannerLabel: "Tailor-made",
    bannerQuote:
      "“Tell me about your evening. I'll take care of how it is remembered.”",
    bannerAuthor: "Moncef Benouniche",
    bannerAlt: "Moncef Benouniche rehearsing in an Algerian courtyard",
    request: "Request a quote",
  },
  teaching: {
    eyebrow: "Teaching",
    headingA: "Learning the violin,",
    headingAccent: "at your own pace.",
    para1: "Moncef has been teaching the violin for more than ten years — at the El Biar Conservatory, with YAMAHA Algeria and in private lessons. A structured, patient pedagogy that respects each student's pace.",
    para2: "Children, teenagers or adults: every path is built around clear goals, motivating repertoire and a genuine pleasure in playing. Lessons at home, in the studio or in small groups.",
    features: [
      {
        title: "All levels",
        text: "From first position to competition pieces, with a programme tailored to each student.",
      },
      {
        title: "All ages",
        text: "Children from six, teenagers and adults — it is never too late to begin.",
      },
      {
        title: "Structured method",
        text: "Reading, technique, ear and posture: solid foundations, without ever losing the joy.",
      },
      {
        title: "Stage preparation",
        text: "Auditions, exams and performances — students also learn to breathe in front of an audience.",
      },
    ],
    cta: "Sign up for lessons",
    posterLabel: "Violin lessons",
    posterTitle: "Registration open",
    posterText: "Private lessons & small groups — Algiers",
    posterNote:
      "Slot reserved for your teaching poster (public/images/teaching.jpg).",
    imgAlt: "Violin teacher guiding a student in a studio",
  },
  acting: {
    eyebrow: "On screen",
    headingA: "The actor",
    headingAccent: "behind the instrument.",
    para: "Violinist and actor, Moncef also appears in front of the camera — notably in the series FATMA. His musician's posture, sense of rhythm and quiet presence shape a sober, truthful performance. Here are a few on-set and behind-the-scenes stills.",
    stillsLabel: "Behind the scenes",
    cta: "See the full gallery",
    badge: "FATMA series",
    imgAlt: "Moncef Benouniche in costume on a film set",
  },
  gallery: {
    eyebrow: "Gallery",
    headingA: "Stages,",
    headingAccent: "faces,",
    headingC: "moments.",
    intro: "Weddings, galas, film sets, studios or classrooms — a selection of photos and videos that tell the everyday work.",
    filters: ["All", "Weddings", "Galas", "On set", "Lessons", "Stage"],
    open: "Enlarge",
    video: "Video",
    close: "Close",
    previous: "Previous",
    next: "Next",
    empty: "No media in this category yet.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    quoteA: "“Moncef doesn't just play in front of people — he plays",
    quoteAccent: "with",
    quoteB: "them. He turned our evening into a memory we will keep for a lifetime.”",
    author: "Leïla & Amine",
    authorRole: "Wedding — Oran, 2025",
    items: [
      {
        quote:
          "A discreet presence and beautiful music. Our guests still talk about it.",
        name: "Yasmine & Karim",
        place: "Wedding — Algiers",
      },
      {
        quote:
          "Professional, punctual and remarkably sensitive. He understood our world in a single meeting.",
        name: "Production management",
        place: "Film set — television series",
      },
      {
        quote:
          "My students progressed far faster than I imagined. Patient yet demanding teaching.",
        name: "Parent of a student",
        place: "Violin lessons",
      },
    ],
  },
  contact: {
    eyebrow: "Bookings",
    headingA: "Let's write",
    headingAccent: "your next",
    headingB: "movement.",
    para: "Wedding, gala, ceremony, film set or violin lessons — describe your project in a few words. You'll get an answer within 24 hours, with a proposal suited to your budget and venue.",
    labels: { phone: "Phone", whatsapp: "WhatsApp", instagram: "Instagram" },
    formTitle: "Quote request",
    name: "Full name",
    namePlaceholder: "Your name",
    reach: "Phone or email",
    reachPlaceholder: "How to reach you",
    type: "Type of event",
    types: [
      "Wedding",
      "Corporate event",
      "Ceremony / private",
      "Cinema / television",
      "Violin lessons",
      "Other",
    ],
    project: "Your project",
    projectPlaceholder: "Date, venue, atmosphere…",
    submit: "Send request",
    privacy:
      "Your details remain confidential and are only used to answer your request.",
    error: "Please add your name and a way to reach you.",
    successTitle: "Thank you, your request has been sent.",
    successText:
      "Moncef will reply personally within 24 hours. For an immediate answer, call +213 556 72 89 33.",
    successButton: "Send another request",
  },
  footer: {
    description:
      "Live music, teaching and stage presence across Algeria. A tailor-made approach, from the first conversation to the last note.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    contactTitle: "Contact",
    navItems: [
      "About",
      "Journey",
      "Services",
      "Violin lessons",
      "On screen",
      "Gallery",
    ],
    serviceItems: [
      "Wedding & ceremony",
      "Corporate event",
      "Cinema & television",
      "Violin lessons",
      "Accompanying musician",
    ],
    quote: "Request a quote",
    rights: "All rights reserved",
    backToTop: "Back to top",
    call: "Call",
    whatsapp: "WhatsApp",
    role: "Violinist · Teacher · Actor",
    emailLabel: "Email",
    email: "moncef.benouniche@gmail.com",
    city: "Algiers, Algeria",
  },
  common: {
    langName: "English",
  },
};

const ar: Dict = {
  dir: "rtl",
  nav: {
    about: "نبذة",
    parcours: "المسار",
    prestations: "الخدمات",
    teaching: "الدروس",
    acting: "على الشاشة",
    gallery: "المعرض",
    contact: "اتصل بنا",
    book: "احجز الآن",
    phone: "+213 556 72 89 33",
    instagram: "إنستغرام",
    menuLabel: "القائمة الرئيسية",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    home: "منصف بن عونيش — الصفحة الرئيسية",
    language: "اللغة",
  },
  hero: {
    eyebrow: "عازف كمان · أستاذ · ممثل",
    line1: "منصف",
    line2: "بن عونيش",
    lede: "الكمان لغةٌ يتحدث بها القلب. أكثر من ثلاث عشرة سنة على الخشبة، من الموسيقى الكلاسيكية إلى أجمل احتفالات الجزائر — موسيقى تُصنع للحظة وتُعزف بالمشاعر.",
    ctaPrimary: "احجز فقرة فنية",
    ctaSecondary: "إنستغرام",
    stats: [
      { n: "+13", l: "سنة على الخشبة" },
      { n: "+200", l: "حفلة وفعالية" },
      { n: "+40", l: "تلميذًا" },
    ],
    marquee: [
      "13 سنة على الخشبة",
      "معهد البيار",
      "ياماها الجزائر",
      "ميلتين آرت",
      "الأعراس والمناسبات",
      "دروس الكمان",
      "السينما والتلفزيون",
      "الجزائر · وهران · قسنطينة",
      "موسيقى مباشرة",
    ],
    scroll: "مرّر",
    location: "الجزائر العاصمة — منذ 2011",
    imgAlt: "منصف بن عونيش يعزف الكمان في ساحة جزائرية عند الغروب",
  },
  about: {
    eyebrow: "نبذة",
    headingA: "حياةٌ كاملة",
    headingB: "كرّسها",
    headingAccent: "للنغمة",
    headingC: "التي تتردد.",
    para1Lead: "م",
    para1: "نصف بن عونيش عازف كمان وأستاذ وممثل. تكوّن في معهد البيار، ويبني منذ أكثر من ثلاث عشرة سنة مسارًا يلتقي فيه صرامة الكلاسيكية بدفء الريبرتوار المتوسطي — من القطعة الحميمة إلى المناسبات الكبرى.",
    para2Lead: "أستاذ لدى ياماها الجزائر وشريك لـ«ميلتين آرت»، درّب عشرات التلاميذ وشارك عزفه في إنتاجات مصوّرة، من بينها مسلسل ",
    para2Em: "فاطمة",
    para2End:
      ". منهجيّته بسيطة: يسمع المكان، يفهم الناس، ثم يجعل الموسيقى الخيط الذي يجمع كل شيء.",
    credentials: [
      {
        title: "معهد البيار",
        text: "تكوين كلاسيكي وتدريس — أساس لعزف دقيق وصبور وعميق الشجن.",
      },
      {
        title: "ياماها الجزائر",
        text: "تدريس الكمان لجميع المستويات، من أول نغمة إلى الخشبة.",
      },
      {
        title: "ميلتين آرت",
        text: "إخراج فني وتعاون إبداعي في مشاريع مسرحية وسمعيةبصرية.",
      },
      {
        title: "السينما والتلفزيون",
        text: "ممثل أمام الكاميرا، خاصة في مسلسل «فاطمة»، وعازف لمنتجات مصوّرة.",
      },
    ],
    cta1: "ناقش مناسبتك معنا",
    cta2: "اكتشف الخدمات",
    captionLabel: "على الخشبة منذ",
    captionText: "الأعراس والمناسبات والحفلات الرسمية والدروس والتصوير — في كل أنحاء الجزائر.",
    portraitAlt: "صورة لمنصف بن عونيش مع كمانه",
  },
  parcours: {
    eyebrow: "البرنامج",
    headingA: "أربع حركات،",
    headingAccent: "ومعيارٌ واحد.",
    intro: "كل فقرة تُفكَّر فيها كبرنامج حفلة: خيط، نية، تدرّج. اختر الحركة التي تشبهك — والباقي نكتبه معًا.",
    rows: [
      {
        title: "الكمان",
        sub: "ريبرتوار كلاسيكي ومتوسطي",
        body: "عزف مبني على التكوين الكلاسيكي في معهد البيار وأذن منفتحة على ألحان المنطقة. منفردًا أو ثنائيًا أو مع فرقة — والريبرتوار يُختار معك نغمةً نغمة.",
        detail: ["الحفلات", "الكوكتيل", "منفرد أو فرقة"],
      },
      {
        title: "التدريس",
        sub: "دروس الكمان · كل المستويات",
        body: "التدريس هو نقل الإحساس بقدر نقل الصوت. الدروس مفتوحة للمبتدئين والمتقدمين، بمنهج منظّم وصبور وإنساني.",
        detail: ["مبتدئون", "تعمّق", "تحضير للتجارب"],
      },
      {
        title: "السينما",
        sub: "التمثيل والحضور أمام الكاميرا",
        body: "من مسلسل «فاطمة» إلى الإنتاجات السمعيةبصرية، يقدّم منصف عزفه وحضوره للكاميرا، بإحساس طبيعي بالإيقاع والإطار والمشهد.",
        detail: ["مسلسلات وأفلام", "إشهار", "فيديوهات كليب"],
      },
      {
        title: "الخشبة الخاصة",
        sub: "الأعراس والحفلات الرسمية",
        body: "جوهر المهنة: صناعة إحساس اللحظة. توجيه موسيقي، تنسيق مع الفنانين، وتكيّف مباشر مع سير أمسيتك.",
        detail: ["عرس", "حفلة رسمية", "استقبال خاص"],
      },
    ],
  },
  prestations: {
    eyebrow: "الخدمات",
    headingA: "فنُّ صناعة اللحظة",
    headingAccent: "التي لا تُنسى.",
    intro: "كل مناسبة فريدة. الريبرتوار، التشكيل (منفرد، ثنائي، فرقة) والتنظيم تُبنى معك مسبقًا لتكون الموسيقى في مكانها تمامًا.",
    items: [
      {
        idx: "01",
        title: "الأعراس والمناسبات",
        text: "من مارش العرس إلى آخر رقصة: خيط موسيقي حيّ، مصمَّم ليومك ويُعزف مباشرة.",
        alt: "عازف كمان يعزف في حفل زفاف عند الغروب",
      },
      {
        idx: "02",
        title: "الفعاليات والحفلات",
        text: "كوكتيلات، إطلاقات، عشاءات رسمية — حضور أنيق يرفع الأجواء دون أن يطغى عليها.",
        alt: "عازف كمان على خشبة حفلة رسمية",
      },
    ],
    bannerLabel: "حسب الطلب",
    bannerQuote: "«احكِ لي عن أمسيتك، وسأعتني بالطريقة التي ستُذكر بها.»",
    bannerAuthor: "منصف بن عونيش",
    bannerAlt: "منصف بن عونيش يتدرّب في ساحة جزائرية",
    request: "اطلب عرض سعر",
  },
  teaching: {
    eyebrow: "التدريس",
    headingA: "تعلّم الكمان،",
    headingAccent: "على إيقاعك.",
    para1: "يدرّس منصف الكمان منذ أكثر من عشر سنوات — في معهد البيار، ومع ياماها الجزائر، وفي دروس خاصة. بيداغوجيا منظّمة وصبورة تحترم إيقاع كل تلميذ.",
    para2: "أطفال، مراهقون أو بالغون: كل مسار يُبنى حول أهداف واضحة وريبرتوار محفّز ومتعة حقيقية في العزف. الدروس في المنزل أو في الاستوديو أو في مجموعات صغيرة.",
    features: [
      {
        title: "كل المستويات",
        text: "من الوضعية الأولى إلى قطع المسابقات، ببرنامج مكيّف مع كل تلميذ.",
      },
      {
        title: "كل الأعمار",
        text: "أطفال من السادسة، مراهقون وبالغون — لا وقت متأخر للبدء.",
      },
      {
        title: "منهج منظّم",
        text: "القراءة، التقنية، الأذن والوضعية: أساس متين دون فقدان المتعة.",
      },
      {
        title: "التحضير للخشبة",
        text: "تجارب، امتحانات وحفلات — التلميذ يتعلّم أيضًا كيف يتنفّس أمام الجمهور.",
      },
    ],
    cta: "سجّل في الدروس",
    posterLabel: "دروس الكمان",
    posterTitle: "التسجيل مفتوح",
    posterText: "دروس خاصة ومجموعات صغيرة — الجزائر العاصمة",
    posterNote: "مكان محجوز لملصقك البيداغوجي (public/images/teaching.jpg).",
    imgAlt: "أستاذ كمان يرافق تلميذًا في الاستوديو",
  },
  acting: {
    eyebrow: "على الشاشة",
    headingA: "الممثل",
    headingAccent: "خلف الآلة.",
    para: "عازف كمان وممثل، يظهر منصف أيضًا أمام الكاميرا — خاصة في مسلسل «فاطمة». وضعية العازف وإحساسه بالإيقاع وحضوره الهادئ تمنح تمثيله صدقًا ورزانة. إليكم بعض صور التصوير وكواليس العمل.",
    stillsLabel: "كواليس التصوير",
    cta: "شاهد المعرض كاملًا",
    badge: "مسلسل «فاطمة»",
    imgAlt: "منصف بن عونيش بزيّ التصوير في موقع التصوير",
  },
  gallery: {
    eyebrow: "المعرض",
    headingA: "خشبات،",
    headingAccent: "وجوه،",
    headingC: "ولحظات.",
    intro: "الأعراس، الحفلات، مواقع التصوير، الاستوديوهات أو قاعات الدروس — مجموعة من الصور والفيديوهات تروي العمل اليومي.",
    filters: ["الكل", "الأعراس", "الحفلات", "التصوير", "الدروس", "الخشبة"],
    open: "تكبير",
    video: "فيديو",
    close: "إغلاق",
    previous: "السابق",
    next: "التالي",
    empty: "لا توجد وسائط في هذه الفئة حاليًا.",
  },
  testimonials: {
    eyebrow: "آراء",
    quoteA: "«منصف لا يعزف أمام الناس فحسب — بل يعزف",
    quoteAccent: "معهم",
    quoteB: "، وجعل أمسيتنا ذكرى سنحتفظ بها طوال الحياة.»",
    author: "ليلى وأمين",
    authorRole: "حفل زفاف — وهران 2025",
    items: [
      {
        quote: "حضور هادئ وموسيقى رائعة. ضيوفنا ما زالوا يتحدثون عنها.",
        name: "ياسمين وكريم",
        place: "حفل زفاف — الجزائر العاصمة",
      },
      {
        quote: "محترف، دقيق، وحساسية نادرة. فهم عالمَنا من أول لقاء.",
        name: "إدارة إنتاج",
        place: "موقع تصوير — مسلسل تلفزيوني",
      },
      {
        quote: "تقدّم تلاميذي أسرع بكثير مما توقعت. بيداغوجيا صبورة وصارمة في آن.",
        name: "وليّ أمر تلميذ",
        place: "دروس الكمان",
      },
    ],
  },
  contact: {
    eyebrow: "الحجز",
    headingA: "لنكتب معًا",
    headingAccent: "حركتَك",
    headingB: "القادمة.",
    para: "حفل زفاف، حفلة رسمية، مناسبة، تصوير أو دروس كمان — صف مشروعك في كلمات. سنجيبك خلال 24 ساعة باقتراح يناسب ميزانيتك ومكانك.",
    labels: { phone: "الهاتف", whatsapp: "واتساب", instagram: "إنستغرام" },
    formTitle: "طلب عرض سعر",
    name: "الاسم الكامل",
    namePlaceholder: "اسمك",
    reach: "الهاتف أو البريد",
    reachPlaceholder: "طريقة التواصل معك",
    type: "نوع المناسبة",
    types: [
      "حفل زفاف",
      "فعالية شركة",
      "مناسبة / خاصة",
      "سينما / تلفزيون",
      "دروس كمان",
      "أخرى",
    ],
    project: "مشروعك",
    projectPlaceholder: "التاريخ، المكان، الأجواء المطلوبة…",
    submit: "إرسال الطلب",
    privacy: "معلوماتك سرّية وتُستعمل فقط للرد على طلبك.",
    error: "يرجى إدخال اسمك وطريقة للتواصل معك.",
    successTitle: "شكرًا، تم إرسال طلبك.",
    successText:
      "سيردّ عليك منصف شخصيًا خلال 24 ساعة. للرد الفوري، اتصل على 33 89 72 556 213+.",
    successButton: "إرسال طلب آخر",
  },
  footer: {
    description:
      "موسيقى مباشرة، تدريس وحضور على الخشبة في كل أنحاء الجزائر. نهج مصمَّم خصيصًا لك، من أول محادثة إلى آخر نغمة.",
    navTitle: "التنقل",
    servicesTitle: "الخدمات",
    contactTitle: "التواصل",
    navItems: [
      "نبذة",
      "المسار",
      "الخدمات",
      "دروس الكمان",
      "على الشاشة",
      "المعرض",
    ],
    serviceItems: [
      "حفل الزفاف والمناسبات",
      "فعاليات الشركات",
      "السينما والتلفزيون",
      "دروس الكمان",
      "عازف مرافق",
    ],
    quote: "اطلب عرض سعر",
    rights: "جميع الحقوق محفوظة",
    backToTop: "إلى الأعلى",
    call: "اتصال",
    whatsapp: "واتساب",
    role: "عازف كمان · أستاذ · ممثل",
    emailLabel: "البريد الإلكتروني",
    email: "moncef.benouniche@gmail.com",
    city: "الجزائر العاصمة، الجزائر",
  },
  common: {
    langName: "العربية",
  },
};

export const content: Record<Lang, Dict> = { fr, en, ar };

/* ------------------------------------------------------------------ */

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: Dict;
  rtl: boolean;
};

const LangContext = createContext<Ctx>({
  lang: "fr",
  setLang: () => {},
  c: fr,
  rtl: false,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LangContext.Provider
      value={{ lang, setLang, c: content[lang], rtl: lang === "ar" }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
