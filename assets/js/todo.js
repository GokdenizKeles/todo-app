addInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    
    const todoItem = document.createElement('li'); 
    
    todoItem.classList.add('todo-item'); 

    todoItem.innerHTML = `
      <input type='checkbox' />
      <h6>${addInput.value}</h6>
      <button class="removeBtn">X</button>`;
    
    countList()
    
    if(addInput.value == '') {
      return
    }
   
    todoList.appendChild(todoItem); 
    addInput.value = ""; 
    const removeBtn = todoItem.querySelector('.removeBtn');
    removeBtn.addEventListener('click', function() {
      todoCount--
      itemCount.innerHTML = todoCount + ' '
      todoItem.remove(); 
    });
  }
});


let todoCount = 1;

function countList() {
   
  if(addInput.value !== '') {
    todoCount++
    return itemCount.innerHTML = todoCount + ' '

  } 
}


removeBtn.addEventListener('click', clearBtn)

function clearBtn() {
  const todoRemove =  document.querySelector('.todo-item')
  
  
  if (todoRemove) {
    todoRemove.remove();
    todoCount--
    itemCount.innerHTML = todoCount + ' '
    return todoRemove;
  }
} 





























function  switchTheme() {
   let themeTheme = document.querySelector('.dark')
   themeTheme.addEventListener('click', function() { 
    document.body.classList.toggle('dark-mode')
   })
   
   let light = document.querySelector('.sun')
   light .addEventListener('click', function() { 
    document.body.classList.toggle('dark-mode')
   })
   
  
  }
  switchTheme()


