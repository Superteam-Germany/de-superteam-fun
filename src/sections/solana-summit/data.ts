export const summitFacts = [
  { label: "Date", value: "13 June 2026" },
  { label: "Time", value: "10:00-22:00" },
  { label: "Location", value: "Spreespeicher, Berlin" },
  { label: "Entry", value: "Free, approval required" },
];

export const summitHighlights = [
  {
    eyebrow: "Main stage",
    title: "Solana builders, founders, and capital in one room",
    body: "A full-day program for people building, investing, operating, and creating around Solana in Germany.",
  },
  {
    eyebrow: "ICM",
    title: "Internet Capital Markets and live trading formats",
    body: "Sessions and competitions around market structure, onchain products, distribution, and new financial rails.",
  },
  {
    eyebrow: "Network",
    title: "High-signal conversations beyond the talks",
    body: "Meet founders, developers, investors, ecosystem teams, creators, and community operators throughout the day.",
  },
];

export const speakerPlaceholders = [
  "Solana ecosystem founders",
  "Protocol and product builders",
  "Investors and operators",
  "Creators and community leads",
];

export const sponsorPlaceholders = [
  "Solana ecosystem partners",
  "Infrastructure teams",
  "Consumer crypto brands",
  "German tech partners",
];

export const faqs = [
  {
    question: "Is the summit free to attend?",
    answer:
      "Yes. Attendance is free, but registration is approval-based because capacity is limited.",
  },
  {
    question: "Who should request to join?",
    answer:
      "Founders, developers, investors, institutions, creators, operators, and anyone seriously building or exploring the Solana ecosystem.",
  },
  {
    question: "Where is the summit happening?",
    answer:
      "The summit is planned for Spreespeicher Eventlocation at Stralauer Allee 2, 10245 Berlin.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "There's no dress code. Come as you are and wear whatever you're comfortable in.",
  },
];

export const agendaFilterTypes = [
  "Keynote",
  "Lightning Talk",
  "Fireside Chat",
  "Panel",
  "Debate",
  "Startup showcase",
  "Trading Cup",
] as const;

export const agendaTypes = [...agendaFilterTypes, "Break", "TBD"] as const;

export type AgendaType = (typeof agendaTypes)[number];

export type AgendaItem = {
  time: string;
  title: string;
  type?: AgendaType;
  speakers: string[];
  location: string;
  section: string;
  status?: "confirmed";
};

