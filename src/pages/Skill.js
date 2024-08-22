import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Skill() {
    const { id } = useParams();
    const [skill, setSkill] = useState(null);

    useEffect(() => {
        fetchSkill();
    }, [id]);

    const fetchSkill = async () => {
        const response = await axios.get(`https://skills-api-zeta.vercel.app/skill/${id}`);
        setSkill(response.data);
    };

    if (!skill) return <p>Loading...</p>;

    return (
        <div>
            <h2>{skill.name}</h2>
            <p>{skill.description}</p>
        </div>
    );
}

export default Skill;
