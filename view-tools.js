
function listingTools(){
$(".tool-item").html('')

	toolsList.forEach(function(tool,i){
	var div=$('<div class="tool-item" id="'+i+'"><div/>')	
	
		div.append(
                `
                  <span>`+tool.getId()+`</span>
                  <span>`+tool.getDesignation()+`</span>
                  <span>`+tool.getNbTimeUsed()+`</span>
                  <span>`+tool.getState()+`</span>` );

		var delButton = $('<button>Delete</button>');
		delButton.on("click",function(){
			toolsList.splice(i, 1);
			listingTools()	;
		})

		div.append(delButton)
		$(".views-tools").append(div);
		})




}