
function listingStaffs(){
$(".list-staff-item").html('')

	staffList.forEach(function(staff,i){
	var div=$('<div class="staff-item " ></div>')	
		div.append(
                ` <span>`+staff.getId()+`</span>
                  <span>`+staff.getName()+`</span>
                  <span>`+staff.getJob()+`</span>
                  <span>`+staff.getEmail()+`</span>
                  <span>`+staff.getPhone()+`</span>` );

		var delButton = $('<button>Delete</button>');
		delButton.on("click",function(){
			staffList.splice(i, 1);
			listingStaffs()	;
		})

		div.append(delButton)
		$(".views-staff").append(div);
		$(".list-staff-item").append(div)
		})
     
}