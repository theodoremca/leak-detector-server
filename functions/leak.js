"use strict";

const firebase = require("./fbService");
// const Student = require("../models/student");
const firestore = firebase.firestore();


const addLeakData = (req, res) => {
  try {
    const data = req.body;
    firestore.collection("students").add(data)
        .then((d)=>res.send("Record saved successfully"));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const addLeakProd = (req, res) => {
  try {
    const data = req.body;
    const path = data.path;
    firestore.collection(path?path:"Data").add(data)
        .then((d)=>res.send("Record saved successfully"));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {addLeakData, addLeakProd};
