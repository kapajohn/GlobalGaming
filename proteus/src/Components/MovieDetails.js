import React from 'react';
import { Row, Col } from 'react-bootstrap';


function MovieDetails(props) {
    const movie = props.location.state.data;
    const img_url = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
console.log();
        return (
        <div className="mt-4">
            <Row>
                <Col xl={6}>
                <img src={img_url + movie.poster_path} className="img-fluid" alt={movie.title}/>
                </Col>
                <Col xl={6}>
                    <h2 className="text-dark">{movie.title}</h2>
                    <p>{movie.overview}</p>
                </Col>
            </Row>
        </div>
        )
}

export default MovieDetails