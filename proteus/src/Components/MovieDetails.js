import React from 'react';
import { Row, Col } from 'react-bootstrap';



function MovieDetails(props) {
    const movie = props.location.state.data;
    const IMG_URL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

console.log(props);
        return (
        <div className="mt-4">
            <Row>
                <Col xl={6}>
                <img src={IMG_URL + movie.poster_path} className="img-fluid" alt={movie.title}/>
                </Col>
                <Col xl={6}>
                <span className="btn btn-link text-info pl-0" onClick={() => {props.history.goBack()}}>Back</span>
                    <h2 className="text-dark">{movie.title}</h2>
                    <p>{movie.overview}</p>
                </Col>
            </Row>
            
        </div>
        )
}

export default MovieDetails