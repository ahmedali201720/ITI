$("#add").click(function (e) { 
    let regex = /^[a-z A-Z]+$/;
    let personName = $("#name").val().toLowerCase();
    let personAge = $("#age").val();
    if(!$.isNumeric(personAge) || !personName.match(regex)) {
        alert("Check if any field is empty or all data in a correct format.");
        return;
    }
    let delBtnId = "d"+$('#persons-list tr').length;
    let rowId = "r"+$('#persons-list tr').length;
    $('#persons-list > tbody:last-child').append("<tr id = "+ rowId +"><td>" + personName + "</td><td>" + personAge + "</td><td><button id="+delBtnId+">Delete</button></td></tr>");
    $("#"+delBtnId+"").click(function() {
        $(this).closest('tr').remove ();
      });
});

$("#search").click(function (e) {
    let key = $("#search-item").val().toLowerCase();
    $("table tr:not(:first)").filter(function(index) {
        return $(this).find("td:eq(0)").text().indexOf(key) == -1;
    }).hide();
});