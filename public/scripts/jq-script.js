
$(document).ready(function() {

    var jsonData = [
            {
                "name":   "Web developer",
                "customer": "Jane",
                "developer": "Max",
                "start_date": "2011/04/25",
                "finish_date": "2018/04/25",
                "status": "Finished"
            },
            {
                "name":   "Web Site",
                "customer": "Jake",
                "developer": "Max",
                "start_date": "2015/04/25",
                "finish_date": "2018/04/25",
                "status": "Finished"
            },
    ];


    $('#tableTask').dataTable( {
        "data": jsonData,
        "columns": [
            { "data": "name" },
            { "data": "customer" },
            { "data": "developer" },
            { "data": "start_date" },
            { "data": "finish_date" },
            {"data": "status"}
        ],
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }

    } );

    $('#addTask').click(function (){
        alert("The button will work in the future. Sorry!")
    });
    var task = $('#tableTask').DataTable();


    //var developer = $('#developerTable').DataTable();
    //var counter = 1;

/*
    // add Task
    $('#addTask').on('click', function() {
        var taskNumber = $("#taskNumber").val();
        var taskName = $("#taskName").val();
        var taskCustomer = $("#taskCustomer").val();
        var taskDeveloper = $("#taskDeveloper").val();
        var taskStDate = $("#taskStDate").val();
        var taskFinDate = $("#taskFinDate").val();
        var taskStatus = $("#taskStatus").val();
        task.row.add([
            taskNumber,
            taskName,
            taskCustomer,
            taskDeveloper,
            taskStDate,
            taskFinDate,
            taskStatus
        ]).draw(false);

        counter++;
    });

    $('#addTask').click();
    */
    $('#tableTask tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            task.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#deleteTask').click( function () {
        task.row('.selected').remove().draw( false );
    } );


/*
    //add Developer
    $('#addDeveloper').on('click', function() {
        var developerNumber = $("#developerNumber").val();
        var developerName = $("#developerName").val();
        var developerTask = $("#developerTask").val();
        var developerEmail = $("#developerEmail").val();
        var developerPhone = $("#developerPhone").val();
        var developerAge = $("#developerAge").val();
        var developerPosition = $("#developerPosition").val();
        developer.row.add([
            developerNumber,
            developerName,
            developerTask,
            developerEmail,
            developerPhone,
            developerAge,
            developerPosition
        ]).draw(false);

        counter++;
    });

    $('#addDeveloper').click();

    $('#developerTable tbody').on( 'click', 'tr', function () {

        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            task.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#deleteDeveloper').click( function () {
        task.row('.selected').remove().draw( false );
    } );*/
});