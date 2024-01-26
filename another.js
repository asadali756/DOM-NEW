

let elem = document.getElementById('second');
elem.textContent= "CRICKET!"
elem.style.position = "relative"
elem.style.bottom = "30px"
elem.style.backgroundColor = "cyan"
elem.style.textAlign = "center"
elem.style.padding = "20px"
elem.classList.add('two')
elem.classList.add('three')
elem.classList.remove('three')
elem.id = "hello!"

let myDiv = document.getElementsByClassName('container')
myDiv[0].innerHTML = "BABAR AZAM"
// myDiv[0].style.backgroundColor = "black"
myDiv[0].style.position = "relative"
myDiv[0].style.bottom = "45px"
myDiv[0].style.textAlign = "center"
myDiv[0].style.color = "cyan"
myDiv[0].classList.add("world")
myDiv[0].style.fontSize = "40px"
myDiv[0].id = "pencil"


let newElem = document.createElement('p');
myDiv[0].appendChild(newElem);
newElem.innerHTML = "wow!"


// let pencil = document.createElement('img')
// newElem.appendChild(pencil);

// pencil.src = "https://www.thenews.com.pk/assets/uploads/updates/2023-11-12/1128371_2307410_25_updates.jpg"

let image = document.createElement('img')
newElem.appendChild(image);

image.src = "https://www.thenews.com.pk/assets/uploads/updates/2023-11-12/1128371_2307410_25_updates.jpg"
image.style.height = "400px"
image.style.margin = "auto"




