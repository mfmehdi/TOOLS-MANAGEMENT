
$(".divs-main").hide()

$("#btn-tools").on("click",()=>{
$(".staff").slideUp("slow");
$(".movement").slideUp("slow");
$(".tools").slideDown("slow");
	listingTools

});



$("#btn-staff").on("click",()=>{
$(".tools").slideUp("slow");
$(".movement").slideUp("slow");
$(".staff").slideDown("slow");
	listingStaff
});


$("#btn-movement").on("click",()=>{
$(".tools").slideUp("slow");
$(".staff").slideUp("slow");
$(".movement").slideDown("slow");
	listingStaff
});