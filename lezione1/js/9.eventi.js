// EVENTI
// 1. Creare un evento al click del bottone che cambia il colore di sfondo del body
$('#cambia-sfondo').click(function (e) { 
    e.preventDefault();
    $('body').css('background-color', 'red');
});

// 2. Creare un evento al click del bottone che cambia il colore del testo del paragrafo
$("#cambia-colore-paragrafo").click(function (e) { 
    e.preventDefault();
    $("#primo-paragrafo").css('color', 'blue');
});

// 3. Creare un evento al click del bottone che cambia la dimensione del testo del body
$("#cambia-dimensione-paragrafo").click(function (e) { 
    e.preventDefault();
    $("#secondo-paragrafo").css('font-size', '100px');
});

// Altri appunti personali su jQuery in:
// https://drive.google.com/drive/folders/102jBP_vJ94xHSrz9QyCQBJzH_rpwQrAL