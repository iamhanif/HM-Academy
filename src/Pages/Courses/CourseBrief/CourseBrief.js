import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseBrief = () => {
    const brief = useLoaderData()
    return (
        <div>
            <p>{brief.description}</p>
        </div>
    );
};

export default CourseBrief;