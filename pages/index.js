import Head from 'next/head'
import Project from '../components/Project'
import AboutMe from '../components/sections/AboutMe';
import SplashSection from '../components/sections/SplashSection';
import TechStack from '../components/sections/TechStack';
import { getProjectData } from '../queries';



export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Portfolio | Caroline Holm Nielsen</title>
        <meta name="description" content="Portfolio for multimedia designer and frontend developer Caroline Holm Nielsen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={"/logo-grey.svg"} />
      </Head>
      <main>
        <SplashSection />
        <AboutMe />
        <TechStack />
        <section id="projects" className="max-w-[1600px] m-auto py-10 pt-20 md:pt-32 bg-[#fefefe]">
          <h2 className="text-center pt-10">My projects</h2>
          <hr className=" w-60 md:w-96 m-auto border-rose-800 border-[1.5px] mb-10 md:mb-20 rounded"></hr>
          {data.map((p, index) => (
            <article key={p.id}>
              <Project {...p} index={index} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}


export async function getStaticProps() {
  const data = await getProjectData();

  return {
    props: {
      data: data.data.allProjects,
    },
  };
}

