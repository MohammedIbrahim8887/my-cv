import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mohammed Ibrahim",
  initials: "MI",
  location: "Addis Ababa, Ethiopia, EST",
  locationLink: "https://www.google.com/maps/place/AddisAbaba",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Next.js, Node.js, Nest.js and Golang. I have over 3 years of experience working remotely with companies worldwide.",
  avatarUrl: "https://avatars.githubusercontent.com/u/95257247?v=4",
  personalWebsiteUrl: "https://mohammedibrahim.dev",
  contact: {
    email: "contact@mohammedibrahim.dev",
    tel: "+251946410664",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MohammedIbrahim8887",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammed-ibrahim-03bb321b9/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hope Enterprise University College",
      degree: "Bachelor's Degree in Computer Science ",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Zare Innovations",
      link: "https://film.io",
      badges: ["Remote"],
      title: "Senior UI/UX Designer",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
        "Leading the development of the Film.io platform. Technologies: React, TypeScript, Node.js",
    },
    {
      company: "Gebeta Maps",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Frontend Engineer",
      logo: ParabolLogo,
      start: "2024",
      end: null,
      description:
        "Implemented new features, led a squad, improved code delivery process, and initiated migration from Emotion to Tailwind CSS. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Trident Technologies",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Senior Fullstack Developer",
      logo: ClevertechLogo,
      start: "2024",
      end: null,
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, and AAA. Built a live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Peace Technology",
      link: "https://bsgroup.eu/",
      badges: ["Remote"],
      title: "Lead Senior Full Stack Engineer",
      logo: JojoMobileLogo,
      start: 2023,
      end: "2024",
      description:
        "Led the Android team and developed apps for major Polish companies like LOT, Polskie Radio, Agora, and PolskaPress",
    },
    {
      company: "Micro Sun and Solutions",
      link: "https://www.nokia.com",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: NSNLogo,
      start: "2023",
      end: "2024",
      description: "Developed and tested software for LTE base stations",
    },
    {
      company: "Awura",
      link: "https://www.nokia.com",
      badges: ["Remote"],
      title: "Lead UI/UX Designer -> Frontend Engineer",
      logo: NSNLogo,
      start: "2022",
      end: "2023",
      description: "Developed and tested software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Svelte",
    "Node.js",
    "Nest.js",
    "Go",
    "React Native",
    "Kubernetis",
    "Docker",
    "gRPC"
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
