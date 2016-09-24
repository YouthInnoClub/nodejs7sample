//'use strict';
var express = require('express');
var app = express();

class Polygon {
	constructor(height, width) { //class constructor
		this.name = 'Polygon';
		this.height = height;
		this.width = width;
	}

	sayName() { //class method
		console.log('Hi, I am a', this.name + '.');
	}
}

class Square extends Polygon {
	constructor(length) {
		super(length, length); //call the parent method with super
		this.name = 'Square';
	}

	get area() { //calculated attribute getter
		return this.height * this.width;
	}
}

app.get('/', function(req, res) {	
	let s = new Square(8);
	s.sayName();
	console.log(s.area);
	res.send('Hello World! ' + ' area ' + s.area);
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});