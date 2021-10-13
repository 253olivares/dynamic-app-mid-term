import React from'react';
import 'semantic-ui-css/semantic.css'
import Header from '../components/header';
import { Container,Form,Input,TextArea,Button } from 'semantic-ui-react'
//import {Link} from 'gatsby';
 
const ContactPage = () => {

    function consoleLogChange(e, {}){

    }

    function clearForm(){
        
    }


  return(
    <React.Fragment>
        <React.Fragment>
      <Container style={{padding:50}}>
        <Header></Header>
        <h1>Contact Us!</h1>
        <Form>
            <Form.Field
            control={Input}
            label="Full Name:"
            placeholder="Enter your full name..."
            name="name"
            >

            </Form.Field>
            <Form.Field
            control={Input}
            label="Contact Email:"
            placeholder="Enter the best email to contact you with..."
            name="email"
            >
                
            </Form.Field>
            <Form.Field
            control={TextArea}
            label="Message:"
            placeholder="Enter your message..."
            name="message"
            >
                
            </Form.Field>
            <Button.Group>
                <Button color="green" onClick={clearForm}>Send Message</Button>
            </Button.Group>
        </Form>
      </Container>
    </React.Fragment>
    </React.Fragment>)
}; 

 export default ContactPage;