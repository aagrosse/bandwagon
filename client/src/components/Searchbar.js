import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../img/newlogoRev2.png'
import algoliasearch from 'algoliasearch/lite';
import { Component } from "react";
import { signout } from "./helper"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Redirect } from "react-router-dom";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import "../App.css"




const searchClient = algoliasearch('BY7RM0A5T2',
  'c84d9d93579f57a4c7c7123119c9f4b2');

class Search extends Component {

  state = {
    loggedIn: true
  }

  //clear coookie and localstorage data and signout user
  logOut = () => {
    signout(() => this.setState(() => ({
      loggedIn: false
    })));
    toast.success("Signed Out")
  }
  render() {
    // redirect user to log in page when logout is clicked
    if (this.state.loggedIn === false) {
      return (
        <React.Fragment>
          <Redirect to='/' />
          <ToastContainer />
        </React.Fragment>
      )
    }
    return (
      <InstantSearch searchClient={searchClient} indexName="songs">
        <Navbar bg="" variant="dark" expand="lg" className="mb-3 navbar">
        
          <Navbar.Brand href="#home" className="nlist">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              

            />{' '}
      bandwagon
      
    </Navbar.Brand>
    {/* <p style={{color: "white", width: "100%", marginLeft:"1.5%", fontWeight: "lighter", textAlign: "center", letterSpacing: "10px"}} className="d-flex justify-content-center align-items-center">where music lives</p> */}
        
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">

            
          </Navbar.Collapse>

          <Nav className="mr-auto">
            <Navbar.Collapse className="justify-content-end">
      
              <Nav className="mr-auto">
                <Nav.Link  ><i class="fas fa-coins fa-sm"></i>
    Tokens : {this.props.token}</Nav.Link>
                <Nav.Link href="/subscription" >Buy Tokens</Nav.Link>
                <Nav.Link href="#link" onClick={() => this.logOut()}>Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Navbar>
        <Configure hitsPerPage={0} />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    )
  }
};

function Hit(props) {
  // console.log(props)
  return (


    <div className="hit-container">
      <img src={props.hit.image} style={{ maxWidth: "100%" }} alt=""/>

      <div className="hit-price"  >{props.hit.artist}</div>
      <div className="hit-price"  >{props.hit.song}</div>
    </div>

  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Search;





