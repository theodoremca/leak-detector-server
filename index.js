
const express = require("express");
// const bodyParser = require('body-parser');
const {addLeakData} = require("./functions/leak");
// const cookieParser = require("cookie-parser")();
// const cors = require("cors")({origin: true});
const app = express();



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
const port = process.env.PORT || 4000;
app.listen(port);
// exports.helloWorld = functions.https.onRequest(app);
