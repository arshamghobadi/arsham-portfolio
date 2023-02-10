import fetch from 'isomorphic-unfetch';
export const fetchData = async () => {
  const res = await fetch('https://portfolio-second-omega.vercel.app/data');

  const dataSkill = await res.json();

  return dataSkill;
};
