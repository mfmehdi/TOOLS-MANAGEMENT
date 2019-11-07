var movementList=[];
	
	function Movement(idTools,idStaff,movementState){
		return{
			idTools:idTools,
			idStaff:idStaff,
			dateOut:"",
			dateIn:"",
			movementState:movementState,

			getIdTools:getIdTools,
			getIdStaff:getIdStaff,
			getDateOut:getDateOut,
			getDateIn:getDateIn,

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

     function addMovement(obj){
     	movementList.push(obj);
    }

	function giveTools(dateOut){
		toolsList[this.idTools].setState();  //
		this.dateOut=dateOut;
	}

	function getBackTools(dateIn){
		toolsList[this.idTools].setState();
		this.dateIn=dateIn;
	}

	function filterBy(criterion,param){
			return movementList.filter((element)=>{
				return element[param]===criterion;
			})
	}


