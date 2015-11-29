'use strict';

angular.module('worlds').controller('WorldsController', ['$scope', '$stateParams', '$location', 'Authentication',
	function($scope, $stateParams, $location, Authentication) {
		$scope.authentication = Authentication;
		$scope.create = function() {
		};
	}]
);
