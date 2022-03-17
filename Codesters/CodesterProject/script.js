"use strict"

document.addEventListener("DOMContentLoaded", function(){
const block2 = document.querySelector("#block2");
const daily = document.querySelectorAll(".daily");
const calendar = document.querySelectorAll(".calendar");
const inbox = document.querySelectorAll(".inbox");
const inputTask = document.querySelector(".input_inbox");
const addTask = document.querySelector("form");
const buttonInbox = document.querySelector(".button_inbox");
const taskList = document.querySelector(".list");

const userTask = {
        tasks: [
            
        ]
    };
calendar.forEach(item =>{
  item.addEventListener('click', function(){
    document.location.href = "Calendar.html";
  })
})

daily.forEach(item =>{
  item.addEventListener('click', function(){
    document.location.href = "Daily.html";
  })
})

inbox.forEach(item =>{
  item.addEventListener('click', function(){
    document.location.href = "Inbox.html";
  })
})


buttonInbox.addEventListener("click", function(e){
  e.preventDefault();
  let inputask = inputTask.value;
  userTask.tasks.push(inputask);
  console.log(userTask.tasks);
});

function createTaskList(tasks, parent) {
        tasks.forEach((task, i) => {
            parent.innerHTML += `
    <li class="task"> ${i + 1} ${task}</li>
    `;
  });
}

createTaskList(userTask.tasks, taskList);


})



