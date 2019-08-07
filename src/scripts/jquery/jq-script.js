
$(document).ready(function() {

    var jsonData = [
        {
            "number": "1",
            "name":   "Web developer",
            "customer": {
                "name_cust": "Jane",
                "email_cust": "jane44@gmail.com",
                "phone_cust": "+380670325878",
            },
            "developer": {
                "name_dev": "Alex",
                "email_dev": "alex87@gmail.com",
                "phone_dev": "+380992571458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2011/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
            },
        {
            "number": "2",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "3",
            "name":   "Web Site ",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "4",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "5",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "6",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "7",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "8",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "9",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "10",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },
        {
            "number": "11",
            "name":   "Web Site",
            "customer": {
                "name_cust": "Jake",
                "email_cust": "jake45@gmail.com",
                "phone_cust": "+380670325856"

            },
            "developer": {
                "name_dev": "Pedro",
                "email_dev": "pedro97@gmail.com",
                "phone_dev": "+380992588458",
                "age": "23",
                "position": "junior"
            },
            "start_date": "2015/04/25",
            "finish_date": "2018/04/25",
            "status": "Finished"
        },

    ];


    $('#tableTask').dataTable( {
        "scrollX": true,
        "data": jsonData,
        "columns": [
            { "data": "number" },
            { "data": "name" },
            { "data": "customer.name_cust" },
            { "data": "developer.name_dev" },
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

    $('#developerTable').dataTable( {
        "scrollX": true,
        "data": jsonData,
        "columns": [
            { "data": "number" },
            { "data": "developer.name_dev" },
            { "data": "name" },
            { "data":  "developer.email_dev"},
            { "data": "developer.phone_dev" },
            { "data": "developer.age" },
            {"data": "developer.position"}
        ]

    } );

    $('#addDeveloper').click(function (){
        alert("The button will work in the future. Sorry!")
    });

    var taskd = $('#developerTable').DataTable();

    $('#developerTable tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            taskd.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    } );

    $('#developerTable').click( function () {
        taskd.row('.selected').remove().draw( false );
    } );

    $('#developerCustomer').dataTable( {
        "scrollX": true,
        "data": jsonData,
        "columns": [
            { "data": "number" },
            { "data": "customer.name_cust" },
            { "data": "customer.email_cust" },
            { "data":  "customer.phone_cust"},
            { "data": "status" }
        ]

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
});