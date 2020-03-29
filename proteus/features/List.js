import React, {Component} from 'react';

class List extends Component {
    render() {
      return (
        <ol>
          { this.props.listArray.map((listItem, index) => <li key = {index}>{listItem}</li>)}
        </ol>
      )
    }
  }
  export default List