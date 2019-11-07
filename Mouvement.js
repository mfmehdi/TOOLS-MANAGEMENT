var mouvementList=[];
	
	function Mouvement(idTools,idStaff,mouvementState){
		return{
			idTools:idTools,
			idStaff:idStaff,
			dateOut:"",
			dateIn:"",
			mouvementState:mouvementState,

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



	function giveTools(dateOut){
		toolsList[this.idTools].setState();  //
		this.dateOut=dateOut;
	}

	function getBackTools(dateIn){
		toolsList[this.idTools].setState();
		this.dateIn=dateIn;
	}

	function filterBy(criterion,param){
			return mouvementList.filter((element)=>{
				return element[param]===criterion;
			})
	}


