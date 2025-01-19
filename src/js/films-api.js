import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2QwMDIwNTkyMWQ2ODM3YTZiZmMzMmIyM2ZkMDk1NCIsIm5iZiI6MTczNjgwOTMwOC43NjE5OTk4LCJzdWIiOiI2Nzg1OWI1Yzk0ZmM4N2VmNDg3YjRjMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.W18AQMiTN4bUjKK0Y90v1y5Lel66UCXjPSzlKtRbCV0";

export const getFilmsTrendingAccess = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      accept: "application/json",
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilmsDetails = async (id, codeWord = "") => {
  const url = `https://api.themoviedb.org/3/movie/${id}${codeWord}?language=en-US`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);

    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getFilmsSearch = async (query, page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
  const params = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  };
  try {
    const respons = await axios.get(url, params);
    return respons.data;
  } catch (error) {
    console.log(error.message);
  }
};
