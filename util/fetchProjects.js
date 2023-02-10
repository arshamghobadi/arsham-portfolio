import fetch from 'isomorphic-unfetch';

export const fetchProjectData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/projectsData`);

  const projects = await res.json();

  return projects;
};
