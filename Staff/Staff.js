var staffList=[Staff("2100","josef Batani","748492","josef@gmail.com","welder"),
			   Staff("21888","Davy Yari","748492","Davy@gmail.com","boiler"),
			    Staff("2150","Alexandre Yasni","748492","Alexandre@gmail.com","mechanic")
]

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