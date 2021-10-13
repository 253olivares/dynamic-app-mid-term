import React from'react';
import 'semantic-ui-css/semantic.css'
import Header from '../components/header';
import { Container, Card, Rating, Icon, Grid,List } from 'semantic-ui-react'
//import {Link} from 'gatsby';
 
const GamesPage = () => {

    const games = [
        {
            name: "Tic-Tac-Toe",
            desc: "3 in a row",
            defRating: "2",
            maxRating: "5",
        },
        {
            name: "Checkers",
            desc: "Junping Race",
            defRating: "3",
            maxRating: "5",
        },
        {
            name: "Snakes & Ladders",
            desc: "Snake!",
            defRating: "4",
            maxRating: "5",
        },
        {
            name: "Yahtzee",
            desc: "Feeling Lucky?",
            defRating: "5",
            maxRating: "5",
        }
    ]

    const gameList = games.map((game, index)=>{
        return(
            <Card
            index={index}
            >
            <Card.Header> </Card.Header>   
            </Card>
        );
    });

  return(
    <React.Fragment>
        <React.Fragment>
      <Container style={{padding:50}}>
        <Header></Header>
        <h1>Games</h1>
        <Card.Group>

        </Card.Group>
      </Container>
    </React.Fragment>
    </React.Fragment>)
}; 

 export default GamesPage;