import {findAllTuits, createTuit, deleteTuit, updateTuit} from "../tuits/tuits-dao.js";

const tuitsController = (app) => {
    app.post('/tuits', TcreateTuit);
    app.get('/tuits', TfindAllTuits);
    app.put('/tuits/:tid', TupdateTuit);
    app.delete('/tuits/:tid', TdeleteTuit);
}

const TcreateTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await createTuit(newTuit);

    res.json(insertedTuit);
}
const TfindAllTuits = async (req, res) => {
    const tuits = await findAllTuits();
    res.json(tuits);
}
const TupdateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await updateTuit(tuitIdToUpdate, updatedTuit);
    res.send(status);
}
const TdeleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await deleteTuit(tuitIdToDelete);
    res.send(status);
}

export default tuitsController;