const buttonInbox = document.querySelector(".button_inbox");

button_inbox.addEventListener("click", function(e){
  e.preventDefault();
  let input_task = inputTask.value;
  userTask.tasks.push(input_task);
  console.log(userTask.tasks)
})