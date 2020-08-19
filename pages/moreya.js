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

        <h2 className="hero-text">MORE Youth Athletes</h2>
        <p>Our mission, also known as our purpose, is what motivates and impels us to do everything within our power to maximize our human capital. We are successful in this by progressing, standing firm, and striving to be our authentic and genuine selves, every day of our lives.</p>

        <p>MORE Young Athletes' mission is to develop self-discipline, self-awareness, and self-confidence within our young student-athletes through the mental, emotional, and physical wellbeing derived from physical endeavour.</p>

        <h3>Self-Discipline</h3>
        <p>
We establish essential habits of self-mastery, self-control, and self-government that direct your young athlete towards a strong sense of focus and an inner desire to succeed.</p>

<p>With all that we are witnessing in the world right now, perhaps more than ever, our youth are in urgent need of routine and structure that will encourage habits of composure, poise, and balance. At MORE, we believe that the best solution for your youth, is physical fitness.</p>

<h3>Self-Awarness</h3>
<p>
We produce fundamental practices of self-consciousness, self-discovery, and self-actualization that guide your young athlete towards humility and the embracing of their mantle as tomorrow's leaders.</p>

<p>As we are all connected and collectively observing our current human experience, our youth are in absolute need of practices that will cultivate being present in the moment; not worrying about the future nor grieving over the past as well as self-analysis and introspection. At MORE, we believe that the best solution for your youth, is physical fitness.</p>

<h3>Self-Confidence</h3>
<p>
We evolve core patterns of self-esteem, self-assurance, and self-respect that equip your young athlete with the optimism to trust in their process (journey) and the resiliency to learn from their setbacks.</p>

<p>At this moment, many of our youth are losing hope, optimism, and buoyancy due to the effects of the pandemic coupled with the current unstable political climate. Our youth are in desperate need of customs and culture that inspire a sense of belonging, fellowship, interconnectedness. At MORE, we believe that the best solution for your youth, is physical fitness.</p>

<br></br><br></br>
<h2>What We Offer</h2><br></br>

<h3>Safety Before Anything (S.B.A.)</h3>
<p>
Due to the high impact of COVID-19, MORE is in full cooperation with and adherence to the laws in place regarding public health and safety. Because of the concerns for potential exposure to the virus, MORE will be implementing the following guidelines:

• Each athlete must pass the thermometer and pulse oxygen test prior to participating in any physical activity.<br></br>
• Pods (groups) will be precisely limited to 6 athletes.<br></br>
• All 6 athletes will be separated at a minimum of 6ft apart.<br></br>
• Due to the potential inability to breathe, masks are not mandatory but strongly encouraged and recommended.<br></br>
• Each athlete will participate in an initial physical assessment that will give the individual an understanding of where their physical journey is beginning and from this, chronicle their progress.<br></br><br></br>

<h3>Four Month Strength & Conditioning Program </h3>
The program will last for 4 months. Afterwards, the program will reset back to the first month upon which new pods of athletes will be accepted.<br></br>
• Month One - Bodyweight Opimization<br></br>
We will develop your young athlete's general and overall body strength through an intense and rigorous bodyweight only exercise routine. This serves as a preventative injury remedy which allows for your athlete to optimize their natural comprehensive strength before adding weighted resistance.<br></br>

• Month Two - Endurance
We will evolve your young athlete's overall bodyweight strength with a test of weighted exercises that are constructed to increase endurance. This month will be a curated program based on timed, high repetitions with low weight.<br></br>

• Month Three - Strength
We will build on your young athlete's endurance program as we transition into our weighted strength program. This month will be a curated program based on lower repetitions and heavier weight.<br></br>

• Month Four - Performance<br></br>

We will maximize on your young athlete's previous 3 months of training and will fuse this progress into a challenging and competitive month. In this final month, your young athlete will be able to showcase their new and improved athletic progress over a series of drills and activities. This month's program will be based upon exercises that promote your young athlete's speed, quickness, agility and explosive movements.<br></br>

</p>
        </Container>
        <Footer />
    </div>
  )
}