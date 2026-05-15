// ============================================================
//  SADANAND KUMAR — Portfolio Data
// ============================================================

export const personalInfo = {
  name: "Sadanand Kumar",
  title: "AI & ML Engineer",
  tagline: "Building intelligent systems that learn, adapt, and scale beyond limits.",
  bio: "I'm a BTech Computer Science student specialising in AI & ML at Aditya College of Engineering & Technology, Kakinada (CGPA: 8.43). I build end-to-end ML systems — from fine-tuning YOLOv8 models at 92.3% mAP to architecting real-time RAG pipelines with sub-500ms response times. My work spans deep learning, computer vision, MLOps, full-stack web development, and blockchain smart contracts. I'm passionate about shipping production-grade AI that solves real problems, and I'm actively seeking opportunities to push those boundaries further.",
  email: "thesadanand.toponed0@gmail.com",
  phone: "+91 XXXX XXXX",
  github: "https://github.com/the-sadanand/",
  linkedin: "https://www.linkedin.com/in/sadanand-k7/",
  resumeUrl: "https://drive.google.com/file/d/1Okp5_g0rcBvG_4uM_QlI5Z8PTTCF3gjt/view?usp=drive_link",
  avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadanand&backgroundColor=0d1117",
  location: "Kakinada, Andhra Pradesh, India",
};

export const skills = [
  // AI / ML
  { name: "PyTorch",      icon: "🔥", category: "AI / ML" },
  { name: "TensorFlow",   icon: "🧠", category: "AI / ML" },
  { name: "YOLOv8",       icon: "👁️",  category: "AI / ML" },
  { name: "Scikit-Learn", icon: "📊", category: "AI / ML" },
  { name: "OpenCV",       icon: "📷", category: "AI / ML" },
  { name: "MLflow",       icon: "📈", category: "AI / ML" },
  { name: "HuggingFace",  icon: "🤗", category: "AI / ML" },
  { name: "Pandas",       icon: "🐼", category: "AI / ML" },
  { name: "NumPy",        icon: "🔢", category: "AI / ML" },
  // Languages & Frameworks
  { name: "Python",       icon: "🐍", category: "Languages" },
  { name: "C++ / C",      icon: "🔷", category: "Languages" },
  { name: "JavaScript",   icon: "🟨", category: "Languages" },
  { name: "React.js",     icon: "⚛️",  category: "Languages" },
  { name: "Next.js",      icon: "▲",  category: "Languages" },
  { name: "FastAPI",      icon: "⚡", category: "Languages" },
  { name: "HTML / CSS",   icon: "🌐", category: "Languages" },
  { name: "Solidity",     icon: "⛓️",  category: "Languages" },
  // Tools
  { name: "Docker",       icon: "🐳", category: "Tools" },
  { name: "Git / GitHub", icon: "🔀", category: "Tools" },
  { name: "ChromaDB",     icon: "🗄️",  category: "Tools" },
  { name: "Redis",        icon: "🟥", category: "Tools" },
  { name: "WebSocket",    icon: "🔌", category: "Tools" },
  { name: "Groq API",     icon: "🚀", category: "Tools" },
];

export const projects = [
  {
    id: 1,
    title: "RAG Intelligence",
    subtitle: "Real-Time Document Q&A System",
    description: "Architected a full-stack RAG system with decoupled Redis ingestion pipeline, enabling real-time document querying with streaming AI responses via custom WebSocket protocol with citations. Achieved sub-500ms TTFT using Groq LLM API with local sentence-transformer embeddings for 100% data privacy.",
    techStack: ["Python", "FastAPI", "WebSocket", "ChromaDB", "Redis", "Groq API", "React", "Docker"],
    githubUrl: "https://github.com/the-sadanand/rag-intelligence",
    liveUrl: "none",
    featured: true,
    year: "2026",
  },
  {
    id: 2,
    title: "Custom Object Detection",
    subtitle: "YOLOv8 MLOps Pipeline",
    description: "Fine-tuned YOLOv8 achieving 92.3% mAP on custom datasets. Built a production-ready FastAPI + Docker inference API backed by a full MLOps pipeline via MLflow for experiment tracking, model versioning, and deployment management.",
    techStack: ["YOLOv8", "PyTorch", "FastAPI", "Docker", "MLflow"],
    githubUrl: "https://github.com/the-sadanand/object-detection-yolov8",
    liveUrl: "none",
    featured: true,
    year: "2026",
  },
  {
    id: 3,
    title: "Movie Recommendation Engine",
    subtitle: "Hybrid Collaborative Filtering API",
    description: "Hybrid recommendation system combining Collaborative Filtering and Matrix Factorization, deployed as a containerized REST API. Evaluated with RMSE and precision@k metrics for rigorous performance benchmarking.",
    techStack: ["Scikit-Learn", "Surprise", "FastAPI", "Pandas", "Docker"],
    githubUrl: "https://github.com/the-sadanand/movie-recommendation-engine",
    liveUrl: "none",
    featured: false,
    year: "2026",
  },
  {
    id: 4,
    title: "NFT Launchpad",
    subtitle: "Merkle Tree Allowlist Smart Contracts",
    description: "ERC-721 smart contracts with Merkle Tree allowlist for gas-optimized minting on Ethereum. Built with OpenZeppelin standards and a comprehensive automated test suite using Hardhat.",
    techStack: ["Solidity", "Hardhat", "Next.js", "OpenZeppelin", "RainbowKit"],
    githubUrl: "https://github.com/the-sadanand/nft-launchpad",
    liveUrl: "none",
    featured: false,
    year: "2025",
  },
  {
    id: 5,
    title: "E-Commerce Price Tracker",
    subtitle: "ML-Powered Price Prediction",
    description: "Processed and visualised product pricing data across platforms. Trained ML models to predict future prices with full evaluation metrics (RMSE, MAE), helping users make smarter buying decisions.",
    techStack: ["Pandas", "Seaborn", "Matplotlib", "Scikit-Learn"],
    githubUrl: "https://github.com/the-sadanand/ecommerce-price-tracker",
    liveUrl: "none",
    featured: false,
    year: "2025",
  },
];

export const education = {
  degree: "Bachelor of Technology — Computer Science",
  specialisation: "AI & Machine Learning",
  institution: "Aditya College of Engineering & Technology",
  location: "Kakinada, Andhra Pradesh",
  duration: "Sep 2023 – Present",
  cgpa: "8.43",
};

export const certifications = [
  "Joy of Computing Using Python — NPTEL",
  "Decode with C++ — PW Skills",
  "Veda 2024 Coding Competition",
];

export const currentlyLearning = ["LLM Fine-tuning", "Kubernetes", "AWS SageMaker", "LangChain"];

export const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];
