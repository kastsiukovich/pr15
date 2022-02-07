function clearPreloader() {
    var preloader = document.querySelector('#preloader');
    var content = document.querySelector('#site');
    preloader.style.display = "none";
    content.style.opacity = "1";
}
setTimeout(clearPreloader, 1000);


// task1
var quad = document.querySelector('#quad');

quad.addEventListener('dblclick', function (e) {
    console.log(e.target)
    quad.style.backgroundColor = 'blue';
})

// task2
var images = document.querySelector('.club-image');

images.addEventListener('click', function (e) {
    alert(e.target.src)
})

// task3
var linkV = document.querySelector('.vrapper1');
var span = document.getElementsByClassName('.one')
linkV.addEventListener('mouseover', function (e) {
    // console.log(e.target.tagName === "A")
    if (e.target.tagName === "A") {
        var val = e.target.href;
        console.log(val)
        e.target.nextElementSibling.innerText = ` ${val}`;
    }
})
// task4
var card = document.querySelector('.card');
var body1 = window;

body1.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === "Escape") {
        card.style.display = 'none';
    };
})
// task5

var selec1 = document.getElementsByClassName('browser-default')[0];
var text = document.querySelector('#current-result');
selec1.addEventListener('change', function (e) {
    text.innerHTML = e.target.value;
})
// task6







/**Task7 */

var searchList = [
    'Мишка',
    'Осьминожка',
    'Акула',
    'Авокадо',
    'Моль Молли',
    'Альпака',
    'Пингвиненок',
    'Моль',
    'Пачакун',
    'Ленивец'
]



// Функция рандома
function randomMy(a, b) {
    console.log(Math.floor(Math.random() * (b - a + 1)) + a)
}
randomMy(1, 50)





