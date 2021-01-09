var $header = document.querySelector('.main-wrapper__second-section');
var $options__btn = document.querySelector('.options__button');
var $options__container = document.querySelector('.options__container');
var $location__container = document.querySelector('.location__container');

window.onscroll = function(){
    if (window.pageYOffset >= 64) {
        $header.classList.add("sticky")
    } else {
        $header.classList.remove("sticky");
    }
}

function search_click(){
    $header.classList.remove('sticky');
    $header.classList.add('show-form');
}

function options_btn_click(){
    if ($options__container.classList.contains('hidden')){
    $options__container.classList.remove('hidden');
    } else{
        $options__container.classList.add('hidden');
    }
}

function form_location(){
    if ($location__container.classList.contains('hidden')){
        $location__container.classList.remove('hidden');
    } else{
        $location__container.classList.add('hidden');
    }
}




