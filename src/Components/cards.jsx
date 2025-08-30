import React from "react";
import "../StyleSheets/cards.css";
const Cards = ({paperDetails}) => {
    return (
        <div className="cards">
            <p>{paperDetails.year}</p>
            <p>{paperDetails.subjectcode}</p>
        </div>
    )
}
export default Cards ;