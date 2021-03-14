import axios from 'axios';

const url = 'https://5000-aqua-cobra-hevw6c7n.ws-us03.gitpod.io/posts'

export const fetchPosts = () => axios.get(url);

