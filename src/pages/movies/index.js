"use client";

import SearchBar from '@/src/components/Common/SearchBar';
import List from '@/src/components/Movies/List';
import { MoviesProvider, useMovies } from '@/src/contexts/MoviesContext';
import { composeProviders } from '@/src/utility/composeProviders';
import React, { useState } from 'react';

export default function MoviesPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const Providers = composeProviders([
        { Provider: MoviesProvider, props: { term: searchTerm } },
    ]);

    return (
        <Providers>
            <MoviesListPageContent setSearchTerm={setSearchTerm} />
        </Providers>
    );
}

function MoviesListPageContent({ setSearchTerm }) {
    const { loading, error, moviesData } = useMovies();

    if (loading) {
        return <div>Loading movies data...</div>;
    }

    if (error) {
        return <div>error movies data...</div>;
    }

    return (
        <>
            <SearchBar onSearch={(term) => setSearchTerm(term)} />
            {moviesData && <List data={moviesData} />}
        </>
    );
}
