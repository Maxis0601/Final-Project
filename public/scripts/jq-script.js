
$(document).ready(function() {


    var t = $('#example').DataTable();
    var counter = 1;

    $('#addRow').on('click', function() {
        var text1 = $("#column1").val();
        var text2 = $("#column2").val();
        var text3 = $("#column3").val();
        var text4 = $("#column4").val();
        var text5 = $("#column5").val();
        var text6 = $("#column6").val();
        var text7 = $("#column7").val();
        t.row.add([
            text1,
            text2,
            text3,
            text4,
            text5,
            text6,
            text7
        ]).draw(false);

        counter++;
    });

    // Automatically add a first row of data
    $('#addRow').click();
});