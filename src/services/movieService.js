import axios from "axios";

export const fetchMoviesData = async (term) => {
    const options = {
        method: 'GET',
        url: `https://moviesminidatabase.p.rapidapi.com/movie/imdb_id/byTitle/${term}/`,
        headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
            'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error fetching IMDB data:", error);
        throw new Error("Failed to fetch IMDB data.");
    }
};
