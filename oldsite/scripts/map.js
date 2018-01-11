'use strict';

var app = angular.module('map', ['interests']);

app.controller('mapController' , function($scope){

	var load_interests=interests.interests_map;
	var swap ={};
	for(var uniq in load_interests) {
		swap[load_interests[uniq]]=uniq;
	}
	$scope.interests=[];

	for(var interest in swap){
		$scope.interests.push(interest);
	}

	$("#tags").autocomplete({
	  source: $scope.interests
	});

	var map;
	var infowindow;

	$scope.initialize = function initialize() {

	  var location = new google.maps.LatLng($scope.user.latitude,$scope.user.longitude); // sample location to start with

	  map = new google.maps.Map(document.getElementById('map-canvas'), {
	    center: location,
	    zoom: 15
	  });
	  var request = {
	    location: location,
	    radius: 2000,
	    types: [swap[$scope.place_of_interest]] 
	  };
	  infowindow = new google.maps.InfoWindow();
	  var service = new google.maps.places.PlacesService(map);
	  service.nearbySearch(request, callback);
	}



	function callback(results, status) {
	  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      	createMarker(results[i]);
	    }

	    var myLatlng = new google.maps.LatLng($scope.user.latitude,$scope.user.longitude);
	    var image = {
	        url: 'images/user.png',
	      
	      };

	    var user_marker = new google.maps.Marker({
	      map: map,
	      position: myLatlng,
	      title:'Its You !',
	      icon : image
	    });
	  }
	}

	function createMarker(place) {
	  var placeLoc = place.geometry.location;
	  var marker = new google.maps.Marker({
	    map: map,
	    position: place.geometry.location
	  });

	  google.maps.event.addListener(marker, 'click', function() {
	    infowindow.setContent(place.name);
	    infowindow.open(map, this);
	  });

	  google.maps.event.trigger(map,'resize');
	  map.setCenter(new google.maps.LatLng($scope.user.latitude,$scope.user.longitude));
	};

	$scope.getCurrentLocation = function() {
		
		if (navigator.geolocation) {
			$scope.message=true;
		    navigator.geolocation.getCurrentPosition(showPosition, function() {
		      alert('User Rejected ! or Connection Error !');
		    });
		  } else {
		    alert("Geolocation is not supported by this browser.");
		  }

	 
	};

	var showPosition = function showPosition(position) {

		$scope.user ={
			latitude:position.coords.latitude,
			longitude:position.coords.longitude
		}



	}
	

})