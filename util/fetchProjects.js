export const fetchProjectData = async () => {
  const res = await fetch(`http://localhost:3000/api/projectData`);

  const projects = await res.json();

  return projects;
};
