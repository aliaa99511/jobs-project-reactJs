import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBox.css';

function SearchBox() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate();

    const fetchSuggestions = debounce(async (searchTerm) => {
        if (searchTerm.length >= 3) {
            const response = await axios.get(`https://skills-api-zeta.vercel.app/jobs/search?query=${searchTerm}`);
            setSuggestions(response.data);
        } else {
            setSuggestions([]);
        }
    }, 300);

    useEffect(() => {
        fetchSuggestions(query);
    }, [query]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSuggestionClick = (suggestion) => {
        navigate(`/jobs/search?query=${suggestion}`);
    };

    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Search jobs..."
                value={query}
                onChange={handleInputChange}
            />
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((job, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(job.title)}>
                            {job.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBox;
