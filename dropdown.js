    function showDivTool(arrayFilter) {
    var arrayF=[...toolsList]
    if(arguments.length===1)
     {var arrayF=[...arrayFilter];}

    var div=$("#myDropdownTool")
    div.html('')
	arrayF.forEach(function(tool,i){
		var id=$('<span class=searchIdTool>'+tool.getId()+'</span>')
		id.on("click",function(){
	
		$("#movement-tool-id").val($(this)[0].innerText);
	 	div.toggle("show");
			})
    	div.append(id)
})
	
}



    function showDivStaff(arrayFilter) {   

    var arrayF=[...staffList]
    if(arguments.length===1) {var arrayF=[...arrayFilter];}

    var div=$("#myDropdownStaff")
    div.html('')

	arrayF.forEach(function(tool,i){
	  var id=$('<span class=searchIdStaff>'+tool.getId()+'</span>')
	  id.on("click",function(){
	  $("#movement-staff-id").val($(this)[0].innerText);
	  div.toggle("show");
	})

	div.append(id)
})
	
}

$("#movement-staff-id").keyup(function(){

   showDivStaff(filterByIdStaff($("#movement-staff-id").val()))

})

$("#movement-tool-id").keyup(function(){
console.log(filterByIdTools($("#movement-tool-id").val()))
   showDivTool(filterByIdTools($("#movement-tool-id").val()))

})
$("#movement-tool-id").on('click',function(){
	showDivTool()
	$("#myDropdownTool").toggle("show");
}) 

$("#movement-staff-id").on('click',function(){
	showDivStaff()
	$("#myDropdownStaff").toggle("show");
}) 