const $header = document.querySelector('.main-wrapper__second-section');
const $check_in_calender = document.querySelector('#check-in-calender');
const $options__container = document.querySelector('.options__container');
const $location__container = document.querySelector('.location__container');
const $guests__container = document.querySelector('.guests__container');

window.onscroll = () => {
    if (window.pageYOffset >= 64) {
        $header.classList.add("sticky")
    } else {
        $header.classList.remove("sticky");
    }
}

search_click = () => {
    $header.classList.remove('sticky');
    $header.classList.add('show-form');
}

check_in_out = () => {
    if ($check_in_calender.classList.contains('hidden')){
        $check_in_calender.classList.remove('hidden');
    } else{
        $check_in_calender.classList.add('hidden');
    }
}

options_btn_click = () => {
    if ($options__container.classList.contains('hidden')){
    $options__container.classList.remove('hidden');
    } else{
        $options__container.classList.add('hidden');
    }
}

form_location = () => {
    if ($location__container.classList.contains('hidden')){
        $location__container.classList.remove('hidden');
    } else{
        $location__container.classList.add('hidden');
    }
}

guests__container = () => {
    if ($guests__container.classList.contains('hidden')){
        $guests__container.classList.remove('hidden');
    } else{
        $guests__container.classList.add('hidden');
    }
}