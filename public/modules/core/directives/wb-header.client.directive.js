'use strict';

angular.module('core').directive('wbHeader', [function() {
	return {
		restrict: 'A',
		transclude: true,
		replace: true,
		templateUrl: 'modules/core/directives/templates/wb-header.client.template.html'
	};
}]);
