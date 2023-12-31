import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A Brief Introduction ... 
            </h1>
            <p className="home-about-body">
              I'm originally from the Bay Area, but currently studying computer science at UCLA 🧸 
              <br />
              <br />I Enjoy: 
              
              
              <ul>
              <li>
                <p> Playing soccer ⚽ and ultimate frisbee 🥏 (we just won our IM tournament!) </p>
              </li>

              <li>
                <p> Hiking / taking photos of nature 📷 </p>
              </li>

              <li>
                <p> Solving chess puzzles♟️ and NYT's mini crosswords </p>
              </li>

              <li>
                <p> Listening to kpop 🎵 (mostly Twice, Le Sserafim, and Enhypen) </p>
              </li>

              {/* <li>
                <p> And meeting new people! </p>
              </li> */}
              </ul>
              
    
              <br />
              I also love coding in my free time!   I frequently participate in hackathons for fun and also recently began self-learning ML from online resources. Check out some of my <a href="/projects">projects</a> in the projects tab!
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
      
              <img src={myImg} className="img-fluid" alt="selfie" />
          
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              I love meeting new people, lets connect!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/larryz1230"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/larry-zhi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/larryz1230/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto: lzhi@g.ucla.edu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col> 
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
