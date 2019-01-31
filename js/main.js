var hart = document.querySelector('#heart');
var slijm = document.querySelector('.slijm');
var bookmark1 = document.querySelector('.bookmark1');
var bookmark2 = document.querySelector('.bookmark2');

if (hart) {
    hart.addEventListener('click', function () {
        hart.classList.toggle('redheart');
    });
}
if (bookmark1) {
    bookmark1.addEventListener('click', function () {
        bookmark1.classList.add('hide');
        bookmark2.classList.remove('hide');
        bookmark2.classList.add('groterbook');
    });
    bookmark2.addEventListener('click', function () {
        bookmark1.classList.remove('hide');
        bookmark2.classList.remove('groterbook');
        bookmark2.classList.add('hide');
    });
};


if (slijm) {
    function navFixed() {
        if (window.scrollY >= 160) {
            slijm.classList.add('sticky');
            if (window.scrollY >= 1570) {
                document.querySelector('.poep').classList.add('sticky');
                document.querySelector('.tekst').classList.add('sticky');
            }
        } else {
            slijm.classList.remove('sticky');
            document.querySelector('.poep').classList.remove('sticky');
            document.querySelector('.tekst').classList.remove('sticky');
        }
    };
    // Event Listener
    window.addEventListener('scroll', navFixed);
};
