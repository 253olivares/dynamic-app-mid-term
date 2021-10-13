import React from 'react';
import 'semantic-ui-css/semantic.css'
import Header from '../components/header';
import { Container, Segment, Button } from 'semantic-ui-react'

const HomePage = () => {
 return (
    <React.Fragment>
      <Container style={{padding:50}}>
        <Header></Header>
        <Segment textAlign="center">
          <h1 style={{marginBottom:20}}> HOME </h1>
          <p style={{marginBottom:20}}> Some random text that needs not readen.</p>
          <Button color="green" style={{marginBottom:20}}>Join Now!</Button>
        </Segment>
      </Container>
    </React.Fragment>
 );
}

export default HomePage;