document.addEventListener("DOMContentLoaded", function(){
    let button = document.querySelector(".custom-options-button");
    let optionsBox = document.querySelector(".custom-dropdown");

    button.addEventListener("click", function(e){
        if(optionsBox.classList.contains('cd-active')){
            optionsBox.classList.remove('cd-active');
            e.target.classList.remove('cd-button-active');
            e.target.innerHTML = 'Personalizar (+)';
        }else{
            optionsBox.classList.add('cd-active');
            e.target.classList.add('cd-button-active');
            e.target.innerHTML = 'Personalizar (-)';
        }
    });
});