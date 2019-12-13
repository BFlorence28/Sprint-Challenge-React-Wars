import React from "react";
import styled from "styled-components";

const babyYodaCard = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
    height: 10rem;
    width: 100%;
    padding: 1.5rem;
    margin: 1rem;
    `;

    const Cards = props => {
        console.log("props", props.value);
        return (
            <babyYodaCard>
                <h2>{props.value.name}</h2>
                <h4>
                    Birth year: {props.value.birth_year}, Gender: {props.value.gender}, Hair Color: {props.value.hair_color}
                </h4>
            </babyYodaCard>
        );
    };

export default Cards;