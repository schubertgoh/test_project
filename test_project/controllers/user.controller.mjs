import express from "express";
import db from "../db/connect.js";
import { ObjectId } from "mongodb";

const router = express.Router();


router.post("/", async (req, res) => {
    let collection = await db.collection("users");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// Get all users
router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({})
        .toArray();

    res.send(results).status(200);
});

// Get a single post
router.get("/get/:id", async (req, res) => {
    try {
        let collection = await db.collection("users");
        let query = { _id: new ObjectId(req.params.id) };
        let result = await collection.findOne(query);
        if (!result) res.send("Not found").status(404);
        else res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            "$set": {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }
        }

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});

router.put("/activate/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                active: true
            }
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);
        let response = `User with id:${req.params.id} was activated!`
        res.send(response).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});

router.put("/deactivate/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                active: false
            }
        };

        let collection = await db.collection("users");
        let result = await collection.updateOne(query, updates);
        let response = `User with id:${req.params.id} was deactivated!`
        res.send(response).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});

export default router;