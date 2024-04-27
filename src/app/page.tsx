import Contact from "@/components/ContactPage";
import Encryption from "@/components/Encryiption";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className=" flex flex-col gap-20 ">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
       
        
      </div>
    </main>
  );
}
