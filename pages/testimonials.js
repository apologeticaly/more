import React from 'react';
import Head from 'next/head'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col, Card} from 'react-bootstrap';
import Navigation from '../components/navigation.js';
import Footer from '../components/footer.js';


export default function Testimonials() {
  return (
    <div>
        <Container  className="container-small" fluid="sm">
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,900;1,600;1,900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Navigation/>
        <h2 className="hero-text">Testimonials</h2>

        <p className="testimonial">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        <p className="testimonial-name">- John Brown (Athletic Student)</p>

        <p className="testimonial">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        <p className="testimonial-name">- John Brown (Boxing Client)</p>

        <p className="testimonial">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
        <p className="testimonial-name">- John Brown (Personal Client)</p>
        </Container>
        <Footer />
    </div>
  )
}