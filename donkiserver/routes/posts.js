//https://5000-aqua-cobra-hevw6c7n.ws-us03.gitpod.io/posts
import express, { response } from 'express';
import {getPost, createPost } from '../controllers/post.js'

const router = express.Router();

router.get('/',getPost);
router.post('/',createPost);
export default router;
