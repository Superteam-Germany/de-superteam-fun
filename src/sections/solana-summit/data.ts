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
    time: "11:00 - 11:10",
    title: "Opening Keynote",
    type: "Keynote",
    speakers: ["Patricia Albrecht (Superteam Germany)"],
    location: "Main Stage",
    section: "Opening",
    status: "confirmed",
  },
  {
    time: "11:10 - 11:20",
    title: "The State of Solana",
    type: "Lightning Talk",
    speakers: ["Mert Mumtaz (Helius)"],
    location: "Main Stage",
    section: "Opening",
    status: "confirmed",
  },
  {
    time: "11:20 - 11:35",
    title: "Jupiter: Building the Everything App",
    type: "Fireside Chat",
    speakers: [
      "Xiao-Xiao Zhu (Jupiter)",
      "Patricia Albrecht (Superteam Germany)",
    ],
    location: "Main Stage",
    section: "Opening",
    status: "confirmed",
  },
  {
    time: "11:35 - 11:50",
    title: "The case for Building on Solana in Germany",
    type: "Panel",
    speakers: ["TBA"],
    location: "Main Stage",
    section: "Opening",
  },
  {
    time: "TBD",
    title: "Sessions TBD",
    type: "TBD",
    speakers: [],
    location: "Main Stage",
    section: "Onchain Capital Markets",
  },
  {
    time: "13:10 - 14:10",
    title: "Lunch Break",
    type: "Break",
    speakers: ["All attendees"],
    location: "Venue-wide",
    section: "Onchain Capital Markets",
  },
  {
    time: "TBD",
    title: "Sessions TBD",
    type: "TBD",
    speakers: [],
    location: "Main Stage",
    section: "Lightning Round - German born innovation",
  },
  {
    time: "TBD",
    title: "Sessions TBD",
    type: "TBD",
    speakers: [],
    location: "Main Stage",
    section: "European Innovation",
  },
  {
    time: "TBD",
    title: "Sessions TBD",
    type: "Startup showcase",
    speakers: [],
    location: "Main Stage",
    section: "Startup Showcase",
  },
  {
    time: "TBD",
    title: "Sessions TBD",
    type: "TBD",
    speakers: [],
    location: "Main Stage",
    section: "Stablecoins & Euro Finance",
  },
  {
    time: "TBD",
    title: "Sessions TBD",
    type: "TBD",
    speakers: [],
    location: "Main Stage",
    section: "Frontier - AI, Privacy & Robotics",
  },
  {
    time: "18:20 - 18:25",
    title: "Trading Cup Winner Announcement",
    type: "Trading Cup",
    speakers: ["Superteam Germany"],
    location: "Main Stage",
    section: "Day Close",
  },
  {
    time: "18:25 - 18:30",
    title: "Closing Statement",
    type: "Keynote",
    speakers: ["Aditya Shetty (Superteam)"],
    location: "Main Stage",
    section: "Day Close",
  },
  {
    time: "19:00 - 22:00",
    title: "Afterparty",
    speakers: ["All attendees"],
    location: "Venue",
    section: "Day Close",
  },
];
