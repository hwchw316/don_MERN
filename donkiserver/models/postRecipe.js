import mongoose from 'mongoose'

const postsSchema = mongoose.Schema({
    title: String,
    subtitle: String,
    imageurl: String,
    likeCount: {
        type: Number,
        default: 0
    },

    createddDate:{
        type: Date,
        default: new Date()
    },
});

const MessagePost = mongoose.model('MessagePost',postsSchema);

export default MessagePost;