function listingMovements(){
$(".list-movoment-item").html('')

	movementList.forEach(function(mov,i){
	var div=$('<div class="movement-item" ></div>')	
	
		div.append(
                ` <span>`+mov.getIdStaff()+`</span>
                  <span>`+searchById(mov.getIdStaff()).getName()+`</span>
                  <span class=date>`+mov.getIdTools()+`</span>
                  <span class=date>`+mov.getDateOut()+`</span>
                  <span>`+mov.getDateIn()+`</span>
                  <span>`+mov.getMovementState()+`</span>`);

	
		$(".list-movoment-item").append(div)
	
		})




}