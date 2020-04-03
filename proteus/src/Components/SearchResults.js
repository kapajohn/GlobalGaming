import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import Movies from './Movies';


class SearchResults extends Component {
constructor(props) {
  super(props);
}
render() {
  return(
      
    <Row className="mt-4">
        <Col xl={12}>
            <p>&nbsp;</p>
        <h3 className="border-bottom">Search</h3>

            {this.props.results ? <p>Your search returned <strong>{this.props.results.length}</strong> results</p> : null }
        </Col>
        {this.props.results.length ? <Movies {...this.props}></Movies> : null}
     </Row>
  )
}}
function mapStateToProps(state) {
  return {
    results: state.results
  };
}
export default connect(mapStateToProps)(SearchResults);