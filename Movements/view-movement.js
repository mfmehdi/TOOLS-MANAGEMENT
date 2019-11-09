var  arrayFilter=[...movementList];
function listingMovements(){
	/*  var arrayF=[...movementList]
    if(arguments.length===1)
     {var arrayF=[...arrayFilter];}*/

$(".list-movoment-item").html('')

	arrayFilter.forEach(function(mov,i){
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


$(".filter").hide();
$(".slide-filter").on("click",function(){
	$(".filter").toggle("fast");
 })



$("#filter_staff").keyup(function(){
  arrayFilter=filterMovementBy("idStaff",$("#filter_staff").val())
  arrayFilter=filterMovementBy("idTools",$("#filter_tool").val(),arrayFilter)
  arrayFilter=filterMovementBy("movementState",$("#filter_mov").val(),arrayFilter)	
   listingMovements()


})

$("#filter_tool").keyup(function(){
	  
  arrayFilter=filterMovementBy("idStaff",$("#filter_staff").val())
  arrayFilter=filterMovementBy("idTools",$("#filter_tool").val(),arrayFilter)
  arrayFilter=filterMovementBy("movementState",$("#filter_mov").val(),arrayFilter)	
    
   
   listingMovements()

})

$("#filter_mov").keyup(function(){
	
   
     arrayFilter=filterMovementBy("idStaff",$("#filter_staff").val())
  arrayFilter=filterMovementBy("idTools",$("#filter_tool").val(),arrayFilter)
  arrayFilter=filterMovementBy("movementState",$("#filter_mov").val(),arrayFilter)	
    listingMovements()

})

