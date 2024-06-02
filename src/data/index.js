import {
  ord,
  tracker,
  bio,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Professional",
    date: "2022 - Present",
    details: [
      "Developed various websites and bots for <span style='color: white;'>Hells Bells and Lambswap</span> and worked with various blockchains such as <span style='color: white;'>EVM, Ordinals and Bellschain.</span>",
      "<span style='color: white;'>Developed </span> many websites, apps, dApps and bots from scratch to completion.",
      "<span style='color: white;'>Worked with SDLC and tools like Linear and Trello </span> for all of my development work, and great at <span style='color: white;'>communication.</span>",
    ],
  },
  {
    title: "Developer / Dev",
    company_name: "Hobby",
    date: "2022 - Present",
    details: [
      "Developed various websites, apps and dApps using <span style='color: white;'>HTML, CSS and Javascript</span> and hosted my projects on <span style='color: white;'>Github, Vercel and Google Chrome Store.</span>",
      "<span style='color: white;'>Learned </span> many technologies, such as Bootstrap, Tailwind and React.",
      "Worked with tools such as <span style='color: white;'> Visual Studio Code and Git </span> for most of my projects.",
    ],
  },
  {
    title: "Content Creator",
    company_name: "Hobby",
    date: "2023 - Present",
    details: [
      "Amassed over  <span style='color: white;'>750,000+ impressions, 50,000+ likes, and 1,600+ followers</span> all in under <span style='color: white;'>1 year.</span>",
      "<span style='color: white;'>Created </span> many art pieces for the world to savor.",
      "Been on stage on many <span style='color: white;'> Twitter spaces </span> to express my ideas and thoughts.",
    ],
  },
];

const portfolio = [
  {
    name: "Ordbot",
    description:
      "A Bitcoin ordinals bot that allows users to verify Bitcoin inscriptions, and assign roles based on their inscription holdings and manage collections.",
    image: ord,
  },
  {
    name: "Biometra",
    description:
      "A crypto wallet that allows for creation of a wallet, logging into existing wallets, and sending of different cryptocurries from different EVM chains.",
    image: bio,
  },
  {
    name: "Crypto Tracker",
    description:
      "A decentralized application for tracking of all crypto assets across all EVM chains, such as Ethereum, Avalanche and Binance just to name a few.",
    image: tracker,
  },
];

export { experiences, portfolio };

