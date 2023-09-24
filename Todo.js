let input = document.querySelector('.container .input-box input');
let taskBtn = document.querySelector('.container .input-box .add-btn');

let todos = JSON.parse(localStorage.getItem("todo-list") || "[]");
let alltodosBox = document.querySelector('.container .all-todo');

let addTask =()=>{
 if(input.value != ''){ 
  let userInput = input.value;
  let taskInfo = {name:userInput,status:'pending'};
  todos.push(taskInfo);
  localStorage.setItem("todo-list",JSON.stringify(todos))
  input.value = '';
  showTask();
 }
}

let showTask =()=>{
 if(todos){
   let li = '';
   todos.forEach((todo,id)=>{
 let isCompleted = todo.status == 'completed'? 'checked' : ''; 
     li += ` <div class="task">
             <input type="checkbox" name="" id="${id}" onclick="taskcomplete(this)" ${isCompleted}>
             <span class="${isCompleted}">${todo.name}</span>
             <button class="del-btn" onclick="deleteTask(${id})">
               <i class="fa-solid fa-trash"></i>      
             </button>
          </div>`;   
   })
   alltodosBox.innerHTML = li;
 }  
}

let deleteTask =(deleteId)=>{
  todos.splice(deleteId,1);
  localStorage.setItem('todo-list',JSON.stringify(todos));
  showTask();
}

 function taskcomplete(elem){
if(elem.checked){
  elem.nextElementSibling.classList.add('checked');
  todos[elem.id].status = 'completed';
} 
else{
 elem.nextElementSibling.classList.remove('checked');
 todos[elem.id].status = 'pending';
}
localStorage.setItem("todo-list",JSON.stringify(todos));
}

taskBtn.addEventListener('click',addTask);
showTask();
