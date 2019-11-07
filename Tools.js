var toolsList=[];

	function Tools(designation){

		return {
			designation:designation,
			nbTimeUsed:nbTimeUsed,
			state:state,

			setState:setState,
			setNbTimeUsed:setNbTimeUsed
		}
	}

	function getDesignation()
	{
		return this.designation;
	}

	function getDesignation()
	{
		return this.nbTimeUsed;
	}

	function addTools(obj){
			toolsList.push(obj);
	}

	function setState(){
		this.state=!this.state;
	}

	function setNbTimeUsed(){
		this.nbTimeUsed+=1;
	}