'use strict';

// Setting up route
angular.module('worlds').config(['$stateProvider',
	function($stateProvider) {
		// Worlds state routing
		$stateProvider.
		state('listWorlds', {
			url: '/worlds',
			templateUrl: 'modules/worlds/views/list-worlds.client.view.html'
		}).
		state('createWorld', {
			url: '/worlds/create',
			templateUrl: 'modules/worlds/views/create-world.client.view.html'
		}).
		state('editWorld', {
			url: '/world/:worldId',
			templateUrl: 'modules/worlds/views/edit-world.client.view.html'
		});
	}
]);
