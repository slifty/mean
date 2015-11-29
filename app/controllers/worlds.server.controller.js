'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	World = mongoose.model('World'),
	_ = require('lodash');

/**
 * Create a world
 */
exports.create = function(req, res) {
	var world = new World(req.body);
	world.user = req.user;

	world.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(world);
		}
	});
};

/**
 * Show the current world
 */
exports.read = function(req, res) {
	res.json(req.world);
};

/**
 * Update a world
 */
exports.update = function(req, res) {
	var world = req.world;

	world = _.extend(world, req.body);

	world.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(world);
		}
	});
};

/**
 * Delete an article
 */
exports.delete = function(req, res) {
	var world = req.world;

	world.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(world);
		}
	});
};

/**
 * List of Worlds
 */
exports.list = function(req, res) {
	World.find().sort('-created').exec(function(err, worlds) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(worlds);
		}
	});
};

/**
 * Express middleware
 */
exports.worldById = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'World is invalid'
		});
	}

	World.findById(id).exec(function(err, world) {
		if (err) return next(err);
		if (!world) {
			return res.status(404).send({
  				message: 'World not found'
  			});
		}
		req.world = world;
		next();
	});
};
