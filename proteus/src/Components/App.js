import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import Movies from './Movies';
import Header from './Header';
import MovieDetails from './MovieDetails';
import {Route} from 'react-router-dom';

class App extends Component {
    constructor() {
        super()
        this.state = {
            results: []
        }
    }
    // navigate() {
    //     this.setState({
    //         screen: 'movieDetails'
    //     })
    // }
    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 
            'Content-Type': 'application/json',
        }
        const url = new URL("https://api.themoviedb.org/3/trending/movie/week");
        url.searchParams.append('api_key', 'df85f4d2d875a3324fe37079e32802b2');

        fetch(url, { headers, method: "GET" })
            .then(response => response.json())
            .then(data => this.setState({ results: data.results, loading: false }))
            .catch((error) => {
                console.log(error);
            });
    }
    componentDidUpdate(prevProps, prevState) {
        // re-render UI
        console.log(prevProps.results);
        console.log(this.state);
    }
    state = { loading: true };
    render() {
        if (this.state.loading) return <div>loading</div>;
        return <div>
        <Header></Header>
        <Container>
           <Route exact path="/" render={() => (
                <div>
                <h2 className="text-secondary mt-4">Popular on Proteus</h2>
                <Row className="my-2">
                    <Movies  results={this.state.results}></Movies>
                </Row>
           </div> )}/>
           {/* <Route path="/movieDetails" component = {MovieDetails}/> */}
           <Route path="/movie" render={(props) => (
                <div>
                <MovieDetails {...props}/>
            </div> )}/>
            
        </Container></div>
        
        }
    
}


export default App