//https://5000-aqua-cobra-hevw6c7n.ws-us03.gitpod.io/posts
import express, { response } from 'express';
import {getPost} from '../controllers/post.js'

const router = express.Router();

router.get('/',getPost);
export default router;
