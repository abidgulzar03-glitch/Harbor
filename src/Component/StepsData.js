// `icon` values are keys from Icons.jsx (callie, hourglass, card, contact, notetaker).
const STEPS = [
  {
    id: "book",
    title: "Book",
    shortDesc: "A client emails asking to meet.",
    longDesc:
      "A client emails asking to meet. Share a booking link or ask Callie, your AI assistant, to find times that work for everyone.",

    checklist: [
      {
        icon: "callie",
        color: "#d9f99d",
        text: "Callie replies with times to meet",
      },
      {
        icon: "hourglass",
        color: "#93c5fd",
        text: "Client picks Tuesday at 2 p.m.",
      },
      {
        icon: "card",
        color: "#5eead4",
        text: "Client pays $150 deposit upfront",
      },
    ],

    gradient: ["#bfdbfe", "#99f6e4", "#d9f99d"],

    mock: {
      avatar: { icon: "callie", color: "#d9f99d", textColor: "#0f172a" },
      name: "Callie",
      meta: "to me, Dominic Mills ▾",
      message:
        "Happy to set up a call for you with Dominic. Here are a few times you're both available.",
      chips: [
        { label: "10:00 AM" },
        { label: "2:30 PM" },
        { label: "3:00 PM" },
      ],
    },
  },

  {
    id: "prep",
    title: "Prep",
    shortDesc: "Get all of the info you need in one place.",
    longDesc:
      "Before the meeting, get all of the info you need in one place. Callie reviews your client's contact history and helps you show up prepared.",

    checklist: [
      {
        icon: "contact",
        color: "#fdba74",
        text: "Contact details automatically update",
      },
      {
        icon: "contact",
        color: "#fdba74",
        text: "Your client interactions are in one place",
      },
      { icon: "callie", color: "#d9f99d", text: "Callie helps you prep" },
    ],

    gradient: ["#fed7aa", "#fef3c7", "#d9f99d"],

    mock: {
      type: "search",
      heading: "Get answers instantly",
      suggestedLabel: "Suggested:",
      suggestions: [
        "What's Acme Co.'s budget?",
        "Who are the main stakeholders for this?",
      ],
      placeholder: "Help me prep for my next meeting",
    },
  },

  {
    id: "capture",
    title: "Capture",
    shortDesc: "Notetaker captures the conversation.",
    longDesc:
      "While you run the meeting, Notetaker captures the conversation. The recap and action items are delivered right after the call.",

    checklist: [
      {
        icon: "notetaker",
        color: "#c4b5fd",
        text: "Notetaker joins and takes notes",
      },
      {
        icon: "notetaker",
        color: "#c4b5fd",
        text: "You get a ready-to-share recap",
      },
      {
        icon: "contact",
        color: "#fdba74",
        text: "Recap is stored in contact profile",
      },
    ],

    gradient: ["#ddd6fe", "#fde68a", "#fbcfe8"],

    mock: {
      type: "video",
      participants: [
        {
          name: "Maria",
          initial: "M",
          color: "#94a3b8",
          img: "/hero-1.jpg",
        },
        { name: "Erin", initial: "E", color: "#64748b", img: "/hero-2.jpg" },
      ],
    },
  },

  {
    id: "follow-up",
    title: "Follow up",
    shortDesc: "Review a pre-drafted email from the recap.",
    longDesc:
      "Review a pre-drafted email based on the recap, add an additional invoice link if needed, and add Callie to the email to handle scheduling.",

    checklist: [
      {
        icon: "notetaker",
        color: "#c4b5fd",
        text: "Notetaker drafts a follow-up email",
      },
      {
        icon: "callie",
        color: "#d9f99d",
        text: "Callie finds time for the next call",
      },
      {
        icon: "card",
        color: "#5eead4",
        text: "Client pays via custom invoice",
      },
    ],

    gradient: ["#ddd6fe", "#bfdbfe", "#99f6e4"],

    mock: {
      type: "email",
      toInitial: "D",
      to: "Dominic Mills",
      cc: "callie@calendly.com",
      ccIcon: "callie",
      ccColor: "#d9f99d",
      message:
        "Thanks again for your time today.\n\nCallie, can you help schedule a meeting with Dominic next week?",
    },
  },
];

export default STEPS;
