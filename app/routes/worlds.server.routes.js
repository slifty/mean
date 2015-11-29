'use strict';

/**
 * Module dependencies.
 */
var worlds = require('../../app/controllers/worlds.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/worlds')
		.get(worlds.list)
		.post(worlds.create);

	app.route('/worlds/:worldId')
		.get(worlds.read)
		.put(worlds.update)
		.delete(worlds.delete);

	// Finish by binding the article middleware
	app.param('worldId', worlds.worldById);
};