export const agendaItems: AgendaItem[] = [
  {
    time: "10:00 - 11:00",
    title: "Doors Open & Breakfast",
    type: "Break",
    speakers: [],
    location: "Venue-wide",
    section: "Opening",
    status: "confirmed",
  },
  {
    time: "11:00 - 11:10",
    title: "Opening Keynote",
    type: "Keynote",
    speakers: ["Patricia Albrecht (Superteam Germany)"],
    location: "Main Stage",
    section: "Opening",
    status: "confirmed",
  },
  {
    time: "11:10 - 11:30",
    title: "The State of Solana",
    type: "Fireside Chat",
    speakers: ["Mert Mumtaz (Helius)", "Aditya (Superteam)"],
    location: "Main Stage",
    section: "Opening",
    status: "confirmed",
  },
  {
    time: "11:30 - 11:50",
    title: "Jupiter: Building the Everything App",
    type: "Fireside Chat",
    speakers: ["Xiao-Xiao Zhu (Jupiter)"],
    location: "Main Stage",
    section: "Onchain Capital Markets",
    status: "confirmed",
  },
  {
    time: "11:50 - 12:20",
    title:
      "Public Chain, Private Stack: Who Controls Solana's Infrastructure?",
    type: "Debate",
    speakers: [
      "Dr. Nick Almond (Jito)",
      "Tomas Eminger (Staking Facilities)",
      "Tibor Tribus (FTMO)",
      "Sabs Sachdeva (Harmonic / Temporal)",
    ],
    location: "Main Stage",
    section: "Onchain Capital Markets",
    status: "confirmed",
  },
  {
    time: "12:20 - 12:40",
    title:
      "Is USD the Final Boss of Stablecoins? MiCA and the European Stablecoin Race",
    type: "Fireside Chat",
    speakers: [
      "Patrick Hansen (Circle)",
      "Jan-Oliver Sell (Qivalis)",
      "Peter Großkopf (AllUnity)",
      "Patricia Albrecht (Superteam Germany, moderator)",
    ],
    location: "Main Stage",
    section: "Onchain Capital Markets",
    status: "confirmed",
  },
  {
    time: "12:40 - 13:10",
    title: "The RWA Boom: Tokenized Assets on Solana",
    type: "Panel",
    speakers: [
      "Andreas Sack (Deka)",
      "Radoslav Albrecht (Bitbond)",
      "Erik Frank (LBBW)",
    ],
    location: "Main Stage",
    section: "Onchain Capital Markets",
    status: "confirmed",
  },
  {
    time: "13:10 - 14:10",
    title: "Lunch Break",
    type: "Break",
    speakers: [],
    location: "Venue-wide",
    section: "Onchain Capital Markets",
    status: "confirmed",
  },
  {
    time: "14:10 - 14:25",
    title:
      "Can Public Blockchains Settle TradFi? A Conversation with Clearstream",
    type: "Fireside Chat",
    speakers: ["Thilo Derenbach (Clearstream)"],
    location: "Main Stage",
    section: "Onchain Capital Markets",
  },
  {
    time: "14:25 - 14:40",
    title: "Where Perps Actually Settle: Phoenix, Hyperliquid, OKX",
    type: "Fireside Chat",
    speakers: [
      "Chris Grundy (OKX)",
      "Merdan Aslan (Superteam Germany)",
    ],
    location: "Main Stage",
    section: "Frontier - AI, Privacy & Robotics",
    status: "confirmed",
  },
  {
    time: "14:40 - 14:50",
    title: "Finance Goes Dark: Privacy & Encrypted Computation",
    type: "Keynote",
    speakers: ["Yannik Schrade (Arcium)"],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
    status: "confirmed",
  },
  {
    time: "14:50 - 15:00",
    title: "What everyone is getting wrong about privacy",
    type: "Fireside Chat",
    speakers: [
      "Vitor Py (Sol Strategies)",
      "Tilo Carl Palfner (Light Protocol)",
    ],
    location: "Main Stage",
    section: "European Innovation",
    status: "confirmed",
  },
  {
    time: "15:00 - 15:10",
    title: "Agentic Keynote: Via",
    type: "Keynote",
    speakers: ["Daniela Boback (Via)"],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
    status: "confirmed",
  },
  {
    time: "15:10 - 15:20",
    title: "TBD — Iron",
    type: "Keynote",
    speakers: ["Max von Wallenberg (Iron)"],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
    status: "confirmed",
  },
  {
    time: "15:30 - 15:40",
    title: "TBD — Staex",
    type: "Keynote",
    speakers: ["Alexandra K. Mikityuk (Staex)"],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
    status: "confirmed",
  },
  {
    time: "15:40 - 15:50",
    title: "Tokens are broken and how to fix them",
    type: "Keynote",
    speakers: ["Phillip (Crafts)"],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
    status: "confirmed",
  },
  {
    time: "15:50 - 16:00",
    title: "TBD — Decen Space",
    type: "Keynote",
    speakers: ["Tristan Hundley (Decen Space)"],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
    status: "confirmed",
  },
  {
    time: "16:00 - 16:10",
    title: "Fundraising",
    type: "Keynote",
    speakers: ["Voshy Ivosevic (Greed Academy / Lucid Drakes)"],
    location: "Main Stage",
    section: "European Innovation",
    status: "confirmed",
  },
  {
    time: "16:10 - 16:50",
    title: "Startup Showcase",
    type: "Startup showcase",
    speakers: [
      "João Martins (Housd)",
      "Thomas Gehrmann (Mato)",
      "Erik Plauman (Bench)",
      "Noah Haufer (SolRouter)",
      "Sangharsh Bhustalimath (Stablecorp)",
      "Goldie G (dopamyn.fun)",
      "Alexander Kujavsky (MultiHopper)",
      "Mango Max (Bigwallet · Manifest)",
      "Newton Davis (Janus)",
    ],
    location: "Main Stage",
    section: "Startup Showcase",
    status: "confirmed",
  },
  {
    time: "16:50 - 17:00",
    title: "Community Building",
    type: "Keynote",
    speakers: ["Carlo Abdel Nour (Superteam Germany)"],
    location: "Main Stage",
    section: "European Innovation",
    status: "confirmed",
  },
  {
    time: "17:00 - 17:30",
    title: "Coffee Break",
    type: "Break",
    speakers: [],
    location: "Venue-wide",
    section: "Frontier - AI, Privacy & Robotics",
    status: "confirmed",
  },
  {
    time: "17:30 - 18:00",
    title: "The Rise of Agentic Payments",
    type: "Panel",
    speakers: [
      "Vidor Gencel (Solflare)",
      "Ulrike Lierow Schad (CVVC / Bundesblock)",
    ],
    location: "Main Stage",
    section: "Frontier - AI, Privacy & Robotics",
    status: "confirmed",
  },
  {
    time: "18:00 - 18:10",
    title: "The Chain Built on Data",
    type: "Keynote",
    speakers: ["Waddah (Solana Foundation)"],
    location: "Main Stage",
    section: "Frontier - AI, Privacy & Robotics",
    status: "confirmed",
  },
  {
    time: "18:10 - 18:20",
    title: "Jupiter Trading Cup Announcement & Closing",
    type: "Trading Cup",
    speakers: ["Superteam Germany"],
    location: "Main Stage",
    section: "Day Close",
    status: "confirmed",
  },
  {
    time: "From 18:30",
    title: "Dinner & Afterparty",
    speakers: ["All attendees"],
    location: "Venue",
    section: "Day Close",
    status: "confirmed",
  },
];
