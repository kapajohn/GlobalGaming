import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchResults} from "../redux/actions/index";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import {API_KEY} from '../constants/api_key';
import {Link} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
        searchTerm: ''
      }
    }
    search = () => {
      const apiURL = 'https://api.themoviedb.org/3/search/movie';
      let URL = `${apiURL}?api_key=${API_KEY}&query=${this.state.searchTerm}&page=1&include_adult=false`;
      fetch(URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        response.json().then((data) => {
          this.props.searchResults(data.results);
        })
      }).catch((error) => console.log(error));
    }
    handleChange(event) {
      let fleldVal = event.target.value;
      this.setState({ searchTerm: fleldVal})
    }
    render() {
      return <Navbar bg="proteus" expand="lg" variant="proteus" sticky="top">
      <Navbar.Brand href="#home">PROTEUS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">MOVIES</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl  type="text" name="searchTerm" 
          placeholder="Search for a movie" className="mr-sm-2" value={this.state.searchTerm} onChange={this.handleChange.bind(this)}/>
          <Link className="btn btn-info text-light" to="/search"  onClick={() => this.search()} variant="outline-info">Search</Link>
        </Form>
    </Navbar.Collapse>
  </Navbar>
    }
}

export default connect(null, {searchResults})(Header);