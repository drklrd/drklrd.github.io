'use strict';

var allGlossaries = glossaryData;
// var getData = 	$.getJSON( "data/data.json", function( data ) {

// 					allGlossaries=data;
// 				});

var app = angular.module('theGoldenEgg', []);

app.controller('theGoldenEggController' , function($scope){
	var generateKey;
	var generatedKeys= [];
	var verifyKey=0;
	var totalGlossaryItems = 0;
	$scope.glossariesIndex = [];
	$scope.glossaries = [];


	for(var property in allGlossaries ) {
  		$scope.glossariesIndex.push(property);
  		$scope.glossaries.push(allGlossaries[property]);
  		totalGlossaryItems++;
	}
	$scope.totalEggs = totalGlossaryItems;

	$scope.generator = function generatorFn () {
		
		if (generatedKeys.length >= totalGlossaryItems){
			
			alert('out of stock ! Now repeating');
			generatedKeys.length=0;
			verifyKey=0;
			$scope.generator();
			
		}else {
			$scope.hatchedEggs = generatedKeys.length + 1;
			while(verifyKey !== 1){
				generateKey = Math.floor(Math.random()* $scope.glossaries.length);
				if(generatedKeys.indexOf(generateKey) === -1){
					generatedKeys.push(generateKey);

					$scope.word=  $scope.glossariesIndex[generateKey];
					$scope.meaning=$scope.glossaries[generateKey];
					verifyKey =1;

				}

			}
			verifyKey = 0;

		}
		
		
		
		
	};

	$scope.generator();



	
	

		
	
});