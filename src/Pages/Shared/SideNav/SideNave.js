import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNave = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courseDetails/')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h3>All Courses</h3>
            <div>
                {
                    courses.map(course => <p key={course._id}>
                        <Link to={`/coursesDetails/${course._id}`}>{course.title}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNave;