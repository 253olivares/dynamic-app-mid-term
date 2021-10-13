import React from'react';
import 'semantic-ui-css/semantic.css'
import Header from '../components/header';
import { Container } from 'semantic-ui-react'
//import {Link} from 'gatsby';
 
const ContactPage = () => {
  return(
    <React.Fragment>
        <React.Fragment>
      <Container style={{padding:50}}>
        <Header></Header>
        <h1>Contact</h1>
      </Container>
    </React.Fragment>
    </React.Fragment>)
}; 

 export default ContactPage;