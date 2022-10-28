import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { jsPDF } from "jspdf";
import { Button } from 'react-bootstrap';

const CourseBrief = () => {
    const doc = new jsPDF();
    const brief = useLoaderData()

    const handlePdf = () => {
        return doc.save("a4.pdf");
    }

    const { _id, img, title, price, description } = brief
    return (
        <div>
            <Button onClick={handlePdf}>Download PDF</Button>
            <h2>{title}</h2>
            <img src={img} alt="book image" />
            <p>Price: {price}</p>
            <p>Course id: {_id}</p>
            <p>{description}</p>
        </div>
    );
};

export default CourseBrief;