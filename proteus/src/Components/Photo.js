import React from 'react';
import {Col} from 'react-bootstrap';


function Photo(props) {
    const post = props.post

    return <Col xl="4"><figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick ={() => {
                     props.onRemovePhoto(post) 
                     }}   >Remove</button>
            </div>
        </figure>
        </Col>
}


export default Photo