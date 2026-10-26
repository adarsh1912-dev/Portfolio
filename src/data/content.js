
/* All editable portfolio content lives in this file. */

export const profile = {
  name: "Adarsh Raj",
  initials: "AR",
  role: "Software Engineering Student",
  eyebrow: "Full-stack developer · Applied AI",
  headline: [
    { text: "I build" },
    { text: "useful", highlight: true },
    { text: "software", accent: "." },
  ],
  intro:
    "I'm a B.Tech Information Technology student at Narula Institute of Technology, graduating in 2027. I build full-stack applications with JavaScript, React, Node.js, and Express, and I'm interested in applying AI to practical problems.",
  availability: "Open to software engineering internships · Graduating 2027",
  availabilityShort: "Open to internships · Graduating 2027",
  location: "Kolkata, West Bengal, India",
  email: "aj19122001@gmail.com",
  resumeUrl: "/Resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/adarsh1912-dev",
      handle: "@adarsh1912-dev",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adarsh-raj-3b1439200/",
      handle: "in/adarsh-raj-3b1439200",
    },
  ],
  meta: [
    { label: "Focus", value: "Full-stack + Applied AI" },
    { label: "Toolkit", value: "React · Node.js · SQL" },
    { label: "Currently", value: "B.Tech Information Technology" },
  ],
};

export const nav = [
  { index: "01", label: "About", href: "#about" },
  { index: "02", label: "Projects", href: "#work" },
  { index: "03", label: "Skills", href: "#skills" },
  { index: "04", label: "Contact", href: "#contact" },
];

export const sections = {
  about: {
    index: "01",
    label: "About",
    meta: "Background",
    title: "Curious about how things",
    accent: "work.",
    lede:
      "I enjoy understanding problems from the inside out and building software that turns practical ideas into working products.",
  },
  work: {
    index: "02",
    label: "Selected work",
    meta: "Personal projects",
    title: "Ideas turned into",
    accent: "working software.",
    lede:
      "From real-time communication to AI-assisted résumé building and local-first music playback, I build projects that explore different sides of software engineering.",
  },
  skills: {
    index: "03",
    label: "Skills",
    meta: "Technical toolkit",
    title: "The tools I build",
    accent: "with.",
    lede:
      "A practical toolkit spanning frontend development, backend APIs, databases, authentication, and problem-solving.",
  },
  education: {
    index: "04",
    label: "Education",
    meta: "Foundations",
    title: "Learning the fundamentals,",
    accent: "building beyond them.",
    lede:
      "Pursuing a B.Tech in Information Technology while developing applications and strengthening computer science fundamentals.",
  },
};

export const about = {
  intro:
    "I'm an Information Technology student who enjoys building complete applications and understanding the engineering decisions behind them.",
  paragraphs: [
    "My development interests span the full stack. I work with JavaScript, React, Node.js, Express, and databases to build applications that connect interfaces, APIs, and data. My projects include Applyzen, an AI-assisted résumé builder; Talksy, a real-time chat application; and Ymusix, a local-first terminal music player published on npm.",
    "I'm also interested in applied AI: building useful applications around AI capabilities rather than treating AI as a feature to add without a clear purpose. Alongside development, I've solved 900+ DSA problems and continue to strengthen my problem-solving skills as I prepare for software engineering opportunities in 2027.",
  ],
  quote:
    "Good software starts with understanding the problem and making thoughtful engineering decisions.",
  principles: [
    {
      title: "Understand the problem",
      body:
        "Start with the requirements, constraints, and user needs before choosing an implementation.",
    },
    {
      title: "Build end to end",
      body:
        "Connect the interface, backend, and data layer into a complete application rather than isolated features.",
    },
    {
      title: "Keep learning",
      body:
        "Strengthen fundamentals through DSA practice, hands-on projects, and exploring new engineering approaches.",
    },
  ],
};

