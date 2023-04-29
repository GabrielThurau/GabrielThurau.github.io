// use classes for deleting/adding cards to dashboard
// also update local storage to keep dashboard the same?


// need to display progress bar based on the status of the task. So will first check if the task is in local storage. Then will check to see the percentage of the task that is complete. 


// need to modify the render card method based on the actual sample tasks data below

// need to update tomatoes needed to complete task and refresh or re-rerender card contents AJAX-style

// 

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

    static clear() {
        localStorage.clear();
        console.log('local storage cleared');
    }

    static remove(storage = JSON.parse(localStorage.getItem('tasks')), key, value) {
           let newStorage;
            console.log('remove function ran');
            const index = storage.findIndex(obj => obj[key] === value);
            if (index >= 0) {
                newStorage = [
                    ...storage.slice(0, index),
                    ...storage.slice(index + 1)
                ]
                localStorage.setItem('newTasks', JSON.stringify(newStorage))
            }

            else {
                newStorage = storage;
            }
    }
}

addEventListener("DOMContentLoaded", (event) => {
    console.log('dom loaded');
    Store.clear();
    // setTimeout(() => {
    //     UI.openModal();
    //     UI.closeModal();
    //     UI.deleteCard();
    // }, 500);
}); 


class UI {

    static tryTasks(){
        const sampleTasks = [
               {
                title: 'Client site audit',
                description: "Check on the site health of existing client page and provide suggestions.",
                daysToComplete: 13,
                status: 'started',
                pomodoros: 4,
                tomatoesSquashed: 2,
                percentage: 0
           
                // how many pomodoros will this take to complete? 
                //https://en.wikipedia.org/wiki/Pomodoro_Technique
            },
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
                tomatoesSquashed: 6,
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
     static renderCard(task) {
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
    // once found in local storage delete that item as well. 
 
    static deleteCard(task) {
        if (localStorage.getItem('tasks') !== null) {
        let storage = JSON.parse(localStorage.getItem('tasks'));
        console.log(storage);
            let deleteIcons = document.querySelectorAll('.delete-icon')
            deleteIcons.forEach(icon => {
                icon.addEventListener("click", (event) => {
                    setTimeout(() => { // turn into async instead to ensure that I have node information before card is deleted
                        let closestCard = event.target.closest('.card');
                        closestCard.classList.add('fade');
                        let taskTitle = closestCard.children[3].textContent;
                        const taskToDelete = storage.findIndex(element => element.title === taskTitle);
                        Store.remove(storage, "title", taskTitle);
                      

                        // console.log(storage.findIndex(taskToDelete));
                        //try using the below for manipulating local storage

                    //   let myStorage = storage.filter(function( obj ) {
                    //         return obj.id !== id;
                    //       });


                        // need to figure out how to actually get the key of the local storage object here and delete it that way
                        // if (taskToDelete) {
                        //     console.log('true');
                        //     storage.forEach(element => {
                        //     console.log(element);
                        //     let keys_1 = Object.values(element);
                        //     console.log(keys_1);
                        //   });
                        // }
                    }, 500);

                    setTimeout(() => { // turn into async instead to ensure that I have node information before card is deleted
                        event.target.closest('.card').remove();
                        // let allStorage = JSON.parse(localStorage.getItem('tasks'));
                        // console.log(allStorage);
                    }, 2000);
                  
                  });
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

    const renderButton = document.querySelector('.render-button');
    const noButton = document.querySelector('.no-button');

    renderButton.addEventListener("click", (event) => {
        UI.tryTasks();
        setTimeout(() => {
            UI.openModal();
            UI.closeModal();
            UI.deleteCard();
        }, 500);
    });

    noButton.addEventListener("click", (event) => {
        console.log('do nothing');
    });

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
