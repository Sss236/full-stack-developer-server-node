import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js"
import mongoose from 'mongoose';

const CONNECTION_STRING = 'mongodb+srv://die:123@cluster0.6d4kb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(cors());
helloController(app);
userController(app);
tuitsController(app);
console.log("The server started.");
app.listen(process.env.PORT || 4000);