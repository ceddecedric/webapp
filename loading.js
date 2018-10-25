//blocage de l'interface lors de l'execution d'un script ajax
$(document)
    .ajaxStart(function () {
        $.blockUI({ message: '<small class="text-muted"><img src="'+base_url+'assets/gif/ajax-loader.gif" /> Veuillez patienter</small>',
            css: { backgroundColor: '#FFFFFF', color: '#93C90E'}});
    })
    .ajaxStop(function () {
        $.unblockUI();
    });