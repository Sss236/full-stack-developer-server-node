import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    dislikes: Number,
    likes: Number,
    postedBy: {
    username: String
    }
}, {collection: 'tuits'});
export default schema;