import React from 'react';
import Photo from './Photo';
import {Row} from 'react-bootstrap';


function Photowall(props) {
    return <Row>
    { props.posts.map( (post, index) => <Photo onRemovePhoto = {props.onRemovePhoto} key={index} post = {post}/>)}
 </Row>
}

 export default Photowall