'use strict';

angular.module('app')

.controller('MainCtrl', function($scope) {

	$scope.gridOpts = {
		data: 'data',
		showSelectionCheckbox: true,
		rowHeight: 30,
		enableSorting: true,
		headerRowHeight: 50,
		columnDefs: [
			{ displayName: 'Index', field: 'gridIndex', width: '30%' },
			{ displayName: 'Foo', field: 'foo', width: '30%' },
			{ displayName: 'Bar', field: 'bar', width: '30%' },
			{ displayName: 'Time', field: 'time', width: '30%', cellFilter: "date : 'd/M H:m:s.sss'" }
		]
	};

	$scope.data = [];

	$scope.data.push({});
	var now = new Date().getTime();

	for (var x = 0; x < 100; ++x) {
		$scope.data.push({
			foo: 'bar' + x,
			bar: x,
			time: new Date(now + x)
		});
	}

});