var express = require('express');
var data = require('../models/data.json')


// Here suppose the data is from the Memcache
module.exports = function(app) {
	var index =function (req, res) {
			res.render('index', {
				title: 'Home',
				data: data.sales,
			});
	};


//If use DataBast, for example, MongoDB, We can use,

	// var inndex = function (req, res) {
	// 	Data.find().sort({_id: -1}).exec(function (err, data){
	// 		if (err) {
	// 			data = [];
	// 		}

	// 		res.render('Index', {
	// 			title: 'Index',
	// 			data: data,
	// 		});
	// 	});
	// };



	var pageNotFound = function (req, res) {
    	res.redirect('/');
	};



	app.get('/', index);

	app.all('*', pageNotFound);
}
