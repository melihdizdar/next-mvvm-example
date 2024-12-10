"use client"
import List from '@/src/components/Movies/List';
import { MoviesProvider, useMovies } from '@/src/contexts/MoviesContext';
import { composeProviders } from '@/src/utility/composeProviders';
import React from 'react';

export default function MoviesPage() {
    const AppProviders = composeProviders([
        MoviesProvider,
    ]);

    return (
        <AppProviders>
            <MoviesListPageContent />
        </AppProviders>
    );
}

function MoviesListPageContent() {
    const { loading, error, moviesData } = useMovies();

    if (loading) {
        return <div>Loading movies data...</div>;
    }

    if (error) {
        return <div>error movies data...</div>;
    }


    return (
        <>
            <List data={moviesData} />
        </>
    );
}