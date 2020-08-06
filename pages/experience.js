import React from 'react';
import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col} from 'react-bootstrap';
import Navigation from '../components/navigation.js';


export default function Home() {
  return (
    <div>
      <Container  className="container-small" fluid="sm">
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,600;1,900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Navigation/>
        <h2 className="hero-text">Experience</h2>
        <Row className="mt-5">
          <Col sm={6}>
            <Row className="m-0">
            <p className="experience-title">Kinesiology, B.S.</p>
            <p className="experience-italics">University of Kentucky</p>
            </Row>
            <p className="hero-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
               accusam et justo duo dolores et ea rebum.</p>
            <p className="hero-body">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
          </Col>
          <Col sm={6}>
              <img className="experience-img" src="/img/uk.png"></img>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={6}>
            <Row className="m-0">
            <p className="experience-title">PT Certificate</p>
            <p className="experience-italics">University of Kentucky</p>
            </Row>
            <p className="hero-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
               accusam et justo duo dolores et ea rebum.</p>
            <p className="hero-body">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
          </Col>
          <Col sm={6}>
              <img className="experience-img" src="/img/uk.png"></img>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={6}>
            <Row className="m-0">
            <p className="experience-title">Personal Trainer</p>
            <p className="experience-italics">Empower Gym</p>
            </Row>
            <p className="hero-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
               accusam et justo duo dolores et ea rebum.</p>
            <p className="hero-body">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
          </Col>
          <Col sm={6}>
              <img className="experience-img" src="/img/empower.png"></img>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col sm={6}>
            <Row className="m-0">
            <p className="experience-title">Director of Innovative Exercise</p>
            <p className="experience-italics">SF 49ers</p>
            </Row>
            <p className="hero-body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
               invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
               accusam et justo duo dolores et ea rebum.</p>
            <p className="hero-body">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
          </Col>
          <Col sm={6}>
              <img className="experience-img" src="/img/sf.png"></img>
          </Col>
        </Row>

      </Container>
    </div>
  )
}
