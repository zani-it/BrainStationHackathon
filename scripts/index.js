const container = document.querySelector('.char__selector');
console.log(container);



const titleElementWrapper = document.createElement('div');
titleElementWrapper.classList.add('star__title--container');
console.log(titleElementWrapper);


const titleElement = document.createElement('h1');
titleElement.textContent = 'find who is your character';
titleElementWrapper.appendChild(titleElement);

console.log(titleElement);
//

const buttonElement = document.createElement('button');
buttonElement.classList.add('star__button');
buttonElement.textContent = 'In a galaxy far, far away...';
titleElementWrapper.appendChild(buttonElement);

buttonElement.addEventListener('click', function() {
    window.location.href = './pages/characters.html';});

container.appendChild(titleElementWrapper);