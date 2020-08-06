import React from 'react';
import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Navigation from '../components/navigation.js';
import Footer from '../components/footer.js';


export default function Home() {
  return (
    <div>
      <Container  className="container-small" fluid="sm">
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,600;1,900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Navigation/>
        <Row>
          <Col sm={6}>
            <h1 className="hero-text">I'm Muhammed Saifullah</h1>
            <p className="hero-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
               accusam et justo duo dolores et ea rebum.</p>
            <p className="hero-body">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            <img src="/img/signature.png"></img>
            <Row>
              <Col>
              <img className="icon" src="/icons/facebook.svg"></img>
              <img className="icon" src="/icons/instagram.svg"></img>
              <img className="icon" src="/icons/linkedin.svg"></img>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
            <div>
              <img className="bio-img" src="/img/bio.png"></img>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center mb-5">
          <h2 className="hero-text">Experience</h2>
          </Col>
          </Row>
        <Row>
          <Col className="mt-auto mb-auto" sm={4}><img className="experience-img" src="/img/empower.png"></img></Col>
          <Col className="mt-auto mb-auto" sm={4}><img className="experience-img" src="/img/sf.png"></img></Col>
          <Col className="mt-auto mb-auto" sm={4}><img className="experience-img" src="/img/uk.png"></img></Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center mb-5">
          <Button className="contact-button mt-5" href="/contact" variant="dark">Contact Me</Button>
          </Col>
          </Row>
        <Row>
          <Col className="d-flex justify-content-center">
          <h2 className="hero-text">Pricing</h2>
          </Col>
          </Row>
        <Row>
        <Col sm={4}>
        <Card className="text-center mt-3">
          <Card.Header className="card-trial">Featured</Card.Header>
          <Card.Body>
            <Card.Title>$250/session</Card.Title>
            <Card.Text>
            15min warmup <br/>
            45min workout
            </Card.Text>
            <Button className="contact-button" href="/contact" variant="dark">Contact Me</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={4}>
        <Card className="text-center mt-3">
          <Card.Header className="card-silver">Silver</Card.Header>
          <Card.Body>
            <Card.Title>$250/session</Card.Title>
            <Card.Text>
            15min warmup <br/>
            45min workout
            </Card.Text>
            <Button className="contact-button" href="/contact" variant="dark">Contact Me</Button>
          </Card.Body>
        </Card>
        </Col>

        <Col sm={4}>
        <Card className="text-center mt-3">
          <Card.Header className="card-gold">Gold</Card.Header>
          <Card.Body>
            <Card.Title>$250/session</Card.Title>
            <Card.Text>
            15min warmup <br/>
            45min workout
            </Card.Text>
            <Button className="contact-button" href="/contact" variant="dark">Contact Me</Button>
          </Card.Body>
        </Card>
        </Col>

        </Row>
      </Container>
      <Footer />
    </div>
  )
}
