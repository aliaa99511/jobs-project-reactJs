import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Job() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    useEffect(() => {
        fetchJob();
    }, [id]);

    const fetchJob = async () => {
        const response = await axios.get(`https://skills-api-zeta.vercel.app/job/${id}`);
        setJob(response.data);
    };

    if (!job) return <p>Loading...</p>;

    return (
        <div>
            <h2>{job.title}</h2>
            <div className="skills">
                {job.skills.map((skill) => (
                    <p key={skill.id}>{skill.name}</p>
                ))}
            </div>
        </div>
    );
}

export default Job;
