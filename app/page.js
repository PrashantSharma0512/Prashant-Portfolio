import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import GithubStats from "@/components/GithubStats";
import Terminal from "@/components/Terminal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Skills />
      <GithubStats />
      <Terminal />
      <Journey />
      <Projects />
      <Contact />
    </div>
  );
}
