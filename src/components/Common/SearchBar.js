import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        onSearch(input);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search movies..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}