import React from 'react';
import 'semantic-ui-css/semantic.css'
import Header from '../components/header';
import { Container } from 'semantic-ui-react'

const HomePage = () => {
 return (
    <React.Fragment>
      <Container style={{padding:50}}>
        <Header></Header>
      </Container>
    </React.Fragment>
 );
}

export default HomePage;