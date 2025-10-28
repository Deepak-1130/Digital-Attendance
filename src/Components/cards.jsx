import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/cards.css";

const Cards = ({ paperDetails }) => {
    const navigate = useNavigate();
    const[paper , setPaper] =useState();
    const handleClickCards = () => {
        setPaper(paperDetails);
        fetch("https://")
        
        navigate("/markAttendance", { state: { paper: paperDetails } });
    };

    return (
        <div className="cards" onClick={handleClickCards}>
            <p>{paperDetails.year}</p>
            <p>{paperDetails.subjectcode}</p>
        </div>
    );
};

export default Cards;