import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const SubjectsCard = ({ subject }) => {
    const { _id, title, img, description, price } = subject

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Button className='w-100' variant="outline-dark">
                        <Link className='text-decoration-none' to={`/coursesDetails/${_id}`}>Course Details</Link>
                    </Button>
                    <Button className='mt-2 w-100' variant="outline-success">Get premium access</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SubjectsCard;