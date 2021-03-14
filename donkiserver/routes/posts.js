import express, { response } from 'express';

const router = express.Router();

router.get('/', (req,res)=> {
    res.send('this works?')
})

export default router;

//http://localhost:5000/posts