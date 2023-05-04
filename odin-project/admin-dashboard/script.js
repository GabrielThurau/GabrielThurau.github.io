// use classes for deleting/adding cards to dashboard
// also update local storage to keep dashboard the same?


// need to display progress bar based on the status of the task. So will first check if the task is in local storage. Then will check to see the percentage of the task that is complete. 


// need to modify the render card method based on the actual sample tasks data below

// need to update tomatoes needed to complete task and refresh or re-render card contents AJAX-style

// 

// selectors

// Local Storage Class
class Store {

    static getTasks() {
        let tasks
        localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks')); // 
        return tasks;
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        console.log(tasks);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static checkLength() {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(element => {
        console.log(element.pomodoros)
       });
        // tomatoCounts = JSON.parse(localStorage.getItem('tasks'));
        let length = tasks.length;
        let randomTasks = document.querySelector('.random-tasks');
        if (length > 0) {
            randomTasks.open = false;
            UI.renderLocalStorage(tasks);
        }
        else {
            randomTasks.open = true;
        }
    }

    static removeTask(taskTitle) {
        const tasks = Store.getTasks();
        tasks.forEach((task, index) => { task.title === taskTitle ? tasks.splice(index, 1) : tasks});
        localStorage.setItem('tasks', JSON.stringify(tasks));
        console.log(JSON.parse(localStorage.getItem('tasks')).length);
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    console.log('dom loaded');
    Store.checkLength();
    setTimeout(() => {
        UI.openModal();
        UI.closeModal();
        UI.deleteCard();
    }, 500);
}); 

class Helper {
    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
       asyncSleeper = async () => {
          await sleep(2000);
          console.log('look at this');
          await sleep(1000);
          console.log('getting fancy now');
      }

    }

class UI {

    static renderLocalStorage(tasks) { 
        setTimeout(()=>{tasks.forEach((task)=> {
           let tomatoCount = task.pomodoros - task.tomatoesSquashed;
            UI.renderCard(task, tomatoCount); // at least this is populating the html, but it needs to do so only after the necessary calculation has happened. 
});
        }, 200);

    }

    // use fetch to get JSON data from random task raw github file. 

    static async tryTasks(){
  
        const endpoint = 'https://raw.githubusercontent.com/GabrielThurau/GabrielThurau.github.io/main/odin-project/admin-dashboard/randomTasks.json';
        const response = await fetch(endpoint)
        const data = await response.json(); 
        console.log(data);

        const tasks = data; 

        setTimeout(()=>{tasks.forEach((task)=> {
            UI.changeTaskValues(task); 
            Store.addTask(task)
            UI.renderCard(task);
});
        }, 200);

    }

     static renderCard(task, tomatoCount) {
                 const createdCard = document.createElement('div');
                 createdCard.classList.add('card');
                 const markup = 
                  `
                  <label for="task-progress">Task Progress: ${tomatoCount} tomatoes left</label>
                  <div class="tomato-meter">🍅🍅🍅🍅🍅</div>
                  <progress class="task-progress" id="task-progress" value="${task.percentage}" max="100"></progress>
                  <h4 class="card-title">${task.title}</h4>
                  <div class="text">${task.description}
                  </div>
                  <div class="delete"><svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <title>delete</title>
                          <path
                              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                      </svg>
                      <svg class="plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>plus</title>
                      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                  </svg>
                      </div>`;
         
              createdCard.innerHTML = markup;
              document.querySelector('.cards').appendChild(createdCard);
             }

    // method to delete card from HTML and local storage
    // once found in local storage delete that item as well. 

    // helper functions
 
    static async deleteCard() {
        let sleep = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
          }
        if (localStorage.getItem('tasks') !== null) {
            let deleteIcons = document.querySelectorAll('.delete-icon')
            const asyncSleeper = async (event) => {
                await sleep(500);
                let closestCard = event.target.closest('.card');
                closestCard.classList.add('fade');
                let taskTitle = closestCard.children[3].textContent;
                Store.removeTask(taskTitle);
                await sleep(1500);
                event.target.closest('.card').remove();
            }
            deleteIcons.forEach(icon => {
                icon.addEventListener("click", asyncSleeper);
            });
        }
    }
 
   static openModal() {
    let dialog = document.querySelector('.task-modal');
    const addTask = document.querySelectorAll('.plus');
    addTask.forEach(element => {
        element.addEventListener("click", () => {
            dialog.showModal();
          });
    });
   }

   static closeModal() {
    let closeButton = document.querySelector('.close-btn');
    let dialog = document.querySelector('.task-modal');
        closeButton.addEventListener("click", () => {
            console.log('clicked')
            dialog.close();
          });
 
   }

    static changeTaskValues(task){
        if(task.status === 'started'){  
            task.progress = true;
            task.percentage = UI.percentage(task.tomatoesSquashed, task.pomodoros);
        }
        else { 
            task.progress = false; 
        };
    }

    static percentage(num, per) {
        return (num / per) * 100;
     } 
    }

    const renderButton = document.querySelector('.render-button');
    const noButton = document.querySelector('.no-button');

    renderButton.addEventListener("click", () => {
        UI.tryTasks();
        setTimeout(() => {
            UI.openModal();
            UI.closeModal();
            UI.deleteCard();
        }, 500);
    });

    noButton.addEventListener("click", () => {
        console.log('do nothing');
    });


