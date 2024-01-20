function querySel(){
    let element = document.querySelector('.selector')
    element.style.border = '2px solid red';
}

function querySelAll(){
    let elements = document.querySelectorAll('.selector')
    console.log(elements);

    // for(let i=0; i<elements.length; i++) {
    //     elements[i].setAttribute('placeholder', 'Hello!');
    // }

    // elements.forEach(element => {
    //     element.setAttribute('placeholder', 'Hello!');
    // })
}


function getById(){
    let element = document.getElementById(3);
    element.setAttribute('disabled', 'true');
}

function getByName() {
    let elements = document.getElementsByName('login');
    console.log(elements);

    for (let i=0; i<elements.length; i++) {
        elements[i].style.background = 'yellow';
    }
}

function getByTag() {
    let elements = document.getElementsByTagName('button');
    console.log(elements);
    
}