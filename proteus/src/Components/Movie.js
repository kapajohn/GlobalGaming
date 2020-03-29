import React from 'react';
import {Col} from 'react-bootstrap';
import moment from 'moment';

 const Movie = (props) =>  {
     console.log(props);
     const url_path = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

    return props.results.map(result => <Col key={result.id} xl={4} lg={6} className="d-flex">
        <div className="shadow bg-white rounded p-3 my-4">
        <img src={url_path+result.poster_path} className="img-fluid"/>
        <h5 className="text-info mt-3">{result.title}</h5>
        <small><strong>Release date</strong></small>
            <p>{moment(result.release_date).format('DD MMMM, YYYY')}</p>
            </div>
        </Col>)
    }

export default Movie