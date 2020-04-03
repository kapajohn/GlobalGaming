import Main from './Main';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


function mapStateToProps(state) {
    console.log(state, 'STATE babe');
    // We have to declare each reducer
    return {
        popular: state.popularMovies,
        results: state.results
    }

}

const App = withRouter(connect(mapStateToProps)(Main))
export default App