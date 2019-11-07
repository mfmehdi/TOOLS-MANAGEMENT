
function listingTools(){
$(".list-tool-item").html('')
	toolsList.forEach(function(tool,i){
	var div= $('<div class="tool-item " id="'+i+'"></div>')	
	
		div.append(
                 ` <span views>`+tool.getId()+`</span>
                  <span views>`+tool.getDesignation()+`</span>
                  <span views>`+tool.getNbTimeUsed()+`</span>
                  <span views>`+tool.getState()+`</span>` );

		var delButton = $('<button>Delete</button>');
		delButton.on("click",function(){
			toolsList.splice(i, 1);
			listingTools()	;
		})

		div.append(delButton)
		$(".list-tool-item").append(div)
		
		
		})




}