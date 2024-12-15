"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchMoviesData } from '../services/movieService';

const MoviesContext = createContext();

export const MoviesProvider = ({ children, term }) => {
    const [moviesData, setMoviesData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMoviesData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchMoviesData(term);
                setMoviesData(data);
            } catch (err) {
                setError(err.message || "An error occurred while fetching data.");
            } finally {
                setLoading(false);
            }
        };

        if (term) {
            loadMoviesData();
        }
    }, [term]);

    return (
        <MoviesContext.Provider value={{ moviesData, term, loading, error }}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => {
    const context = useContext(MoviesContext);
    if (!context) {
        throw new Error("useMovies must be used within a MoviesProvider");
    }
    return context;
};