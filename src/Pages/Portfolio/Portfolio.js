import React from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import FiveGuys from '../../images/Five-Guys.png';
import MovieDB from '../../images/Movie-Database.png';
import HomePage from '../../images/home-page.png';
import ViewTables from '../../images/view-tables.png'

export default function Portfolio() {
  return (
 
    <Container>
      <Row>
        <Col lg={6}>
      <Card>
        <Card.Img style={{}} variant="top" src={FiveGuys} />
        <Card.Body>
          <Card.Text>
           <a href="https://arcane-mesa-45752.herokuapp.com/">Welcome to Five Guys</a>       
          </Card.Text>
          <Card.Text>          
           <a href="https://github.com/jmobrien1976/Five-Guys">Repo Link</a>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={6}>
      <Card>
        <Card.Img variant="top" src={MovieDB} />
        <Card.Body>
          <Card.Text>
          <a href="https://wasim202.github.io/team-project-1/">Welcome to Movie Database</a>         
          </Card.Text>
          <Card.Text>
          <a href="https://github.com/wasim202/team-project-1">Repo Link</a>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={6}>
      <Card>
        <Card.Img variant="top" src={HomePage} />
        <Card.Body>
          <Card.Text>
          <a href="https://wasim202.github.io/quiz/">Welcome to Quiz Game</a>         
          </Card.Text>
          <Card.Text>        
          <a href="https://github.com/wasim202/quiz">Repo Link</a>
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      <Col lg={6}>
      <Card>
        <Card.Img variant="top" src={ViewTables} />
        <Card.Body>
          <Card.Text>
          <a href="https://github.com/wasim202/employee-tracker">Welcome to Tracking Employees System</a>       
          </Card.Text>
          <Card.Text>
          <a href="https://github.com/wasim202/employee-tracker">Repo Link</a> 
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>
    
    
  )
}
