export const fetchExperience = async () => {
  const res = await fetch(`http://localhost:3000/api/get-exp`);

  const data = await res.json();

  const dataExperience = data;

  return dataExperience;
};
