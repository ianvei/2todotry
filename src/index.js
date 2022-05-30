import Category from "./category"
import CurrentCategory from "./currentcategory"
import PostCategory from "./dom"
import Task from "./task"


let categoryForm = document.getElementById('new-category')
let categoryRoot = document.querySelector('.category-card')
let taskForm = document.getElementById('todo-submit')
let currentCategory = ''

let currentCategories = []

let testCategory = new Category(document.getElementById('new-category'), document.querySelector('.category-card'))
let categoryStatus = new CurrentCategory
let taskDeleter = new PostCategory
categoryStatus.setName('default')

function clearValues(){
  const title = document.getElementById('task-name');
  const date = document.getElementById('task-date');
  const priority = document.getElementById('task-priority');
  title.value = '';
  date.value = '';
  priority.value = '';
}


let addTaskListeners = function(){
  let todoNodeArray = document.querySelectorAll('.todo-item')
  console.log(todoNodeArray)
  for (let todo of todoNodeArray){
    let todoDelete = todo.querySelector('span')
    todoDelete.addEventListener('click', () => {
      console.log('hello')
        todo.remove()
        for(let category of currentCategories){
          for(let task of category.taskList){
            if(task.identifier === todo.id){
              console.log(category)
              let index = category.taskList.indexOf(task)
              category.taskList.splice(index, 1)
            }
          }
        }
        console.log(`I am ${todo.id}`)
    }) 
  }
}

// check if there are categories left
let noCategoryCheck = function(){
  let categoryRoot = document.querySelector('.category-card')
  console.log(categoryRoot.children.length)
  if (categoryRoot.children.length > 0) { 
    return true
  }
  else {return false}
}


// click events
categoryForm.onsubmit = function(e) {
  
  let newCategory = testCategory.createNewCategory()
  let updateCategory = new PostCategory()
  updateCategory.updateCategoryDom(newCategory, categoryStatus);
  currentCategories.push(newCategory)

  let categoryArray = document.getElementsByClassName('category-container')
  
  for (let category of categoryArray){
    
    let categoryP = category.querySelector('p')
    
    categoryP.addEventListener('click', () => {
      for(let category of categoryArray){
        let categoryP = category.querySelector('p')
        if(categoryP.classList.contains('punderline')){
          categoryP.classList.remove('punderline')
        }
      }
      category.classList.remove('punderline')
      let formSubmitButton = document.querySelector('#todo-submit > input[type=submit]:nth-child(4)')
      console.log(formSubmitButton)
      formSubmitButton.removeAttribute('disabled')
      taskDeleter.deleteTaskDom();
      console.log(category.id)
      for(let object of currentCategories){
        if(object.identifier === category.id){
          for(let task of object.taskList){
            taskDeleter.updateTaskDom(task)
            addTaskListeners();
          }
        }
      }
     
    })

    let categoryDeleteArray = document.querySelectorAll('.category-container > span')
    for (let span of categoryDeleteArray){
      span.addEventListener('click', () => {
        if(category.id === span.id){
          category.remove();
          
          // let deleteTasks = 
          let e = document.querySelector(".todo-item-container");
        
          //e.firstElementChild can be used.
          var child = e.lastElementChild; 
          while (child) {
              e.removeChild(child);
              child = e.lastElementChild;
          } 

          // check if there is no category in the list, if so disable the form for submitting a task
          if (!noCategoryCheck()){
            console.log(noCategoryCheck())
            let formSubmitButton = document.querySelector('#todo-submit > input[type=submit]:nth-child(4)')
            console.log(formSubmitButton)
            formSubmitButton.setAttribute('disabled', 'disabled')
          }
        }
      })
    }
  }
  let categoryNameText = document.getElementById('new-category-name')
  categoryNameText.value = ''
  e.preventDefault();
}

taskForm.onsubmit = function(e) {
  console.log('pingas')
  for(let category of currentCategories){
    if(category.identifier === categoryStatus.getName()){
      let newTaskObject = new Task
      let task = newTaskObject.createNewTask()
      category.addTask(task)
      let updateTask = new PostCategory;
      updateTask.updateTaskDom(task)
      console.log(task["task-name"])
      clearValues();
    }  
  }

  addTaskListeners()
  
  e.preventDefault();
}

