const express = require("express");
const { travelModel } = require("../model/travelData.model");

const Router = express.Router();

Router.post("/postData", async (req, res) => {
  try {
    console.log(req.body);
    const newData = new travelModel(req.body);
    await newData.save();
    res.status(200).send(newData);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

Router.get("/retrieveData", async (req, res) => {
  try {
    const data = await travelModel.find();

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
Router.get("/filterDestination", async (req, res) => {
  try {
    const destination = req.query.destination;
    if (destination == "null") {
      const data = await travelModel.find();

      res.status(200).send(data);
    } else {
      const data = await travelModel.find({ destination: destination });

      res.status(200).send(data);
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
Router.get("/sortBudget", async (req, res) => {
  try {
    const sort = req.query.sort;
    const data = await travelModel.find().sort({ budgerPerPerson: sort });

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
Router.delete("/deleteData/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await travelModel.findByIdAndDelete(id);

    res.status(200).send({ mag: "Data Deleted" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { Router };
