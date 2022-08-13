let inputWraper = document.querySelector('.input-wraper');
let addButton = document.querySelector('.add-list');
let ul = document.querySelector('.ul');
let formWraper = document.querySelector('.form-wraper')
let clearAll = document.querySelector('.clearall')

addButton.textContent = 'add';

formWraper.addEventListener('submit', function(event) {
    event.preventDefault();
    let value = inputWraper.value;
    if (value == ' ') {
        alert('text is required');
        return;
    }
    inputWraper.value = ' ';
    let li = document.createElement('li')
    li.textContent = value;
    let deleteIcon = document.createElement('span');
    deleteIcon.setAttribute('class', 'span')
    deleteIcon.addEventListener('click', function() {
        li.remove();
    })

    ul.appendChild(li);
    li.appendChild(deleteIcon)
})
    clearAll.addEventListener('click', function() {
        ul.innerHTML = ' '
    })

    let navigation = document.getElementById('navs')
    let burgerBar = document.getElementById('bar')
    let ulMenu = document.querySelector('.ulmenu')


    burgerBar.addEventListener('click', function(){
        navigation.classList.toggle('active')
    })


    burgerBar.addEventListener('click', function(){
        burgerBar.classList.toggle('active')
        ulMenu.classList.toggle('active')
    })

    

