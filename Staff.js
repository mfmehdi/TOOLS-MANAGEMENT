var staffList=[]

function Staff(name, phone, email, job){
	return {
		name:name,
		phone:phone,
		email:email,
		job:job,

		getName: getName,
		getPhone: getPhone,
		getEmail: getEmail,
		getJob: getJob,
	};
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
	return this.company;
}

function addStaff(obj){
	staffList.push(obj);
}