'use strict';

angular.module('core').directive('wbContent', [function() {
	return {
		restrict: 'A',
		transclude: true,
		replace: true,
		templateUrl: 'modules/core/directives/templates/wb-content.client.template.html'
	};
}]);
