// ============================================================================
//  EDIT ME — all real professional content lives in this one file.
//  Text in [square brackets] is an editable placeholder waiting for a real
//  value. Never replace a placeholder with an invented fact.
// ============================================================================

export const profile = {
  name: "Ravat Prince",
  role: "Game Developer & Frontend Developer",
  tagline: "Building practical projects across frontend and game development.",
  email: "[add your email address]",
  location: "Surat, Gujarat, India",
  education: "BCA — 3rd year",
};

export type Project = {
  title: string;
  status?: string;
  blurb: string;
  tags?: string[];
  image?: string;
  doodle?: "quill";
  note?: string;
};

/** Frontend development projects. */
export const frontendProjects: Project[] = [
  {
    title: "Personal Portfolio",
    blurb: "A personal portfolio presenting my frontend and game development work.",
  },
  {
    title: "SoulCare",
    blurb: "A mental health platform recognized with project certificates.",
  },
  {
    title: "Paste App",
    blurb: "A frontend development project.",
  },
  {
    title: "Razorpay Clone",
    blurb: "A frontend clone project.",
  },
  {
    title: "Leet-Metric",
    blurb: "A LeetCode metrics tracker.",
  },
  {
    title: "NESTORA",
    blurb: "A real estate portal.",
  },
];

/** Game development projects. */
export const gameProjects: Project[] = [
  {
    title: "The Last Escape",
    status: "in development",
    blurb: "A prison escape game built with Unity and C#. Basic gameplay is complete.",
    tags: ["Unity", "C#", "Gameplay scripting"],
    note: "gameplay screenshots and videos: [add when available]",
  },
];

/** Everything, in display order. */
export const projects: Project[] = [...frontendProjects, ...gameProjects];

/** The about-page journey — real stages, no invented dates. */
export const journey = [
  {
    label: "Now",
    title: "BCA, 3rd year",
    text: "Pursuing a BCA and building practical skills through projects.",
  },
  {
    label: "Frontend",
    title: "Frontend development projects",
    text: "Building practical work across a personal portfolio, mental health platform, paste app, Razorpay clone, metrics tracker and real estate portal.",
  },
  {
    label: "Gamedev",
    title: "The Last Escape",
    text: "Developing a prison escape game in Unity and C#. Basic gameplay is complete.",
  },
  {
    label: "Hackathons",
    title: "Participation and achievement",
    text: "Participated in Hackathon 2025; achievement details: [add details]. Secured 3rd rank in Hackathon 2026.",
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Git and GitHub"],
  },
  {
    title: "Game development",
    skills: ["Unity", "C#", "Gameplay scripting", "Game mechanics", "Inventory systems"],
  },
];

/** Education — the only experience shown; no invented employers or dates. */
export const education = {
  course: "BCA — Bachelor of Computer Applications",
  stage: "3rd year",
  // EDIT: add your college / university name
  place: "[your college name]",
  points: [
    "Studying for a Bachelor of Computer Applications.",
    "Building projects in frontend and game development.",
    "Developing The Last Escape in Unity and C#; basic gameplay is complete.",
    "Participating in hackathons.",
  ],
};

export const achievements: { year?: string; title: string; text: string }[] = [
  {
    year: "2026",
    title: "3rd rank — Hackathon 2026",
    text: "Secured 3rd rank in Hackathon 2026.",
  },
  {
    year: "2025",
    title: "Hackathon 2025",
    text: "Achievement details: [add details].",
  },
  {
    title: "SoulCare recognition",
    text: "SoulCare project recognition and certificates. Certificate details: [add details].",
  },
];
