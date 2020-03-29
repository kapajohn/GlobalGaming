import React, {Component} from 'react';
import {Container, Row} from 'react-bootstrap';
import Movie from './Movie';
import Header from './Header';

class App extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        // GET request using fetch with set headers
        const headers = { 
            'Content-Type': 'application/json',
    }

        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=df85f4d2d875a3324fe37079e32802b2', { headers, method: "GET" })
            .then(response => response.json())
            .then(data => this.setState({ results: data.results, loading: false }))
            .catch((error) => {
                console.log(error);
              });
    }
    state = { loading: true };
    render() {
        if (this.state.loading) return <div>loading</div>;
        return <div>
        <Header></Header>
        <Container>
            <h2 className="text-secondary mt-4">Popular on Proteus</h2>
            <Row className="my-2">
                <Movie results={this.state.results}></Movie>
            </Row>
        </Container></div>
        
        }
    
}


export default App