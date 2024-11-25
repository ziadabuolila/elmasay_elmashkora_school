// (function ($) { 
//     var loader = function () {
//         setTimeout(function () {
//             if ($('#loader').length > 0) {
//                 $('#loader').removeClass('show');
//             }
//         }, 2000);
//     };
//     loader(); 
// })(jQuery);

document.querySelector("#btn-menu").onclick = function(){
    (function ($) { 
        $('#menu').addClass('open');
    })(jQuery);
    // console.log('ff')
}
document.querySelector("#close").onclick = function(){
    (function ($) { 
        $('#menu').removeClass('open');
    })(jQuery);
    // console.log('ff')
}
window.onload = function(){
    setTimeout(function () {
        (function ($) { 
            $('#loader').removeClass('show');
            $('.loader').addClass('d-none');
        })(jQuery);
    }, 1250)
}