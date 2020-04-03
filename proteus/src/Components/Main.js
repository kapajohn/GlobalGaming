import React, {Component} from 'react';
import {Container, Row, DropdownButton, ButtonGroup, Dropdown, Col} from 'react-bootstrap';
import Movies from './Movies';
import Header from './Header';
import MovieDetails from './MovieDetails';
import {Route} from 'react-router-dom';
import SearchResults from './SearchResults';



class Main extends Component {
    constructor() {
        super()
    }

    
    
    componentDidMount() {
        // GET popular movies
       // this.setState({ loading: true });

    }
    componentDidUpdate(prevProps, prevState) {
        // re-render UI
        console.log(prevProps);
        console.log(prevState);
    }


    render() {
        console.log(this.props.popular)
        if (!this.props.popular) return <div className="profile-main-loader">
                                            <div className="loader">
                                            <svg className="circular-loader"viewBox="25 25 50 50" >
                                                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="2" />
                                            </svg>
                                            </div>
                                        </div>;
        return <div>
        <Header></Header>
        <Container>
           <Route exact path="/" render={() => (
                <div>
                <h2 className="text-secondary mt-4">Popular on Proteus</h2>
                {this.props.popular? <Row>
                                                <Col className="d-flex justify-content-end" xs={12}>
                                                <div><strong className="pr-2">Filter by:</strong>
                                                {[DropdownButton].map((DropdownType, idx) => (
                                                <>
                                                    <DropdownType
                                                    as={ButtonGroup}
                                                    key={idx}
                                                    id={`dropdown-button-drop-${idx}`}
                                                    size="sm"
                                                    variant="secondary"
                                                    title="genre"
                                                    >
                                                    <Dropdown.Item key="1"  eventKey="1">Action</Dropdown.Item>
                                                    <Dropdown.Item key="2" eventKey="2">Comedy</Dropdown.Item>
                                                    <Dropdown.Item key="3" eventKey="3">Drama</Dropdown.Item>                                                    
                                                    </DropdownType>{' '}
                                                </>
                                                ))}
                                                </div>
                                                </Col>
                                            </Row> : null}
                <Row className="my-2">
                    <Movies  popular={this.props.popular}></Movies>
                </Row>
           </div> )}/>
           {/* <Route path="/movieDetails" component = {MovieDetails}/> */}
           <Route path="/movie" render={(props) => (
                <div>
                <MovieDetails {...props}/>
            </div> )}/>

            <Route path="/search" render={() => (
                <div><SearchResults></SearchResults></div>
            )}/>
            
        </Container></div>
        
        }
    
}


export default Main