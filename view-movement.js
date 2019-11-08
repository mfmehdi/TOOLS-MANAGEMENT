function listingMovements(){
$(".list-movoment-item").html('')

	movementList.forEach(function(mov,i){
	var div=$('<div class="movement-item " ></div>')	
	
		div.append(
                ` <span>`+mov.getIdStaff()+`</span>
                  <span>`+searchById(mov.getIdStaff()).getName()+`</span>
                  <span>`+mov.getIdTools()+`</span>
                  <span>`+mov.getDateOut()+`</span>
                  <span>`+mov.getDateIn()+`</span>
                  <span>`+mov.getMovementState()+`</span>`);

		var delButton = $('<button>Delete</button>');
		delButton.on("click",function(){
			movementList.splice(i, 1);
			listingMovements()	;
		})

		div.append(delButton)
		$(".list-movoment-item").append(div)
	
		})




}