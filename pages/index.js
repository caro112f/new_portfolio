import Head from 'next/head'
import Project from '../components/Project'
import AboutMe from '../components/sections/AboutMe';
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
        <AboutMe />
        <TechStack />
        <section id="projects" className="max-w-[1600px] m-auto md:py-10 py-6">
          {data.map((p) => (
            <article key={p.id}>
              <Project {...p} />
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

