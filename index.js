var express = require("express");
var app = express();
const axios = require("axios");
const db = require("./helper/db_connect")();
const JSON = require('circular-json');

var alertFoto = require("./db/fotoAlert");
var deviceAlert = require("./db/deviceAlert");
var batteryAlert = require("./db/batteryAlert");
var callAlert = require("./db/callAlert");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
var dataMain = [];

app.get("/", (req, res) => {
  console.log("app is running");
  res.render("index");
});

app.post("/bildirim", function(req, res) {
  let newdeviceAlert = new deviceAlert({
    appName: req.body.appName,
    title: req.body.title,
    msg: req.body.msg,
    time: req.body.time
  });

  newdeviceAlert.save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});

app.get("/bildirim", function(req, res) {
  deviceAlert.find({}).then((data) => {
    res.send(data);
 }).catch((err) => {
   console.log(err);
 });
});

app.post("/battery", function(req, res) {
  let newbatteryAlert = new batteryAlert({
    powerSource: req.body.powerSource,
    batteryPercentage: req.body.batteryPercentage,
    occurredAt: req.body.occurredAt
  });

  newbatteryAlert.save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});

app.get("/battery", function(req, res) {
  batteryAlert.find({}).then((data) => {
    res.send(data);
 }).catch((err) => {
   console.log(err);
 });
});

app.post("/photos", function(req, res) {
  let newalertFoto = new alertFoto({
    photoUrl: req.body.photoUrl,
    publicPhotoUrl: req.body.publicPhotoUrl,
    takenDate: req.body.takenDate
  });

  newalertFoto.save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});

app.get("/photos", function (req, res) {
  alertFoto.find({}).then((data) => {
    res.send(data);
  }).catch((err) => {
    console.log(err);
  });
});

app.post("/calls", function(req, res) {
  let newcallAlert = new callAlert({
    contactName: req.body.contactName,
    occurredAt: req.body.occurredAt,
    toNumber: req.body.toNumber,
    callLength: req.body.callLength
  });

  newcallAlert.save((err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  });
});

app.get("/calls", function(req, res) {
  callAlert.find({}).then((data) => {
    res.send(data);
 }).catch((err) => {
   console.log(err);
 });
});

app.post("/test", function(req, res) {
  console.log("tested");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port 4000");
});
