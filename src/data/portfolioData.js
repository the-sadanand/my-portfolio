// src/data/portfolioData.js

export const personalInfo = {
  name: "Alex Johnson",
  title: "Full Stack Developer",
  tagline: "I build fast, beautiful, and accessible web experiences.",
  bio: "I'm a passionate full stack developer with a love for crafting clean, efficient code. I specialize in building modern web applications using React, Node.js, and cloud technologies. When I'm not coding, you'll find me exploring open-source projects or leveling up my design skills. I'm currently seeking exciting opportunities to work on products that make a real difference.",
  email: "alex@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "#",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
};

export const skills = [
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", icon: "🟨", category: "Frontend" },
  { name: "TypeScript", icon: "🔷", category: "Frontend" },
  { name: "HTML5", icon: "🌐", category: "Frontend" },
  { name: "CSS3", icon: "🎨", category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", category: "Frontend" },
  { name: "Node.js", icon: "🟩", category: "Backend" },
  { name: "Express.js", icon: "🚂", category: "Backend" },
  { name: "MongoDB", icon: "🍃", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", category: "Backend" },
  { name: "Git", icon: "🔀", category: "Tools" },
  { name: "Docker", icon: "🐳", category: "Tools" },
  { name: "Figma", icon: "🎭", category: "Tools" },
  { name: "VS Code", icon: "💻", category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "DevConnect",
    description:
      "A full-stack social platform for developers to share projects, collaborate, and network. Features real-time chat, post feeds, and GitHub integration.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/devconnect",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow",
    description:
      "A Kanban-style project management app with drag-and-drop boards, team collaboration features, and progress analytics dashboard.",
    techStack: ["React", "TypeScript", "PostgreSQL", "Express.js"],
    githubUrl: "https://github.com/yourusername/taskflow",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "WeatherNow",
    description:
      "A beautiful weather forecasting app with 7-day predictions, interactive maps, and location-based alerts using the OpenWeather API.",
    techStack: ["React", "OpenWeather API", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/yourusername/weathernow",
    liveUrl: "#",
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];