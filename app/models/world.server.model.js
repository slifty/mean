'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * World Schema
 */
var WorldSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please give this world a name',
		trim: true
	},
 	description: {
		type: String,
		trim: true,
		default: ''
	},
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('World', WorldSchema);
