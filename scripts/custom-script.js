	
$('#myModal').on('shown',function(){
	google.maps.event.trigger(map,'resize')
})