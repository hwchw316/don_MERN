import * as api from '../api';
// to import all everything from action as api


// Actions Creators - functions that returns actions
// function returns another function
// redux thunk returns dispatch 
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

// App.js  will go to posts reducers