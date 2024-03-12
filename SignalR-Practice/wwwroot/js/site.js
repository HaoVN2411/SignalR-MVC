// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(() => {

    var connection = new signalR.HubConnectionBuilder()
        .withUrl("/SignalRServer")
        .build();

    connection.start().catch(function (err) {
        return console.error(err.toString())
    });


    connection.on("LoadProducts", function () {
        LoadProdData();
    });


    LoadProdData();

    function LoadProdData() {
        var tr = ``;
        $.ajax({
            url: '/Products/GetProducts',
            type: 'GET',
            success: (result) => {
                $.each(result, (k, v) => {
                    tr += `<tr>
                        <td> ${v.prodName} </td>
                        <td> ${v.category} </td>
                        <td> ${v.unitPrice} </td>
                        <td> ${v.stockQty} </td>
                        <td>
                            <a href='../Products/Edit?id=${v.proId}'> Edit </a>
                            <a href='../Products/Details?id=${v.proId}'> Details </a>
                            <a href='../Products/Delete?id=${v.proId}'> Delete </a>
                        </td>
                        </tr>`
                })
                $(`#tableBody`).html(tr);
            },
            error: (error) => {
                console.log(error)
            }
        });

    }
})