export const projects = [
  {
    id: "applyzen",
    index: "01",
    title: "Applyzen",
    kind: "AI-assisted résumé builder",
    year: "",
    demoHost: "github.com/adarsh1912-dev/ApplyZen",
    summary:
      "An AI-assisted résumé builder with live A4 previews, ATS-conscious templates, job-description matching, and an application tracker.",
    description:
      "Applyzen brings résumé creation and job-application organization into one workspace. It includes a live A4 résumé preview, résumé import, ATS-conscious templates, job-description matching, evidence-based bullet rewrites, and an application tracker. A localStorage mode supports offline use without requiring a server for that workflow.",
    highlights: [
      "Live A4 résumé preview with ATS-conscious templates",
      "Job-description matching and evidence-based bullet rewrites",
      "Résumé import and application tracking",
      "React and Express application with PostgreSQL support",
      "Offline localStorage mode",
    ],
    stack: [
      "React",
      "Express",
      "PostgreSQL",
      "JavaScript",
      "localStorage",
    ],
    repoUrl: "https://github.com/adarsh1912-dev/ApplyZen",
    liveUrl: "",
    preview: "resume",
    previewAlt:
      "Conceptual preview of the Applyzen workspace: an A4 résumé document beside a job-match panel and application tracker.",
    layout: "feature",
  },
  {
    id: "talksy",
    index: "02",
    title: "Talksy",
    kind: "Real-time chat application",
    year: "",
    demoHost: "github.com/adarsh1912-dev/chatApp",
    summary:
      "A one-to-one real-time chat app with JWT authentication, online presence, read receipts, and image messaging.",
    description:
      "Talksy connects a React client to an Express and Socket.IO backend with MongoDB. Authentication covers registration, login, bcrypt-hashed passwords, JWTs, and protected routes; the messaging layer adds live one-to-one delivery, online presence, read receipts, unseen counts, image uploads through Cloudinary, and profile management.",
    highlights: [
      "JWT authentication with bcrypt-hashed passwords",
      "One-to-one messaging delivered live with Socket.IO",
      "Online presence, read receipts, and unseen counts",
      "Image messages and avatars uploaded through Cloudinary",
      "React context state with protected client routes",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],
    repoUrl: "https://github.com/adarsh1912-dev/chatApp",
    liveUrl: "",
    preview: "chat",
    previewAlt:
      "Conceptual preview of the Talksy one-to-one chat interface, showing conversations, live messages with read receipts, an image message, and online presence.",
    layout: "split-right",
  },
  {
    id: "ymusix",
    index: "03",
    title: "Ymusix",
    kind: "Local-first terminal music player",
    year: "",
    demoHost: "npmjs.com/package/ymusix",
    summary:
      "A Spotify-inspired terminal music player with a local library, search, queue, shuffle, downloads, and optional YouTube streaming.",
    description:
      "Ymusix explores a different kind of user experience: music playback through a terminal interface. It centers on a local-first library and includes search, queue management, shuffle, and downloads, with optional YouTube streaming. The design does not require user accounts or a dedicated application server. Ymusix is published on npm.",
    highlights: [
      "Published npm package",
      "Local-first music library",
      "Music search and queue management",
      "Shuffle playback and downloads",
      "Optional YouTube streaming",
      "No user accounts or dedicated application server",
    ],
    stack: [
      "Node.js",
      "React (Ink)",
      "SQLite",
      "mpv",
      "yt-dlp",
      "npm",
    ],
    repoUrl: "https://github.com/adarsh1912-dev/ymusix",
    liveUrl: "https://www.npmjs.com/package/ymusix",
    liveLabel: "npm package",
    preview: "terminal",
    previewAlt:
      "Conceptual preview of the Ymusix terminal player, showing the local library, selected track, playback progress, and keyboard controls.",
    layout: "split-left",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Engineering",
    items: [
      "Git",
      "GitHub",
      "JWT Authentication",
      "bcrypt",
      "API design",
      "Data Structures & Algorithms",
      "Problem-solving",
    ],
  },
  {
    label: "Applied AI",
    items: [
      "AI API integration",
      "AI-assisted application development",
    ],
  },
];

export const education = [
  {
    period: "2023 — 2027",
    location: "Kolkata, West Bengal, India",
    degree: "B.Tech in Information Technology",
    institution: "Narula Institute of Technology",
    detail:
      "Pursuing a Bachelor of Technology in Information Technology, with an interest in software engineering, full-stack development, databases, and applied AI.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
    ],
  },
];

export const experience = [];

// No formal software engineering experience yet.
// Personal projects demonstrate practical development work.

export const experienceNote =
  "I'm currently looking for my first software engineering internship, where I can contribute to real products, learn from experienced engineers, and grow through hands-on development.";

export const contact = {
  lead: "Have a problem worth",
  accent: "solving?",
  body:
    "I'm open to software engineering internships, student collaborations, and interesting projects involving full-stack development or applied AI. Feel free to reach out by email or connect with me on LinkedIn.",
};

export const projectNote =
  "Previews are conceptual studies, not live screenshots. Repositories are linked below, and Ymusix is published on npm.";
