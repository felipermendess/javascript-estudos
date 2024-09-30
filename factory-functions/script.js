function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements);

    function hideElements(){
        elements.forEach(element => {
            element.style.display = 'none';
        })
        return this;//serve para mesmo que tudo seja escondido, a função ainda possa ser usada pois foi retornada
    }

    function showElements(){
        elements.forEach(element => {
            element.style.display = 'initial';
        })
        return this;
    }

    function on(onEvent, callback){
        elements.forEach(element => {
            element.addEventListener(onEvent, callback);
        })
        return this;
    }

    function addClass(className){
        elements.forEach(element => {
            element.classList.add(className);
        })
        return this;
    }

    function removeClass(className){
        elements.forEach(element => {
            element.classList.remove(className);
        })
        return this;
    }

    return{
        elements,
        hideElements,
        showElements,
        on,
        addClass,
        removeClass,
    }
}

const btns = $$('button');
console.log(btns.hideElements().showElements());

function handleClick(event){
    console.log(event.target) 
    btns.addClass('ativo');
}

btns.on('click', handleClick);
