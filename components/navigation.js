import React from 'react';
import Link from 'next/link';
import {Navbar, Nav, Form, Button} from 'react-bootstrap';

export default function Navigation() {
    return(
        <div>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <Navbar className="navbar navbar-light mt-2 mb-2 pl-0 pr-0" expand="lg" id="navbar">
        <Navbar.Brand className="navbar-brand"><Link href="/"><a><img className="logo" id="logo" src="/logo.svg"></img></a></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="ml-auto">
                <Link href='/experience'><a className="nav-link" id="nav-link">Experience</a></Link>
                <Link href='/testimonials'><a className="nav-link" id="nav-link">Testimonials</a></Link>
            </Nav>

            <Button className="contact-button" href="/contact" variant="dark">Contact Me</Button>
            <Form>
                {/* <a id="icon-link" href="https://www.facebook.com/sharer/sharer.php?u=http://www.lichtman2020.com/" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/facebook.svg"/></a>
                <a id="icon-link" href="https://www.twitter.com/lichtman2020" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/twitter.svg"/></a>
                <a id="icon-link" href="https://www.youtube.com/channel/UC8b0wJtvEf_beuc0K0WJ_IQ" target="_blank" rel="noopener noreferrer"><img id="icon" src="/icons/youtube.svg"/></a> */}
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </div>
    );
}