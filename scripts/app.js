'use strict';

var allGlossaries;
var getData = 	$.getJSON( "data/data.json", function( data ) {

					allGlossaries=data;
				});

var app = angular.module('theGoldenEgg', []);

app.controller('theGoldenEggController' , function($scope){
	var generateKey;

	$scope.glossariesIndex = [];
	$scope.glossaries = [];

	for(var property in allGlossaries ) {
  		$scope.glossariesIndex.push(property);
  		$scope.glossaries.push(allGlossaries[property]);
	}

	$scope.generator = function generatorFn () {

		generateKey = Math.floor(Math.random()* $scope.glossaries.length);
		$scope.word=  $scope.glossariesIndex[generateKey];
		$scope.meaning=$scope.glossaries[generateKey];
	};

	$scope.generator();

	
	

		
	
});