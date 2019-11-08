var staffList=[]

function Staff(id, name, phone, email, job, phone){
	return {
		id:id,
		name:name,
		phone:phone,
		email:email,
		job:job,
		
		getId:getId,
		getName: getName,
		getPhone: getPhone,
		getEmail: getEmail,
		getJob: getJob,
		getPhone:getPhone
	};
}

function getId(){
	return this.id;
}
function getName(){
	return this.name;
}

function getPhone(){
	return this.phone;
}

function getEmail(){
	return this.email;
}

function getJob(){
	return this.job;
}

function addStaff(obj){
	staffList.push(obj);
}

  	function filterByIdStaff(str){
			return staffList.filter((element)=>{
				return element.id.startsWith(str);

			})
	}

function searchById(id){
	return staffList.filter((element)=>{
		return element.id===id;
	})[0];
	
}