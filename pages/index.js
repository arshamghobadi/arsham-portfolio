import Head from 'next/head';
import Link from 'next/link';
import { HiArrowUpCircle } from 'react-icons/hi2';
import About from '../components/About';
import ContactME from '../components/ContactME';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { fetchData } from '../util/fetchData';
import { fetchExperience } from '../util/fetchExperience';
import { fetchProjectData } from '../util/fetchProjects';

export default function Home({ dataExp, data, projects }) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-smooth scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Arsham Ghobadi Protfolio</title>
        <meta name="description" content="Arsham Ghobadi Protfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="About" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience dataExp={dataExp} />
      </section>
      <section id="skills" className="snap-start">
        <Skills data={data} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <ContactME />
      </section>
      <footer className="sticky bottom-12 sm:bottom-5 z-0 ">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <HiArrowUpCircle className=" w-14 h-14  rounded-full cursor-pointer z-20" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const dataExp = await fetchExperience();
  const data = await fetchData();
  const projects = await fetchProjectData();

  if (!data && dataExp && projects) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      dataExp,
      data,
      projects,
    },
    revalidate: 60 * 60 * 60,
  };
}
