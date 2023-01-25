
export async function getProjectData() {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "cd0a31147d390f7b8babc77b352578",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        allProjects {
          date
          description
          id
          link
          skills
          title
          slug
          featuredImage {
            responsiveImage {
              alt
              height
              sizes
              src
              srcSet
              width
            }
          }
          gallery {
            responsiveImage {
              alt
              sizes
              src
              srcSet
              width
              height
            }
          }
        }
      }`,
    }),
  };
  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}

export async function getSlugData() {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "cd0a31147d390f7b8babc77b352578",
    },
    body: JSON.stringify({
      query: `query MyQuery {
        allProjects {
          slug
        }
      }`,
    }),
  };
  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}

export async function getSingleProjectData(slug) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "cd0a31147d390f7b8babc77b352578",
    },
    body: JSON.stringify({
      query: `query MyQuery {
  project(filter: {slug: {eq: "${slug}"}}) {
    title
    slug
    skills
    link
    githubLink
    priority
    id
    gallery {
      responsiveImage {
        width
        srcSet
        src
        sizes
        height
        alt
      }
    }
    featuredImage {
      responsiveImage {
        width
        srcSet
        src
        sizes
        height
        alt
      }
    }
    _updatedAt
    date
    description
  }
}`,
    }),
  };
  const res = await fetch("https://graphql.datocms.com/", options);
  const data = await res.json();
  return data;
}



