$(document).ready(function () {
    var d = new Date();
    var strDate = d.getFullYear() + "/" + (d.getMonth()+1) + "/" + d.getDate();
    $('.date-input').val(strDate);
var total=0;
    $('.add-product').click(function () {
        var type = $("#product_type").val();
        var name = $(".prod-name").val();
        var qty = $(".prod-qty").val();
        var price = 12;
        var col_price = qty * price;
        total = total + col_price;
        $("tbody").append("<tr class='item-entry'><td>" + type + "</td><td>" + name + "</td><td>" + qty + "</td><td>" + price + "</td><td class='collective_price'>" + col_price + "</td><td><button class='delete-btn btn btn-danger'>Delete</button> </td></tr>");
        //$("tbody").append("<tr><td>Abhi</td></tr>");

        $('.data-submit').css("display","block");
        $('.total').val(total);

    });

    $('.table-body').delegate('.delete-btn', 'click', function () {
        $(this).parent().parent().remove();

        var av=0;
        av = $(this).closest('.item-entry').children('.collective_price').text();
        total=total-av;
        $('.total').val(total);
    });

}); 














