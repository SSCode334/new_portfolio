export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlight: boolean;
  thumbnail: string;
};

export const projects: Project[] = [
  {
    title: "Neon Synth",
    slug: "neon-synth",
    shortDescription: "A WebGL-powered synthesizer with real-time audio visualization and 3D reactive graphics.",
    longDescription: "An immersive audio-visual experience combining Web Audio API with Three.js. Features include real-time frequency analysis, procedural geometry generation, and MIDI controller support. The interface draws inspiration from classic analog synthesizers with a modern cyberpunk aesthetic.",
    techStack: ["Three.js", "Web Audio API", "React", "TypeScript", "GLSL"],
    githubUrl: "https://github.com/YOUR_USERNAME/neon-synth",
    liveUrl: "https://neon-synth.demo",
    highlight: true,
    thumbnail: "/projects/neon-synth.png"
  },
  {
    title: "Particle Flow",
    slug: "particle-flow",
    shortDescription: "GPU-accelerated particle system with physics simulation and interactive controls.",
    longDescription: "A high-performance particle simulation running entirely on the GPU using WebGL compute shaders. Simulates up to 1 million particles with real-time physics, fluid dynamics, and user interaction through mouse/touch input.",
    techStack: ["WebGL", "GLSL", "JavaScript", "Canvas"],
    githubUrl: "https://github.com/YOUR_USERNAME/particle-flow",
    liveUrl: "https://particle-flow.demo",
    highlight: true,
    thumbnail: "/projects/particle-flow.png"
  },
  {
    title: "Void Dashboard",
    slug: "void-dashboard",
    shortDescription: "Real-time analytics dashboard with dark mode aesthetics and live data streaming.",
    longDescription: "A modern analytics platform featuring real-time data visualization, custom charting components, and a sophisticated dark theme. Built for high-frequency data updates with optimized rendering and smooth animations.",
    techStack: ["React", "D3.js", "Node.js", "WebSockets", "PostgreSQL"],
    githubUrl: "https://github.com/YOUR_USERNAME/void-dashboard",
    highlight: false,
    thumbnail: "/projects/void-dashboard.png"
  },
  {
    title: "Chromatic",
    slug: "chromatic",
    shortDescription: "AI-powered color palette generator with interactive 3D color space visualization.",
    longDescription: "An experimental tool that uses machine learning to generate harmonious color palettes. Features an interactive 3D color space viewer, export to various formats, and accessibility contrast checking.",
    techStack: ["React", "Three.js", "TensorFlow.js", "TypeScript"],
    githubUrl: "https://github.com/YOUR_USERNAME/chromatic",
    liveUrl: "https://chromatic.demo",
    highlight: true,
    thumbnail: "/projects/chromatic.png"
  },
  {
    title: "Echo Chamber",
    slug: "echo-chamber",
    shortDescription: "Real-time voice chat with spatial audio and virtual environment.",
    longDescription: "A spatial audio chat application where users navigate a virtual 2D space. Voice volume and panning change based on proximity to other users. Features include custom room creation, avatars, and ambient soundscapes.",
    techStack: ["WebRTC", "React", "Node.js", "Socket.io", "Web Audio API"],
    githubUrl: "https://github.com/YOUR_USERNAME/echo-chamber",
    highlight: false,
    thumbnail: "/projects/echo-chamber.png"
  },
  {
    title: "Glitch Garden",
    slug: "glitch-garden",
    shortDescription: "Generative art platform with real-time glitch effects and NFT minting.",
    longDescription: "A creative platform for generating unique digital art through various glitch algorithms. Users can manipulate images in real-time, save creations, and mint as NFTs. Features pixel sorting, data moshing, and custom shader effects.",
    techStack: ["Canvas", "React", "GLSL", "Ethereum", "IPFS"],
    liveUrl: "https://glitch-garden.demo",
    highlight: false,
    thumbnail: "/projects/glitch-garden.png"
  }
];
