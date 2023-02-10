import fetch from 'isomorphic-unfetch';

export const fetchProjectData = async () => {
  const res = await fetch(
    'https://portfolio-second-omega.vercel.app/projectsData'
  );

  const projects = await res.json();

  return projects;
};
