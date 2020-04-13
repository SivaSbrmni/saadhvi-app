var express = require("express");
var app = express();

// Simple routes

var server = app.listen(3000, function() {
  console.log("Node server is running..");
});

app.get("/api/transformer-data", (req, res) => {
  // res.set("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(manufacturingDetails));
});

app.get("/api/status", (req, res) => {
  // res.set("Content-Type", "application/json; charset=utf-8");
  res.send(JSON.stringify(statusArray));
});

const manufacturingDetails = {
  "Manufacturer Name": "Manufacturer1",
  "Transformer Location": "LOC1234567",
  "Transformer Sl No": "SN1234567",
  "Meter Number": "DBG12345",
  Section: "section3",
  "Sub Divition": "sub_div1234",
  Divition: "div1234",
  Circle: "div1234",
  Region: "region",
  Latitude: "13.2.356.52.235.6",
  Langitude: "132356522356"
};

const statusArray = [
  {
    imageUrl: "../../../../assets/hot-blue.png",
    status: [
      {
        name: "Loading %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Lorem %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Ipsum",
        color: "green",
        value: "0.00"
      },
      {
        name: "Content",
        color: "green",
        value: "0.00"
      }
    ]
  },
  {
    imageUrl: "../../../../assets/hot-blue.png",
    status: [
      {
        name: "Loading %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Lorem %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Ipsum",
        color: "green",
        value: "0.00"
      },
      {
        name: "Content",
        color: "red",
        value: "0.00"
      }
    ]
  },
  {
    imageUrl: "../../../../assets/hot.png",
    status: [
      {
        name: "Loading %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Lorem %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Ipsum",
        color: "red",
        value: "0.00"
      },
      {
        name: "Content",
        color: "green",
        value: "0.00"
      }
    ]
  },
  {
    imageUrl: "../../../../assets/hot-blue.png",
    status: [
      {
        name: "Loading %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Lorem %",
        color: "green",
        value: "0.00"
      },
      {
        name: "Ipsum",
        color: "green",
        value: "0.00"
      },
      {
        name: "Content",
        color: "green",
        value: "0.00"
      }
    ]
  }
];
