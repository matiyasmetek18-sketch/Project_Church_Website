/**
 * CENTRAL CHURCH CONFIGURATION
 * 
 * Strict No-Fabrication Notice:
 * All church-specific details that have not been finalized or confirmed by church
 * leadership are represented as explicit, bracketed placeholders (e.g. "[CHURCH NAME]").
 * 
 * Update these values once verified by leadership without modifying UI components.
 */

export interface Pillar {
  title: string;
  summary: string;
  scripture: string;
}

export interface WorshipElement {
  title: string;
  description: string;
}

export interface ChurchConfig {
  name: string;
  shortName: string;
  city: string;
  tagline: string;
  tradition: string;
  visionStatement: string;
  isPlantingPhase: boolean;
  statusNotice: string;
  gathering: {
    day: string;
    time: string;
    locationName: string;
    streetAddress: string;
    cityStateZip: string;
    roomOrHall: string;
    parkingNotes: string;
    accessibilityNotes: string;
    arrivalTip: string;
    notes: string;
  };
  contact: {
    email: string;
    phone: string;
    mailingAddress: string;
    inquiryNotice: string;
  };
  theology: {
    confessionTitle: string;
    confessionSummary: string;
    pillarsNotice: string;
    pillars: Pillar[];
  };
  worship: {
    description: string;
    elementsNotice: string;
    orderElements: WorshipElement[];
    childcarePolicy: string;
    dressCodeGuidance: string;
  };
  leadership: {
    greeting: string;
    greetingAuthor: string;
    greetingAuthorRole: string;
  };
  navLinks: Array<{
    label: string;
    href: string;
  }>;
}

export const churchConfig: ChurchConfig = {
  name: "[CHURCH NAME]",
  shortName: "[CHURCH NAME]",
  city: "[City]",
  tagline: "A Reformed Baptist Church Plant in [CITY / REGION]",
  tradition: "Reformed Baptist",
  visionStatement: "[VISION / MISSION STATEMENT: Awaiting leadership approval]",
  isPlantingPhase: true,
  statusNotice: "We are currently in the planting phase, gathering for prayer and biblical fellowship as we prepare to launch public Lord's Day worship.",

  gathering: {
    day: "[SUNDAY GATHERING DAY]",
    time: "[MEETING TIME - e.g., 10:00 AM]",
    locationName: "[MEETING LOCATION / FACILITY NAME]",
    streetAddress: "[STREET ADDRESS]",
    cityStateZip: "[CITY, STATE ZIP]",
    roomOrHall: "[MEETING ROOM / AUDITORIUM]",
    parkingNotes: "[PARKING INSTRUCTIONS: Details to be confirmed]",
    accessibilityNotes: "[ACCESSIBILITY & WHEELCHAIR ENTRANCE: Details to be confirmed]",
    arrivalTip: "[ARRIVALS & GREETING INSTRUCTIONS: Details to be confirmed]",
    notes: "[Gathering notes]",
  },

  contact: {
    email: "[CONTACT EMAIL: e.g., contact@churchdomain.org]",
    phone: "[CONTACT PHONE]",
    mailingAddress: "[MAILING ADDRESS]",
    inquiryNotice: "Interested in learning more about the church plant, prayer meetings, or core group gatherings? Please reach out to our planting team.",
  },

  theology: {
    confessionTitle: "[HISTORIC REFORMED CONFESSION - e.g., 1689 2LBCF]",
    confessionSummary: "[CONFESSIONAL COMMITMENT: Specific confessional standard and formal statements of faith are pending final leadership ratification.]",
    pillarsNotice: "[PROVISIONAL DRAFT: Doctrinal pillars below are representative examples pending formal adoption by church leadership.]",
    pillars: [
      {
        title: "The Authority of Scripture",
        summary: "We submit to the 66 books of the Old and New Testaments as God's inspired, inerrant, and fully sufficient revelation for doctrine, worship, and Christian life.",
        scripture: "2 Timothy 3:16–17",
      },
      {
        title: "The Doctrines of Grace",
        summary: "We joyfully proclaim that salvation is entirely of the Lord—effected by sovereign grace alone, through faith alone, in Christ alone, to the glory of God alone.",
        scripture: "Ephesians 2:8–10",
      },
      {
        title: "Expository Preaching",
        summary: "Our corporate worship centers upon verse-by-verse exposition of Scripture, proclaiming the whole counsel of God with biblical fidelity and pastoral warmth.",
        scripture: "2 Timothy 4:1–2",
      },
      {
        title: "Covenant Fellowship",
        summary: "We are committed to regenerate church membership, brotherly love, mutual accountability, and discipleship within the local body of Christ.",
        scripture: "Hebrews 10:24–25",
      },
    ],
  },

  worship: {
    description: "Our corporate worship is regulated by Scripture—reverent, God-centered, joyful, and rich in biblical substance.",
    elementsNotice: "[PROVISIONAL DRAFT: Liturgical elements below are representative examples pending formal adoption by church leadership.]",
    orderElements: [
      {
        title: "Congregational Praise",
        description: "Singing Psalms, historic hymns of the Christian faith, and rich theological modern hymns accompanied simply to elevate congregational voices.",
      },
      {
        title: "Public Scripture Reading",
        description: "Devoting ourselves to the public reading of substantial portions from both the Old and New Testaments.",
      },
      {
        title: "Pastoral Prayer",
        description: "Prayers of adoration, corporate confession of sin, thanksgiving, and pastoral supplication for the church and the world.",
      },
      {
        title: "Expository Preaching",
        description: "Opening God's Word, explaining the text in its historical context, and applying its truths directly to hearts and lives.",
      },
      {
        title: "The Ordinances",
        description: "[BAPTISM & THE LORD'S SUPPER: Observance practice and theological framework to be confirmed by leadership.]",
      },
    ],
    childcarePolicy: "[CHILDCARE & NURSERY ARRANGEMENTS: Policy and age arrangements pending leadership decision.]",
    dressCodeGuidance: "[DRESS CODE & ATTIRE: Guidance to be confirmed by leadership]",
  },

  leadership: {
    greeting: "[A pastoral welcome letter and introduction to the church plant will be shared here upon leadership review.]",
    greetingAuthor: "[CHURCH PLANTING LEADERSHIP / ELDERSHIP TEAM]",
    greetingAuthorRole: "[LEADERSHIP ROLE]",
  },

  navLinks: [
    { label: "Sundays", href: "#gathering" },
    { label: "Our Beliefs", href: "#beliefs" },
    { label: "Worship", href: "#worship" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
