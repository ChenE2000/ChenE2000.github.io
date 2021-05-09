const TYPES = ['info', 'warning', 'success', 'error'],
    TITLES = {
        'info': 'Notice!',
        'success': 'BINGO!',
        'warning': 'Watch Out!',
        'error': 'NO!'
    },
    CONTENT = {
        'info': 'Hello, world! This is a toast message.',
        'success': 'The action has been completed.',
        'warning': 'It\'s all about to go wrong',
        'error': 'It all went wrong.'
    },
    POSITION = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'];

$.toastDefaults.position = 'top-center';
$.toastDefaults.dismissible = true;
$.toastDefaults.stackable = true;
$.toastDefaults.pauseDelayOnHover = true;

// type是 ['info', 'warning', 'success', 'error']中的一个
function showSnack(type, content) {

    $.snack(type, content);
}
$('#liveToastBtn').click(function() {
    showSnack('error', "fail")
        // $.snack("error", "fail!!");
})