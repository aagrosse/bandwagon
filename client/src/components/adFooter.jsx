import React, { Component } from "react";
import { Container, Nav } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{ minHeight: "60px" }}>
        <Container fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="https://www.patreon.com/atventure">Donate</a>
              </li>

            </ul>
          </nav   >
          <Nav className="justify-content-end">
            <p className="copyright">
              &copy; {new Date().getFullYear()}{" "}
              <a href="#pablo">
                Bandwagon
            </a>
            , where music lives
          </p>
          </Nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
