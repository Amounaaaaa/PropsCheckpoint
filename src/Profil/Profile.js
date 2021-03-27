import React from 'react';
import './Profil.css';
import {Navbar,Nav,FormControl,Button,Accordion,Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types';

function Profile (props) {
    
    return  <div className="body">
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Setting</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className="cardBody">  
     <h1> {props.fullName} <br/> {props.bio} <br/> {props.profession} <h2 className="img">{props.children}</h2> </h1>
      <button class="btn btn-danger" onClick={() => props.HandleName(props.fullName)}>
    Show My name !
    </button>
 
 </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
     
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
   
    </div>
   }
 // ********* Set default props********//
 Profile.defaultProps = {
    fullName: "im",
    bio:"b",
    profession:"prof"
   };
   //********  propTypes ********//
   Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string

  };

export default Profile
