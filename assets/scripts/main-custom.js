
(function($) {
    $(window).on("load",function () {
        $('.loader-container').fadeOut(500,function () {
            $(this).remove();
        });
    });

    $.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
        sNext: '<i class="fa fa-chevron-right text-dark" style="font-size: 18px"></i>',
        sPrevious: '<i class="fa fa-chevron-left text-dark" style="font-size: 18px"></i>'
    });
    $("#user-role-table").DataTable({
        "dom": '<"top">rt<"bottom"lip><"clear">',
        "ordering": false,
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0, 1, 2, 3 ] },
            { "bSearchable": false, "aTargets": [ 0, 1, 2, 3 ] }
        ]
    });


})(jQuery);



// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
//end of tooltips js
