var express = require("express");
var app = express();
const axios = require("axios");
const db = require("./helper/db_connect")();
const JSON = require('circular-json');
var cors = require('cors');


app.use(cors({
  origin: '*'
}));

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
app.delete('/bildirim/:id', function (req, res) {
  const promise = deviceAlert.findByIdAndDelete(req.params.id);
  promise.then((bildirim) => {
    if (!bildirim) next({ message: "Bildirim Bulunamadı", code: 404 });
    res.json(bildirim);
  }).catch((err) => {
    res.json(err);
  })
})
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
app.delete('/battery/:id', function (req, res) {
  const promise = batteryAlert.findByIdAndDelete(req.params.id);
  promise.then((battery) => {
    if (!battery) next({ message: "Bildirim Bulunamadı", code: 404 });
    res.json(battery);
  }).catch((err) => {
    res.json(err);
  })
})

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
app.delete('/photos/:id', function (req, res) {
  const promise = alertFoto.findByIdAndDelete(req.params.id);
  promise.then((foto) => {
    if (!foto) next({ message: "Bildirim Bulunamadı", code: 404 });
    res.json(foto);
  }).catch((err) => {
    res.json(err);
  })
})

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
app.delete('/calls/:id', function (req, res) {
  const promise = callAlert.findByIdAndDelete(req.params.id);
  promise.then((call) => {
    if (!call) next({ message: "Bildirim Bulunamadı", code: 404 });
    res.json(call);
  }).catch((err) => {
    res.json(err);
  })
})
app.post("/test", function(req, res) {
  console.log("tested");
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running on port 4000");
});
