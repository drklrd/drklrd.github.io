'use strict';

var app = angular.module('theGoldenEgg', []);

app.controller('theGoldenEggController' , function($scope){
	
	//Please edit the URL only . Provide your json data URL here

	var jsonURL = "https://api.myjson.com/bins/4qq7p"; //EDIT HERE ONLY !!!!!

	// Do not mess with following codes.....

	var allGlossaries;
	var generateKey;
	var generatedKeys= [];
	var verifyKey=0;
	var totalGlossaryItems = 0;
	$scope.glossariesIndex = [];
	$scope.glossaries = [];
	// var allGlossaries = glossaryData;
	var getData = 	$.getJSON( jsonURL , function( data ) {
						allGlossaries=data;
						for(var property in allGlossaries ) {
					  		$scope.glossariesIndex.push(property);
					  		$scope.glossaries.push(allGlossaries[property]);
					  		totalGlossaryItems++;
						}
						// $scope.totalEggs = totalGlossaryItems;
						$( "#totalEggs" ).html(totalGlossaryItems);
						$scope.generator();
					});

	$scope.generator = function generatorFn () {
		if (generatedKeys.length >= totalGlossaryItems){
			alert('out of stock ! Now repeating');
			generatedKeys.length=0;
			verifyKey=0;
			$scope.generator();
			
		}else {
			// $scope.hatchedEggs = generatedKeys.length + 1;
			$( "#hatchedEggs" ).html(generatedKeys.length + 1);
			while(verifyKey !== 1){
				generateKey = Math.floor(Math.random()* $scope.glossaries.length);
				if(generatedKeys.indexOf(generateKey) === -1){
					generatedKeys.push(generateKey);
					// $scope.word=  $scope.glossariesIndex[generateKey];
					$( "#word" ).html($scope.glossariesIndex[generateKey]);
					// $scope.meaning=$scope.glossaries[generateKey];
					$( "#meaning" ).html($scope.glossaries[generateKey]);
					verifyKey =1;

				}

			}
			verifyKey = 0;

		}
		
	};

	
});