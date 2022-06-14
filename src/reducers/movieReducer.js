import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';
import { connect } from 'react-redux';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return state;
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        appTitle: state.appTitle
    }
}

// Use connect function and map state to props + pass in actions
export default connect(mapStateToProps, {}) (reducer);