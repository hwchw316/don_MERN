import MessagePost from '../models/postRecipe.js'

export const getPost = async (req,res) =>{
    try{
        const MessagePost =  await MessagePost.find();

        res.status(200).json(MessagePost);
    } catch (error){
        res.status(404).json({ message : error.messsage });
    }
}

export const createPost = async (req,res) =>{
        const body = req.body;

        const newPost = new MessagePost(post);

        try{
            await newPost.save();

             res.status(201).json(newPost);

    } catch (error){
        res.status(409).json({ message : error.messsage });
    }
}
