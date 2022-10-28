import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SubjectsCard from '../../Shared/SubjectsCard/SubjectsCard';
import './Home.css'

const Home = () => {
    const sub = useLoaderData()
    return (
        <div>
            <div className='subjectCard'>
                {
                    sub.map(subject => <SubjectsCard
                        key={subject._id}
                        subject={subject}
                    ></SubjectsCard>)
                }

            </div>

        </div>
    );
};

export default Home;