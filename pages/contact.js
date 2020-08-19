import React from 'react';
import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Navigation from '../components/navigation.js';
import Footer from '../components/footer.js';


export default function Contact() {
  return (
    <div>
        <Container  className="container-small" fluid="sm">
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,600;1,900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Navigation/>

        <div class="row home-about">
    <div class="col-lg-5 p-0">
        <img class="project" src="../img/about.png"></img>
    </div>
    <div class="col-lg"></div>
    <div class="about-text col-lg-6 p-0">
      <br></br>
    <h2 className="hero-text">Let's Get In Touch</h2>

        <p>Phone Number: (510) 000 1231
        </p>

        <p>Email: johnbrown@gmail.com
        </p>
    
        <p>Feel free to contact me weekdays 9am-5pm PST.
        </p>
        <div class="row col">
            <a class="back-to-home" href="https://twitter.com/apologeticaly" target="_blank" rel="noopener noreferrer"><img class="icon" src="../icons/facebook.svg" alt=""></img></a>
            <a class="back-to-home" href="https://github.com/apologeticaly" target="_blank" rel="noopener noreferrer"><img class="icon" src="../icons/instagram.svg" alt=""></img></a>
            <a class="back-to-home" href="https://www.linkedin.com/in/msconstantino/" target="_blank" rel="noopener noreferrer"><img class="icon" src="../icons/linkedin.svg" alt=""></img></a>
        </div>
    </div>
    </div>

        </Container>
         <Footer />
    </div>
  )
}