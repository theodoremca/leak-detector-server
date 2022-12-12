const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// admin.initializeApp();
const express = require("express");
// const bodyParser = require('body-parser');
const addLeakData = require("./leak");
// const cookieParser = require("cookie-parser")();
// const cors = require("cors")({origin: true});
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// app.use(cors);
// app.use(cookieParser);
app.use(express.json());
// app.use(cors());
// app.use(bodyParser.json());
// app.use(validateFirebaseIdToken);
app.get("/hello", (req, res) => {
  // @ts-ignore
  res.send("Hello");
});

app.post("/add", (req, res) => {
  // @ts-ignore
  res.send(req.body);
});

app.post("/addData", addLeakData);
// app.listen(4001);
exports.helloWorld = functions.https.onRequest(app);
