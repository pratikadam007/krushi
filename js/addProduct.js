
            function myFunction() {


              var w_product_type = document.getElementById('product_type').value;
              var w_billNo = document.getElementById('billNo').value;
              var w_name = document.getElementById('name').value;
              var w_qty = document.getElementById('qty').value;
              var w_price = document.getElementById('price').value;
              var w_exDate = document.getElementById('exDate').value;
              var w_wholeSaler = document.getElementById('wholeSaler').value;

              if (w_product_type === '' || w_billNo === '' || w_name === '' || w_qty === '' || w_price === '' || w_exDate === '' || w_wholeSaler === '') {
                  alert("Please fill all fields...!!!!!!");
                  return false;
              }


              var table = document.getElementById("myTable");
              var row = table.insertRow(0);

              var cell1 = row.insertCell(0).innerHTML = '<input  class="form-control col-lg-3" type="text" value=' + w_product_type + '>'
              var cell2 = row.insertCell(1).innerHTML = '<input  class="form-control" type="text" value=' + w_billNo + '>'
              var cell3 = row.insertCell(2).innerHTML = '<input  class="form-control" type="text" value=' + w_name + '>'
              var cell4 = row.insertCell(3).innerHTML = '<input  class="form-control" type="text" value=' + w_qty + '>'
              var cell5 = row.insertCell(4).innerHTML = '<input  class="form-control" type="text" value=' + w_price + '>'
              var cell6 = row.insertCell(5).innerHTML = '<input  class="form-control" type="text" value=' + w_exDate + '>'
              var cell7 = row.insertCell(6).innerHTML = '<input  class="form-control" type="text" value=' + w_wholeSaler + '>'
              var cell8 = row.insertCell(7).innerHTML = '<button class="btn btn-danger" onclick=myDeleteFunction(this) >Remove</button>'
              document.getElementById("product_type").value = null;
              document.getElementById("billNo").value = null;
              document.getElementById("name").value = null;
              document.getElementById("qty").value = null;
              document.getElementById("price").value = null;
              document.getElementById("exDate").value = null;
              document.getElementById("wholeSaler").value = null;

              document.getElementById("product_type").focus();
              document.getElementById("button-sub").style.display = "block";
          }
          function myDeleteFunction(r) {
              var i = r.parentNode.parentNode.rowIndex;
              document.getElementById("myTable").deleteRow(i);
          }
            function myFunction() {


                var w_product_type = document.getElementById('product_type').value;
                var w_billNo = document.getElementById('billNo').value;
                var w_name = document.getElementById('name').value;
                var w_qty = document.getElementById('qty').value;
                var w_price = document.getElementById('price').value;
                var w_exDate = document.getElementById('exDate').value;
                var w_wholeSaler = document.getElementById('wholeSaler').value;

                if (w_product_type === '' || w_billNo === '' || w_name === '' || w_qty === '' || w_price === '' || w_exDate === '' || w_wholeSaler === '') {
                    alert("Please fill all fields...!!!!!!");
                    return false;
                }


                var table = document.getElementById("myTable");
                var row = table.insertRow(0);

                var cell1 = row.insertCell(0).innerHTML = '<input  class="form-control col-lg-3" type="text" value=' + w_product_type + '>'
                var cell2 = row.insertCell(1).innerHTML = '<input  class="form-control" type="text" value=' + w_billNo + '>'
                var cell3 = row.insertCell(2).innerHTML = '<input  class="form-control" type="text" value=' + w_name + '>'
                var cell4 = row.insertCell(3).innerHTML = '<input  class="form-control" type="text" value=' + w_qty + '>'
                var cell5 = row.insertCell(4).innerHTML = '<input  class="form-control" type="text" value=' + w_price + '>'
                var cell6 = row.insertCell(5).innerHTML = '<input  class="form-control" type="text" value=' + w_exDate + '>'
                var cell7 = row.insertCell(6).innerHTML = '<input  class="form-control" type="text" value=' + w_wholeSaler + '>'
                var cell8 = row.insertCell(7).innerHTML = '<button class="btn btn-danger" onclick=myDeleteFunction(this) >Remove</button>'
                document.getElementById("product_type").value = null;
                document.getElementById("billNo").value = null;
                document.getElementById("name").value = null;
                document.getElementById("qty").value = null;
                document.getElementById("price").value = null;
                document.getElementById("exDate").value = null;
                document.getElementById("wholeSaler").value = null;

                document.getElementById("product_type").focus();
                document.getElementById("button-sub").style.display = "block";
            }
            function myDeleteFunction(r) {
                var i = r.parentNode.parentNode.rowIndex;
                document.getElementById("myTable").deleteRow(i);
            }
            function myFunction() {


                var w_product_type = document.getElementById('product_type').value;
                var w_billNo = document.getElementById('billNo').value;
                var w_name = document.getElementById('name').value;
                var w_qty = document.getElementById('qty').value;
                var w_price = document.getElementById('price').value;
                var w_exDate = document.getElementById('exDate').value;
                var w_wholeSaler = document.getElementById('wholeSaler').value;

                if (w_product_type === '' || w_billNo === '' || w_name === '' || w_qty === '' || w_price === '' || w_exDate === '' || w_wholeSaler === '') {
                    alert("Please fill all fields...!!!!!!");
                    return false;
                }


                var table = document.getElementById("myTable");
                var row = table.insertRow(0);

                var cell1 = row.insertCell(0).innerHTML = '<input  class="form-control col-lg-3" type="text" value=' + w_product_type + '>'
                var cell2 = row.insertCell(1).innerHTML = '<input  class="form-control" type="text" value=' + w_billNo + '>'
                var cell3 = row.insertCell(2).innerHTML = '<input  class="form-control" type="text" value=' + w_name + '>'
                var cell4 = row.insertCell(3).innerHTML = '<input  class="form-control" type="text" value=' + w_qty + '>'
                var cell5 = row.insertCell(4).innerHTML = '<input  class="form-control" type="text" value=' + w_price + '>'
                var cell6 = row.insertCell(5).innerHTML = '<input  class="form-control" type="text" value=' + w_exDate + '>'
                var cell7 = row.insertCell(6).innerHTML = '<input  class="form-control" type="text" value=' + w_wholeSaler + '>'
                var cell8 = row.insertCell(7).innerHTML = '<button class="btn btn-danger" onclick=myDeleteFunction(this) >Remove</button>'
                document.getElementById("product_type").value = null;
                document.getElementById("billNo").value = null;
                document.getElementById("name").value = null;
                document.getElementById("qty").value = null;
                document.getElementById("price").value = null;
                document.getElementById("exDate").value = null;
                document.getElementById("wholeSaler").value = null;

                document.getElementById("product_type").focus();
                document.getElementById("button-sub").style.display = "block";
            }
            function myDeleteFunction(r) {
                var i = r.parentNode.parentNode.rowIndex;
                document.getElementById("myTable").deleteRow(i);
            }