
function createMovement(){
	var staffId=$("#movement-staff-id").val();
	var toolsId=$("#movement-tool-id").val()
	var mov=Movement(toolsId,staffId)
	var tool=toolsList[getIndexToolsByID(toolsId)] ;//

//---------------------------change state of tool in or out ,and give date for each movement

		if(!tool.getState()){// out == true //tool in == false
		
			mov.giveTools(new Date().toUTCString())   // update state of tools and type of movement
		
		}else{

			mov.getBackTools(new Date().toUTCString())
		}

//*********************************************************************************************
   
//************************************
		addMovement(mov)
		
		listingMovements();					
}



