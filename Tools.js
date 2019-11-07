var toolsList=[];

	function Tools(id,designation){

		return {
			id:id,
			designation:designation,
			nbTimeUsed:0,
			state:false,

			getId:getId,
			setState:setState,
			getState:getState,

			setNbTimeUsed:setNbTimeUsed,
			getNbTimeUsed:getNbTimeUsed,

			getDesignation:getDesignation
		}
	}

	function getId()
	{
		return this.id;
	}

	function getDesignation()
	{
		return this.designation;
	}

	function getNbTimeUsed()
	{
		return this.nbTimeUsed;
	}

	function getState()
	{
		if(this.state){
			return "Out"
		}
		return "In"
	}



	function setState(){
		this.state=!this.state;
	}

	function setNbTimeUsed(){
		this.nbTimeUsed+=1;
	}

		function addTools(obj){
			toolsList.push(obj);
	}
	function removeTool(){
		toolsList.remove(thiss)
	}