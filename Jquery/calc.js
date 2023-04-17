$(document).ready(function() {
    $("button").click(function() {
        // $(this) - gets the current button on which user has clicked
        var opr = $(this).html();
        var fnum = $("#box_1").val();
        var snum = $("#box_2").val();
        var expression = fnum + opr + snum;
        var result = eval(expression);
        $("#box_3").val(result);
    });
});