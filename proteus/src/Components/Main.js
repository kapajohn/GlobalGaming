import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Movies from './Movies';
import Header from './Header';
import MovieDetails from './MovieDetails';
import {Route} from 'react-router-dom';
import SearchResults from './SearchResults';
import Select from 'react-select';

class Main extends Component {
    constructor() {
        super()
            
    }

    
    
    componentDidMount() {
        // TODO make it redux

    }
    componentDidUpdate(prevProps, prevState) {
        // re-render UI
    }
    logChange(val) {
        console.log( val.value);
        }
    
    render() {
        const options = [
            { value: '28', label: 'Action' },
            { value: '12', label: 'Adventure' },
            {value: '16', label: 'Animation'}
            ];
           
        console.log(this.props)
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
                                                <Col  xs={12}>
                                                
                                                <div className="d-flex align-items-center justify-content-end"><strong className="pr-2">Filter by:</strong>
                                                <Select className="proteus-select"
                                                    name="proteus-form-select"
                                                    placeholder="genre"
                                                    options={options}
                                                    onChange={this.logChange}
                                                    />
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