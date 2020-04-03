import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';

 const Movies = (props) =>  {
     console.log(props);
     const URL_PATH = 'https://image.tmdb.org/t/p/w600_and_h600_bestv2';
     let data;
     if(props.results){
         data = props.results
     } else {
         data = props.popular
     }

    return data.map(pop => <Col key={pop.id} xl={4} lg={6} className="d-flex">
        <div className="shadow flex-fill bg-white rounded p-3 my-4">
            {pop.poster_path ? <img src={URL_PATH+pop.poster_path} className="img-fluid" alt={pop.title}/> : null}
            <h5 className="text-info mt-3">{pop.title}</h5>
            <small><strong>Release date</strong></small>
            <p>{moment(pop.release_date).format('DD MMMM, YYYY')}</p>
            <Link className="bg-info text-light pt-1 pb-1 pl-2 pr-2" to={{
                pathname: 'movie/' + pop.title.replace(/[^A-Z0-9]+/ig, "-").toLowerCase(),
                state: {
                    movies: true,
                    data: pop
                }
            }}  >more...</Link>
            </div>
        </Col>)
    }

export default Movies