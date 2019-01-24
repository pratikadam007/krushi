function searchCustomer() {
    var search = document.getElementById('search').value;



    if (search === '') {
        alert('Kindly Enter Search Item');
        document.getElementById("name").focus();
        return false;
    }

    var tableHeaderRowCount = 0;
    var table = document.getElementById('searchTable');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
    
    // var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0).innerHTML = '<input class="form-control" type="text" name="name" value=' + search + '>'
    
    document.getElementById("button-save").style.display = "none";
    document.getElementById("addTable").style.display = "none";
    document.getElementById("searchTable").style.display = "block";
    document.getElementById("button-update").style.display = "block";

    document.getElementById('search').value='';
    document.getElementById("name").focus();


}

function myFunction() {

    var w_name = document.getElementById('name').value;
    var w_mobile = document.getElementById('mobile').value;
    var w_address = document.getElementById('address').value;
    // alert('here' + w_name);

    if (w_name === '' || w_mobile === '' || w_address === '') {
        alert("Please fill all fields...!!!!!!");
        document.getElementById("name").focus();
        return false;
    }
    
    // var tableHeaderRowCount = 0;
    var table = document.getElementById("addTable");
    // var rowCount = table.rows.length;
    // for (var i = tableHeaderRowCount; i < rowCount; i++) {
    //     table.deleteRow(tableHeaderRowCount);
    // }

    // var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    // var cell1 = row.insertCell(0).innerHTML = (w_name);
    // var cell2 = row.insertCell(1).innerHTML = (w_mobile);
    // var cell3 = row.insertCell(2).innerHTML = (w_address);

    var cell1 = row.insertCell(0).innerHTML = '<input class="form-control" type="text" name="name" value=' + w_name + '>'
    var cell2 = row.insertCell(1).innerHTML = '<input class="form-control" type="text" name="mobile" value=' + w_mobile + '>'
    var cell3 = row.insertCell(2).innerHTML = '<input class="form-control" type="text" name="address" value=' + w_address + '>'
    var cell3 = row.insertCell(3).innerHTML = '<button class="btn btn-danger" onclick=myDeleteFunction(this) >Remove</button>'

    document.getElementById("name").value = null;
    document.getElementById("mobile").value = null;
    document.getElementById("address").value = null;

    document.getElementById("name").focus();
    document.getElementById("button-update").style.display = "none";
    document.getElementById("searchTable").style.display = "none";
    document.getElementById("addTable").style.display = "block";
    document.getElementById("button-save").style.display = "block";

    // document.querySelectorAll("#name,#mobile,#address").value='';
}
function myDeleteFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("addTable").deleteRow(i);
}
