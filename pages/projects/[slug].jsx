import { getSlugData, getSingleProjectData } from "../../queries";
import SingleProject from "../../components/SingleProject";

export default function ProjektSingleview({data}) {
  return (
    <SingleProject {...data}/>
  )
}

export async function getStaticPaths() {
 
  const data = await getSlugData();
  const results = data.data.allProjects;

  return {
    paths: results.map((a) => {
      return { params: { slug: String(a.slug) } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {

  const slug = context.params.slug;
  const data = await getSingleProjectData(slug);

  return {
    props: {data: data.data.project}
  };
}
