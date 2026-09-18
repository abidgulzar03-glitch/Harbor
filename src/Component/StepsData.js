// Each step's full config lives here — swap copy, icons, colors, and the
// mock UI content per step without touching any component code.
const STEPS = [
  {
    id: "book",
    title: "Book",
    shortDesc: "Book the meeting and get paid with zero back-and-forth.",
    longDesc:
      "A client emails asking to meet. Share a booking link or ask your assistant to find times that work for everyone.",
    checklist: [
      {
        icon: "◆",
        color: "#d9f99d",
        text: "Callie replies with times to meet",
      },
      { icon: "⏳", color: "#c7d2fe", text: "Client picks Tuesday at 2 p.m." },
      { icon: "▭", color: "#99f6e4", text: "Client pays $150 deposit upfront" },
    ],
    gradient: ["#7c9cf0", "#3fb6a8", "#7fd88f"],
    mock: {
      avatar: { icon: "◆", color: "#d9f99d" },
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
    shortDesc: "Never walk into a meeting cold.",
    longDesc:
      "Before the meeting, get all of the info you need in one place. Callie reviews your client's contact history and helps you show up prepared.",
    checklist: [
      {
        icon: "👤",
        color: "#fdba74",
        text: "Contact details automatically update",
      },
      {
        icon: "👤",
        color: "#fdba74",
        text: "Your client interactions are in one place",
      },
      { icon: "◆", color: "#d9f99d", text: "Callie helps you prep" },
    ],
    gradient: ["#fb923c", "#fcd34d", "#bef264"],
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
    shortDesc: "Never miss a detail from the conversation.",
    longDesc:
      "While you run the meeting, Notetaker captures the conversation. The recap and action items are delivered right after the call.",
    checklist: [
      { icon: "🔇", color: "#c4b5fd", text: "Notetaker joins and takes notes" },
      {
        icon: "🔇",
        color: "#c4b5fd",
        text: "You get a ready-to-share recap",
      },
      {
        icon: "👤",
        color: "#fdba74",
        text: "Recap is stored in contact profile",
      },
    ],
    gradient: ["#a78bfa", "#fcd34d", "#fdba74"],
    mock: {
      type: "video",
      participants: [
        {
          name: "Maria",
          initial: "M",
          color: "#cbd5e1",
          img: "./public/hero-1.jpg",
        },
        {
          name: "Erin",
          initial: "E",
          color: "#94a3b8",
          img: "./public/hero-2.jpg",
        },
      ],
      pillLabel: "Recording",
    },
  },
  {
    id: "follow-up",
    title: "Follow up",
    shortDesc: "Work moves forward after the meeting ends.",
    longDesc:
      "The recap goes out, action items are tracked, and the next step is already on the calendar.",
    checklist: [
      { icon: "◆", color: "#fef3c7", text: "Recap emailed to everyone" },
      {
        icon: "⏳",
        color: "#fed7aa",
        text: "Action items assigned automatically",
      },
      { icon: "▭", color: "#fbcfe8", text: "Next call suggested and booked" },
    ],
    gradient: ["#fbbf24", "#fb923c", "#f472b6"],
    mock: {
      type: "email",
      to: "Dominic Mills",
      toInitial: "D",
      cc: "callie@calendly.com",
      ccIcon: "◆",
      ccColor: "#d9f99d",
      message:
        "Thanks again for your time today.\n\nCallie, can you help schedule a meeting with Dominic next week?",
    },
  },
];

export default STEPS;
