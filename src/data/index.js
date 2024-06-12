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
      "<span style='color: white;'>Core developer</span> for various blockchain projects; including <span style='color: white;'>Lambswap,</span> a decentralized exchange operating on <span style='color: white;'>Bitcoin's Lambda protocol,</span> and <span style='color: white;'>Sherpa,</span> an <span style='color: white;'> education focused Web3 project.</span>",
      "Utilizing technologies such as <span style='color: white;'> Javascript, Python, React and more. </span>",
      " I helped create various<span style='color: white;'> decentralized applications </span> on a nascent bitcoin protocol, and was a early developer in the <span style='color: white;'> Trac and Tap ecosystem.",
      "Worked in an agile environment where we utilized <span style='color: white;'> Kanban.</span> Familiar with all aspects of the <span style='color: white;'> Software Development Lifecycle. </span>"
    ],
  },
];

const portfolio = [
  {
    name: "Ordbot",
    description:
      "A Bitcoin ordinals bot that allows users to verify Bitcoin inscriptions, and assign roles based on their inscription holdings and manage collections.",
    image: ord,
    githubLink: "https://github.com/ShivgunGaming/ordbot",
    liveDemoLink: "https://discord.com/oauth2/authorize?client_id=1241662241418248212&permissions=633318697598967&scope=bot"
  },
  {
    name: "Biometra",
    description:
      "A crypto wallet that allows for creation of a wallet, logging into existing wallets, and sending of different cryptocurries from different EVM chains.",
    image: bio,
    githubLink: "https://github.com/ShivgunGaming/biometra-main",
    liveDemoLink: "https://chromewebstore.google.com/detail/biometra/gknnoaamopfhmbidclipchiccnladiol"
  },
  {
    name: "Crypto Tracker",
    description:
      "A decentralized application for tracking of all crypto assets across all EVM chains, such as Ethereum, Avalanche and Binance just to name a few.",
    image: tracker,
    githubLink: "https://github.com/ShivgunGaming/crypto-portfolio-tracker",
    liveDemoLink: "https://crypto-portfolio-tracker-indol.vercel.app/"
  },
];

export { experiences, portfolio };
