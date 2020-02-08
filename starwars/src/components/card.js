import React from "react";
import styled from "styled-components";

const BabyYodaCard = styled.div`
    border: 3px solid black;
    height: 200px;
    width: 49%;
    `;
// style above

    const Cards = props => {
        console.log("props", props.value);
        return (
            <BabyYodaCard>
                <h2>{props.value.name}</h2>
                <h4>
                    Birth year: {props.value.birth_year}, Gender: {props.value.gender}, Hair Color: {props.value.hair_color}
                </h4>
                <h3>Planet: {props.value.homeworld}</h3>
            </BabyYodaCard>
        );
    };

export default Cards;
