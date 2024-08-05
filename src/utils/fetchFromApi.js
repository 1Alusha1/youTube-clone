import axios from "axios";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(
    `https://youtube-v31.p.rapidapi.com/${url}`,
    options
  );

  return data;
};
// ${BASE_URL}/${url}
