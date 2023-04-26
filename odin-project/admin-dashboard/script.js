// use classes for deleting/adding cards to dashboard
// also update local storage to keep dashboard the same?


// need to display progress bar based on the status of the task. So will first check if the task is in local storage. Then will check to see the percentage of the task that is complete. 


// need to modify the render card method based on the actual sample tasks data below

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
        // console.log(task)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    static clear() {
        localStorage.clear();
        console.log('local storage cleared');
    }

}

addEventListener("DOMContentLoaded", (event) => {
    console.log('dom loaded');
    Store.clear();
    setTimeout(() => {
        UI.openModal();
        UI.closeModal();
        UI.deleteCard();
    }, 500);
}); 


class UI {

    static tryTasks(){
        const sampleTasks = [
            {
                title: 'Code Sprint',
                description: "New coding application for showing customers purchased since x date",
                daysToComplete: 13,
                status: 'started',
                pomodoros: 4,
                tomatoesSquashed: 4,
                percentage: 0
           
                // how many pomodoros will this take to complete? 
                //https://en.wikipedia.org/wiki/Pomodoro_Technique
            },
            {
                title: 'A/B Test #414',
                description: "Adding an AJAX cart to client site",
                daysToComplete: 1, // this will be an extra step of complexity for factoring the progress bar. Will have to figure that one out. 
                status: 'started',
                pomodoros: 8,
                tomatoesSquashed: 4,
                percentage: 0
              
            },
            {
                title: 'Site Speed Audit',
                description: "Figure out what's causing homepage rendering flickering",
                daysToComplete: 3,
                status: 'started',
                pomodoros: 4,
                tomatoesSquashed: 4,
                percentage: 0
            },
            {
                title: 'Refactoring Junior Dev Code',
                description: "Remove all settimeouts and replace with mutation observers where possible",
                daysToComplete: 2,
                status: 'started',
                pomodoros: 100,
                tomatoesSquashed: 4,
                percentage: 0
            }
        ]
        const tasks = sampleTasks; 

        setTimeout(()=>{tasks.forEach((task)=> {
            UI.addTaskToStorage(task); 
            Store.addTask(task)
            UI.renderCard(task);
});
        }, 200);

    }
     static  renderCard(task) {
                 let tomatoCount = 5;
                 const createdCard = document.createElement('div');
                 createdCard.classList.add('card');
                 const markup = 
                  `
                  <label for="task-progress">Task Progress: ${tomatoCount} tomatoes left</label>
                  <span class="tomato-meter">🍅🍅🍅🍅🍅</span>
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

    //first delete card from HTML

    static deleteCard(task) {
        if (localStorage.getItem('tasks') !== null) {
        let storage = JSON.parse(localStorage.getItem('tasks'));
        console.log(storage);
        }
            let deleteIcons = document.querySelectorAll('.delete-icon')
            deleteIcons.forEach(icon => {
                icon.addEventListener("click", (event) => {
                    setTimeout(() => {
                        event.target.closest('.card').classList.add('fade');
                    }, 500);

                    setTimeout(() => {
                        event.target.closest('.card').remove();
                    }, 1000);
                  
                  });
            });
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

    static addTaskToStorage(task){
        if(task.status === 'started'){  
            task.progress = true;
            task.percentage = UI.percentage(task.tomatoesSquashed, task.pomodoros);
           // need to then update a progress bar
        }
        else { 
            task.progress = false; 
        };
    }

    static percentage(num, per) {
        return (num / per) * 100;
     } 
    }

    UI.tryTasks();

// need to add delete card function to UI class
    
//     static removetask(taskTitle) {
//         const tasks = Store.gettasks();

//         tasks.forEach((task, index) => { task.title === taskTitle ? tasks.splice(index, 1) : tasks});
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }

//     static updatetaskstatus(taskTitle, status) {
//         const tasks = Store.gettasks();

//         tasks.forEach((task) => { 
//             if(task.title !== taskTitle) return;
//             task.status = status;
//         });

//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
