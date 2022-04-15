import people from './users.js';

let users = people;
const userController = (app) => {
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:uid', findUserById);
}
const findAllUsers = (req, res) => {
    res.json(users);
}
const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users.find(u => u._id === userId);
    res.json(user);
}
export default userController;