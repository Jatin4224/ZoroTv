import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDNiYTI5OGI4ZjE3MmY2ZTlmNzEzNzc0NTk5OTNlOCIsIm5iZiI6MTcwNTUxNjI2Ni4yMDcsInN1YiI6IjY1YTgxY2VhOGNmY2M3MDEyOTE2ZThjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P0jjlwhQ8m6pjWlB3nwne7Ah_bLsQAEEqLzH8qPO1CM",
  },
});

export default instance;
