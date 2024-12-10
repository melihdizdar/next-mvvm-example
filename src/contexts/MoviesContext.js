import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchMoviesData } from "../services/movieService";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [moviesData, setMoviesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMoviesData = async () => {
            try {
                setLoading(true);
                const data = await fetchMoviesData();
                setMoviesData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadMoviesData();
    }, []);

    return (
        <MoviesContext.Provider value={{ moviesData, loading, error }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => useContext(MoviesContext);