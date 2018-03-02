var GridExample = function () {
    var initialize = function () {
        var container = $('#grid').html('<div></div>');
        var grid = $('div', container);

        var filterOption = {
            extra: false,
            operators: {
                string: {
                    eq: "Is Equal To",
                    startswith: "Starts With",
                    contains: "Contains",
                    endswith: "Ends With"
                }
            }
        };

        var columnOptions = [
            {
                field: "ID",
                title: "ID",
                width: 100,
                type: "integer",
                filterable: false
            },
            {
                field: "Alias",
                title: "Alias",
                filterable: filterOption
            },
            {
                field: "Alias",
                title: "Alias",
                filterable: filterOption
            },
            {
                field: "Alias",
                title: "Alias",
                filterable: filterOption
            },
            {
                field: "Alias",
                title: "Alias",
                filterable: filterOption
            }
        ];

        var gridOptions = {
            dataSource: {
                transport: {
                    read: {
                        url: '/Admin/Home/GetProducts',
                        dataType: "json",
                        type: "POST",
                        data: function (rs) {
                            return {
                                activeOnly: $('#chkShowActive').is(':checked')
                            };
                        }
                    }
                },
                schema: {
                    data: function (a) {
                        if (a.data && a.data.results) {
                            console.log(a.data)
                            return a.data.results;
                        } else {
                            return null;
                        }
                    }, total: "total",
                    model: { id: "ID" },
                    errors: function (a) {
                        return a.code !== "ok";
                    }
                },
                serverPaging: true,
                serverSorting: true,
                serverFiltering: true,
                type: 'json'
            },
            columns: columnOptions,
            height: 300,
            sortable: { mode: "multiple", allowUnsort: true },
            filterable: true,
            pageable: {
                pageSize: 30,
                refresh: true,
                messages: {
                    refresh: "Refresh the grid"
                }
            }
        };
        grid.kendoGrid(gridOptions)
            .delegate("tbody>tr", "dblclick", function (e) {
                var row = e.currentTarget;
                var selectedItem = grid.data("kendoGrid").dataItem(row);

                var ajax = $.ajax({
                    url: getStudentUrl,
                    type: "POST",
                    data: { id: selectedItem.Id },
                    dataType: "html"
                });

                ajax.success(function (data) {
                    var dialog = $('#dialog');
                    dialog.html(data);
                    dialog.dialog({
                        modal: true
                    });
                });
            });
    };

    var refresh = function () {
        var grid = $('#grid>div');
        if (grid.length < 1) {
            return;
        }

        grid.data("kendoGrid").dataSource.read();
    };

    return {
        Initialize: initialize,
        Refresh: refresh
    };
}();

$(document).ready(function () {
    //GridExample.Initialize();
    $("#grid").kendoGrid({
        dataSource: {
            type: "json",
            transport: {
                read: "/Admin/Home/GetProducts"
            },
            schema: {
                model: {
                    fields: {
                        ID: { type: "number" },
                        Alias: { type: "number" },
                        CreatedDate: { type: "string" }
                    }
                }
            },
            pageSize: 20,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true
        },
        height: 550,
        filterable: true,
        sortable: true,
        pageable: true,
        columns: [{
            field: "ID",
            filterable: false
        },
            {
                field: "CreatedDate",
                title: "CreatedDate",
                format: "{0:MM/dd/yyyy}"
            }, {
                field: "Alias",
                title: "Alias"
            }
        ]
    });
});