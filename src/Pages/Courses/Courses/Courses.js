import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const subjects = useLoaderData()
    return (
        <div>
            <h3>All courses details here {subjects.length}</h3>
        </div>
    );
};

export default Courses;