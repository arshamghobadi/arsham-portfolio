import fetch from 'isomorphic-unfetch';
export const fetchData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/data`);

  const dataSkill = await res.json();

  return dataSkill;
};
