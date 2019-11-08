var movementList=[];
	
	function Movement(idTools,idStaff){
		return{
			idTools:idTools,
			idStaff:idStaff,
			dateOut:"",
			dateIn:"",
			movementState:"out",

			getIdTools:getIdTools,
			getIdStaff:getIdStaff,
			getDateOut:getDateOut,
			getDateIn:getDateIn,
			getMovementState:getMovementState,

			giveTools:giveTools,
			getBackTools:getBackTools,
			filterBy:filterBy
			
		}

	}


     function getIdTools(){
     		return this.idTools;
     }
      function getIdStaff(){
     		return this.idStaff;
     }
      function getDateOut(){
     		return this.dateOut;
     }
     function getDateIn(){
     		return this.dateIn;
     }
     function getMovementState(){
     	return this.movementState;
     }

   
	function giveTools(dateOut){
		toolsList[getIndexToolsByID(this.idTools)].setState();  //
		this.dateOut=dateOut;
		this.dateIn="            "
		this.movementState="out"

	}

	function getBackTools(dateIn){
		toolsList[getIndexToolsByID(this.idTools)].setState();
		toolsList[getIndexToolsByID(this.idTools)].setNbTimeUsed();
		this.dateIn=dateIn;
		this.dateOut="              "
		this.movementState="in"
	}

	function filterBy(criterion,param){
			return movementList.filter((element)=>{
				return element[param]===criterion;
			})
	}

  function addMovement(obj){
     	movementList.push(obj);
    }


