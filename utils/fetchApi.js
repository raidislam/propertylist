import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "d88feeb75fmshf6f51ccf7f63076p111f51jsn3fb0e2ed695d",
    },
  });
  return data;
};
