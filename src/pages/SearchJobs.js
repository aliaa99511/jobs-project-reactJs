import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import JobCard from '../components/JobCard';

function SearchJobs() {
    const [jobs, setJobs] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        fetchSearchResults();
    }, [query]);

    const fetchSearchResults = async () => {
        const response = await axios.get(`https://skills-api-zeta.vercel.app/jobs/search?query=${query}`);
        setJobs(response.data.jobs);
    };

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <div className="job-list">
                {jobs.length > 0 ? (
                    jobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default SearchJobs;
