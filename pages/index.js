import Head from "next/head";
import About from '../components/About'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';
import Projects from '../components/Projects';
import { fetchProjects } from '../utils/fetchProject'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'
import { fetchPageInfo } from '../utils/fetchPageInfo'
export default function Home({pageInfo, projects, skills, socials}) {
    return (
         <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
         
          <NavBar socials={socials}/>
          
           
             <section id="hero" className="snap-center">
                <Hero pageInfo={pageInfo}/>
            </section>
             
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo}/> 
             </section> 
             
            <section id="skills" className="snap-center">
                <Skills skills={skills}/>
            </section>
            <section id="projects" className="snap-center">
                <Projects projects={projects}/>
            </section>
            <section id="contact" className="snap-center">
                <ContactMe />
            </section>  

           </div>
    )
    
}
export async function getStaticProps ()  {
    const pageInfo = await fetchPageInfo();
    const skills = await fetchSkills();
    const projects = await fetchProjects();
    const socials = await fetchSocials();
  
    return {
      props: {
        pageInfo,
        skills,
        projects,
        socials,
      },
  
      revalidate: 10,
    }
  }

