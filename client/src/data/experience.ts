export type ExperienceType = "work" | "education";

export type ExperienceItem = {
  type: ExperienceType;
  roleOrDegree: string;
  companyOrSchool: string;
  location: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  technologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    type: "work",
    roleOrDegree: "Senior Frontend Engineer",
    companyOrSchool: "YOUR_COMPANY",
    location: "San Francisco, CA",
    startDate: "2022",
    endDate: "Present",
    description: "Leading frontend architecture for a next-gen creative tools platform. Building immersive 3D experiences and real-time collaboration features used by millions.",
    technologies: ["React", "Three.js", "TypeScript", "WebGL", "WebSockets"]
  },
  {
    type: "work",
    roleOrDegree: "Full Stack Developer",
    companyOrSchool: "YOUR_PREVIOUS_COMPANY",
    location: "New York, NY",
    startDate: "2020",
    endDate: "2022",
    description: "Developed interactive data visualization dashboards and experimental web experiences. Implemented real-time features handling 100k+ concurrent users.",
    technologies: ["React", "Node.js", "D3.js", "PostgreSQL", "Redis"]
  },
  {
    type: "work",
    roleOrDegree: "Creative Developer",
    companyOrSchool: "YOUR_AGENCY",
    location: "Los Angeles, CA",
    startDate: "2018",
    endDate: "2020",
    description: "Created award-winning interactive campaigns for global brands. Specialized in WebGL experiences and motion design for web.",
    technologies: ["JavaScript", "GSAP", "Canvas", "WebGL", "CSS3"]
  },
  {
    type: "education",
    roleOrDegree: "B.S. Computer Science",
    companyOrSchool: "YOUR_UNIVERSITY",
    location: "Boston, MA",
    startDate: "2014",
    endDate: "2018",
    description: "Focused on computer graphics, human-computer interaction, and creative computing. Graduated with honors and led the university's creative coding club.",
    technologies: ["C++", "Python", "OpenGL", "Machine Learning"]
  }
];
