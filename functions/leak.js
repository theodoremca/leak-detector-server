"use strict";

const firebase = require("./fbService");
require("firebase/firestore");
const firestore = firebase.firestore();


const addLeakData = (req, res) => {
  try {
    const data = req.body;
    console.log({data});
    // eslint-disable-next-line camelcase
    const readable_time = (new Date()).toISOString();
    // eslint-disable-next-line camelcase
    Object.assign(data, {readable_time});
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
