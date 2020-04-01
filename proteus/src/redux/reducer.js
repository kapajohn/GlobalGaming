import popular from '../data/popular'


const popularReducer = function populars(state = popular, action) {
    console.log(state);
    return state;
}

export default popularReducer