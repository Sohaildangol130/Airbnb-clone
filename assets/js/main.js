var $header = document.querySelector('.main-wrapper__second-section');
var $options__btn = document.querySelector('.options__button');
var $options__container = document.querySelector('.options__container');
var $location__container = document.querySelector('.location__container');
var $future_getaways__first_container = document.querySelector('.future-getaways__first-container');
var $future_getaways__links_container = document.querySelectorAll('.future-getaways__links-container>p');
var $future_getaways__main_container = document.querySelectorAll('.future-getaways__main-container>div');

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

function active(id){
    for (let i = 0; i<$future_getaways__links_container.length; i++){
        if ($future_getaways__links_container[i].id == id){
            $future_getaways__links_container[i].classList.add('active');
            let $id = $future_getaways__links_container[i].id;
            let replace_text = $id.replace('__link', '');
            for (let i = 0; i < $future_getaways__main_container.length; i++){
                if ($future_getaways__main_container[i].classList.contains(replace_text)){
                    $future_getaways__main_container[i].classList.remove('hidden');
                } else {
                    $future_getaways__main_container[i].classList.add('hidden');
                }
            }
        } else {
            $future_getaways__links_container[i].classList.remove('active');
        }
    }
}

// var cities = [
//     {
//         city : 'New York',
//         country: 'New York'
//     },
//     {
//         city : 'Phoenix',
//         country: 'Arizona'
//     },
// ]
// for (let i = 0; i < cities.length; i++){
//     let $div = document.createElement("div");
//     $div.className = "w-1/4 mt-6";

//     let $city_text = document.createElement("p");
//     $city_text.className = "font-medium";
//     let $city_name = document.createTextNode("Nepal");
//     $city_text.appendChild($city_name)
// console.log($city_text.appendChild($city_name));
    
//     let $country_text = document.createElement("p");
//     $country_text.className = "font-light text-gray-400";

    
//     let $country_name = document.createTextNode(cities[i].country);

//     var a = $city_text.appendChild($city_name);
//     var b = $country_text.appendChild($country_name);

//     $div.appendChild(b);
//     $div.appendChild(a);
//     // console.log($div);
//     $future_getaways__first_container.appendChild($div);



// }




