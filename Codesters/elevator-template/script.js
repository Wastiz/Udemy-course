const minFloor = -1;
const maxFloor = 2;
var floor = -1;
var people = 0;
const arrows = document.querySelectorAll('.btn-elevator');
const elevator = document.querySelectorAll('.img-elevator');
const floor1 = document.getElementById('floor--1');
const floor2 = document.getElementById('floor-0');
const floor3 = document.getElementById('floor-1');
const floor4 = document.getElementById('floor-2');
const text = document.getElementsByClassName("people-floor");


function elevatorF() {
    if (floor == -1) {
        floor1.src = "elevator.png";
        elevator[1].src ="elevator-door.png";
        elevator[2].src ="elevator-door.png";
        elevator[3].src ="elevator-door.png";
    } else if (floor == 0) {
        floor2.src = "elevator.png";
        elevator[0].src ="elevator-door.png";
        elevator[2].src ="elevator-door.png";
        elevator[3].src ="elevator-door.png";
    } else if (floor == 1) {
        floor3.src = "elevator.png";
        elevator[0].src ="elevator-door.png";
        elevator[1].src ="elevator-door.png";
        elevator[3].src ="elevator-door.png";
    } else if (floor == 2) {
        floor4.src = 'elevator.png';
        elevator[0].src ="elevator-door.png";
        elevator[1].src ="elevator-door.png";
        elevator[2].src ="elevator-door.png";
    } else {
        console.log('error');
    }
}
function randomPeople (){
    if (floor == -1){
        people = Math.floor(Math.random() * 10);
        console.log(people);
        text[0].innerHTML = people;
    } else if (floor == 1){
        people = Math.floor(Math.random() * 10);
        console.log(people);
        text[2].innerText = people;
    } else if (floor == 2){
        people = 0;
        console.log(people);
        text[3].innerHTML= people;
    }
}
arrows[0].addEventListener('click', function () {
    floor--;
    elevatorF();
    randomPeople();
});
arrows[1].addEventListener('click', function () {
    floor++;
    elevatorF();
    randomPeople();
});