// export default async function handler(req, res) {
//   const response = await fetch(`${process.env.BASE_URL}/data`);
//   const json = await response.json();
//   const data = json;
//   res.status(200).json({ data });
// }
export default async function handler(req, res) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/data`);
    const json = await response.json();
    const data = json;
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
