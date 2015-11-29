'use strict';

// Worlds service used for communicating with the articles REST endpoints
angular.module('worlds')

.factory('WorldResource', ['$resource',
	function($resource) {
		return $resource('worlds/:worldId', {
			worldId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
