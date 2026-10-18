export const wedding = {
  bride: "Ruby",
  groom: "Sahil",
  parents: {
    groom: "Smt. Gharo Devi & Sh. Bansi Lal",
    groomResidence: "83/A, Ward No. 01, Bari Brahmana",
    bride: "Sh. Subash Chander & Smt. Sudesh Kumari",
    brideResidence: "Ranjri",
  },
  invitationLine:
    "With the blessings of the Almighty and our elders, cordially invite you and your family to grace the auspicious wedding celebrations of their beloved son",
  dateLabel: "Monday, 2 November 2026",
  shortDate: "02 . 11 . 2026",
  countdownTarget: "2026-11-02T20:00:00+05:30",
  musicUrl: "/music.webm",
  musicTitle: "Peer Vi Tu",
  story: [
    "Two families, one sacred bond, and an auspicious journey blessed by the Almighty and our elders.",
    "With love, gratitude, and joyous hearts, Sahil & Ruby step into their forever — and our celebration is complete only with your gracious presence and blessings.",
  ],
  events: [
    {
      name: "Satsang",
      date: "23 October 2026",
      time: "Auspicious Hours",
      venue: "At Home",
      note: "Divine prayers and sacred chants to invoke the Almighty's blessings.",
    },
    {
      name: "Sangeet",
      date: "24 October 2026",
      time: "Evening",
      venue: "At Home",
      note: "An evening of music, dance, dholak beats, and joyful melodies.",
    },
    {
      name: "Cocktail",
      date: "26 October 2026",
      time: "7:00 PM onwards",
      venue: "Anutham Resorts",
      note: "An evening of toasts, laughter, and celebration under the lights.",
    },
    {
      name: "Shagun",
      date: "31 October 2026",
      time: "Auspicious Hours",
      venue: "At Home",
      note: "Auspicious traditional blessings and customary family gifts.",
    },
    {
      name: "Mehendi",
      date: "01 November 2026",
      time: "Afternoon onwards",
      venue: "At Home",
      note: "Fragrant henna designs, vibrant songs, and joyful celebration.",
    },
    {
      name: "Baraat & Vivah",
      date: "02 November 2026",
      time: "8:00 PM",
      venue: "Shaurya Resorts, R.S. Pura",
      note: "The grand wedding procession followed by the sacred phere rituals and royal dinner.",
    },
    {
      name: "Mata Ki Chowki / Jaagran",
      date: "04 November 2026",
      time: "Night",
      venue: "At Home",
      note: "Sacred hymns and devotional thanksgiving in divine praise.",
    },
    {
      name: "Reception",
      date: "05 November 2026",
      time: "7:30 PM onwards",
      venue: "The Address Banquets",
      note: "A grand evening to welcome the newlyweds with blessings and celebration.",
    },
  ],
  venue: {
    name: "Shaurya Resorts, R.S. Pura",
    address: "Main Road Kullian, Miran Sahib, R.S. Pura Road, Jammu, J&K – 181102",
    hint: "~9 km from Jammu Airport · Miran Sahib / Kullian",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shaurya+Resorts+and+Banquets+RS+Pura+Jammu",
    mapEmbed: "https://maps.google.com/maps?q=Shaurya+Resorts+and+Banquets+Miran+Sahib+RS+Pura+Jammu&output=embed",
  },
  closing: "Your gracious presence and blessings will make these joyous occasions truly memorable.",
  invitationCardImg: "/wedding-card.png",
  saptapadiImg: "/saptapadi.jpg",
} as const;

export function buildIcs() {
  const start = new Date(wedding.countdownTarget);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sahil and Ruby//Wedding//EN",
    "BEGIN:VEVENT",
    `UID:${start.getTime()}@sahil-ruby`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:Wedding of ${wedding.groom} & ${wedding.bride}`,
    `LOCATION:${wedding.venue.name}, ${wedding.venue.address}`,
    "DESCRIPTION:Baraat & Auspicious Vivah celebrations. We cordially request the honour of your presence.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

