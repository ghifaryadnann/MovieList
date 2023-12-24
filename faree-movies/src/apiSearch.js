import axios from "axios";

export const searchMoviesFilm = async (query) => {
    const url = `${import.meta.env.VITE_BASE_URL}/search/movie?query=${query}&page=1&api_key=${import.meta.env.VITE_APIKEY}`
    const response = await axios.get(url)
    return response.data
  }