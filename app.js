const express = require("express");
const app = express();
const http = require("http");
const path = require('path');
const fs   = require("fs");
const url  = require('url');
let friges = [], gates = [], tvSets = [];

class TvSet {

	constructor(name, turnedOn){
		this.turnedOn = turnedOn;
		this.name = name;
	}

	turnOn(){
		this.turnedOn = true;
	}

	turnOff(){
		this.turnedOn = false;
	}
}

class Gates {

	constructor(name, opened){
		this.opened = opened;
		this.name = name;
	}

	open(){
		this.opened = true;
	}

	close(){
		this.opened = false;
	}
}

class Fridge {

	constructor(name, temperature){
		this.temperature = temperature;
		this.name = name;
	}

	set(tmp){
		this.temperature = tmp;
	}
}


app.set("view engine", "hbs");
app.get("/", (req, res) => {
	res.render("index.hbs",{
		friges: friges,
		gates: gates,
		tvSets : tvSets
	});
});

app.get("/frige", (req, res) => {
	res.render("frige.hbs");
});

app.get("/gates", (req, res) => {
	res.render("gate.hbs");
});

app.get("/tvSet", (req, res) => {
	res.render("tvSet.hbs");
});


app.listen(3000);
