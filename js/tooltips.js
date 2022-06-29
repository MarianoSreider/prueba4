$(document).ready(function() {
    $('body').tooltip({
        selector: "[data-tooltip=tooltip]",
        container: "body"
    });
});

$(function(){
    $('#videoModal').modal({
        show: false
    }).on('hidden.bs.modal', function(){
        $(this).find('#kmsembed-1_nbadcetg')[0].pause();
    });
});