const STEPS = [
  {
    id: "arrival-notice",
    title: "Arrival notice in",
    shortDesc: "Containers pulled, loads raised.",
    longDesc: "Containers pulled, loads raised.",

    checklist: [
      {
        icon: "01",
        color: "#e8eef4",
        text: "Containers pulled, loads raised.",
      },
    ],

    gradient: ["#dce8f2", "#eef3f7", "#d9e5ef"],

    mock: {
      avatar: {
        icon: "01",
        color: "#e8eef4",
        textColor: "#31506d",
      },
      name: "Arrival notice in",
      meta: "Containers pulled, loads raised.",
      message: "Containers pulled, loads raised.",

      chips: [
        { label: "Arrival notice" },
        { label: "Container pulled" },
        { label: "Load raised" },
      ],
    },
  },

  {
    id: "load-created",
    title: "Load created",
    shortDesc: "One box or forty, one booking.",
    longDesc: "One box or forty, one booking.",

    checklist: [
      {
        icon: "02",
        color: "#e8eef4",
        text: "One box or forty, one booking.",
      },
    ],

    gradient: ["#e2edf5", "#edf4f8", "#dce9f2"],

    mock: {
      avatar: {
        icon: "02",
        color: "#e8eef4",
        textColor: "#31506d",
      },
      name: "Load created",
      meta: "One box or forty, one booking.",
      message: "One box or forty, one booking.",

      chips: [
        { label: "One box" },
        { label: "Forty boxes" },
        { label: "One booking" },
      ],
    },
  },

  {
    id: "posted-boards",
    title: "Posted to the boards",
    shortDesc: "Posted once, never twice.",
    longDesc: "Posted once, never twice.",

    checklist: [
      {
        icon: "03",
        color: "#e8eef4",
        text: "Posted once, never twice.",
      },
    ],

    gradient: ["#dce8f2", "#edf3f7", "#d8e5ef"],

    mock: {
      avatar: {
        icon: "03",
        color: "#e8eef4",
        textColor: "#31506d",
      },
      name: "Posted to the boards",
      meta: "Posted once, never twice.",
      message: "Posted once, never twice.",

      chips: [{ label: "Posted once" }, { label: "Never twice" }],
    },
  },

  {
    id: "rates-return",
    title: "Rates return",
    shortDesc: "You pick the carrier.",
    longDesc: "You pick the carrier.",

    checklist: [
      {
        icon: "04",
        color: "#e8eef4",
        text: "You pick the carrier.",
      },
    ],

    gradient: ["#dce8f2", "#eef3f7", "#d9e5ef"],

    mock: {
      avatar: {
        icon: "04",
        color: "#e8eef4",
        textColor: "#31506d",
      },
      name: "Rates return",
      meta: "You pick the carrier.",
      message: "You pick the carrier.",

      chips: [
        { label: "Rates returned" },
        { label: "Carrier options" },
        { label: "Pick carrier" },
      ],
    },
  },
];

export default STEPS;
