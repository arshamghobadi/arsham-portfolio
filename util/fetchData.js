export const fetchData = async () => {
  const res = await fetch(`http://localhost:3000/api/data`);

  const dataSkill = await res.json();

  return dataSkill;
};
