// import fetch from 'isomorphic-unfetch';
// export const fetchExperience = async () => {
//   const res = await fetch(`http://localhost:3000/api/get-exp`);

//   const dataExperience = await res.json();

//   return dataExperience;
// };
import fetch from 'isomorphic-unfetch';

export const fetchExperience = async () => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/data-exp`);
    const dataExperience = await res.json();
    return dataExperience;
  } catch (error) {
    console.error(error);
    return [];
  }
};
