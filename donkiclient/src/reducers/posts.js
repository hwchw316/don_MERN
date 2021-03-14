import Posts from "../components/Posts/Posts";

export default (post = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
                return action.payload;
        case 'CREATE':
            return posts;
        default:
            return Posts;
    }
}