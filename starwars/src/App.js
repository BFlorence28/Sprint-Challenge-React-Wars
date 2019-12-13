import React from 'react';
import './App.css';
import {useState, useEffect} from "react";
import Cards from "./components/card";
import styled from "styled-components";
import axios from "axios";
import "./components/StarWars.css";
// import Title from "./components/card";


const Container = styled.div`
  width: 75%;
  border: 5px solid black;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  background-color: rgb(0, 0, 0, 0.4);
`;

const Title = styled.h1`
    text-align: center;
    color: palevioletred;
    margin: auto 300px ;
    padding: 20px;
    text-decoration: underline;
  `;



const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.co/api/people/")
        .then(res => {
          setState(res.data.results);
        })
        .catch(error => console.log("Error message", error));
    };

    fetchData();
  }, []);

  state.map(value => console.log(value));

  return (
    <div>
      <Title>
        <h1 className="Header">React Wars</h1>
      </Title>
        <div className="App">
          <Container>
            {state.map(value => {
              return <Cards value={value} />;
            })}
          </Container>
      </div>
    </div>
  );
};

export default App;


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.