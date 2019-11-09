function createStaff(){
	addStaff(
		Staff(
			$("#staff-id").val(),
			$("#staff-name").val(),
			$("#staff-post").val(),
			$("#staff-email").val(),
			$("#staff-phone").val(),
			)
);
	listingStaffs()
}