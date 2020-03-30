import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';

 const Movies = (props) =>  {
     console.log(props);
     const url_path = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

    return props.results.map(result => <Col key={result.id} xl={4} lg={6} className="d-flex">
        <div className="shadow bg-white rounded p-3 my-4">
            <img src={url_path+result.poster_path} className="img-fluid" alt={result.title}/>
            <h5 className="text-info mt-3">{result.title}</h5>
            <small><strong>Release date</strong></small>
            <p>{moment(result.release_date).format('DD MMMM, YYYY')}</p>
            <Link className="bg-info text-light pt-1 pb-1 pl-2 pr-2" to={{
                pathname: 'movie/' + result.title.replace(/[^A-Z0-9]+/ig, "-").toLowerCase(),
                state: {
                    movies: true,
                    data: result
                }
            }}  >more...</Link>
            </div>
        </Col>)
    }

export default Movies