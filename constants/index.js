import { 
  RiReactjsLine, 
  RiTailwindCssLine, 
  RiNodejsLine, 
  RiNextjsLine 
} from "react-icons/ri";
import { 
  SiMongodb, 
  SiExpress, 
  SiMysql, 
  SiJavascript, 
  SiAppwrite, 
  SiFirebase 
} from "react-icons/si";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. With years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const PROJECTS = [
  {
    title: "CoderHaveli",
    image: "/projects/coderhaveli.png", // Placeholder path
    description: "A full-stack EdTech platform helping developers learn and master coding. Features interactive challenges, test cases, submission tracking, and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion", "JWT"],
    link: "https://coderhaveli.vercel.app/",
  },
  {
    title: "Blog Website",
    image: "/projects/blogapp.png",
    description: "A sleek and responsive blog platform with Appwrite backend. Features post creation, editing, and real-time updates.",
    technologies: ["React", "Tailwind CSS", "AppWrite", "React Hook Form"],
    link: "https://prashant-blog-app-appwrite.vercel.app/",
  },
  {
    title: "Nexo Vision",
    image: "/projects/nexovision.png",
    description: "An innovative facial recognition-based attendance solution that automated the entire attendance process, eliminating 90% of manual effort. Integrated collaborative features like shared notes, question paper repository, and seamless ERP connectivity.",
    technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "Face++ API", "Flutter"],
    link: "https://nexovision.vercel.app/",
  },
  {
    title: "Weather App",
    image: "/projects/weather.png",
    description: "Real-time weather application providing detailed forecasts based on user location.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://prashantsharma0512.github.io/WeatherAppJS/",
  },
];

export const SKILLS = [
  { name: "React", icon: RiReactjsLine, color: "text-cyan-400" },
  { name: "Next.js", icon: RiNextjsLine, color: "text-white" },
  { name: "Tailwind", icon: RiTailwindCssLine, color: "text-sky-400" },
  { name: "Node.js", icon: RiNodejsLine, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
];

export const CONTACT = {
  address: "BHU, Lanka, Varanasi 221005",
  phoneNo: "+91 8874687288",
  email: "prashantsharma0512@gmail.com",
};
