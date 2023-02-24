import express from "express";
import db from "../db/connect.js";
import { ObjectId } from "mongodb";

const router = express.Router();


router.post("/", async (req, res) => {
    let collection = await db.collection("items");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

// Get all items
router.get("/", async (req, res) => {
    let collection = await db.collection("items");
    let results = await collection.find({})
        .toArray();

    res.send(results).status(200);
});

// Get a single post
router.get("/get/:id", async (req, res) => {
    try {
        let collection = await db.collection("items");
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
                desc: req.body.desc,
                code: req.body.code,
            }
        }

        let collection = await db.collection("items");
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});


// Delete an entry
router.delete("/delete/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        const collection = db.collection("items");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (e) {
        console.log(e)
        res.status(400).send("An error occured! Check logs!")
    }
});

export default router;