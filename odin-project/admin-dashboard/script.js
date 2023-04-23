// use classes for deleting/adding cards to dashboard
// also update local storage to keep dashboard the same?


// need to display progress bar based on the status of the task. So will first check if the task is in local storage. Then will check to see the percentage of the task that is complete. 


// need to modify the render card method based on the actual sample tasks data below

class Card {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
   renderCard() {
        const createdCard = document.createElement('div');
        createdCard.classList.add('card');
        const markup = 
         `
         <label for="task-progress">Task Progress:</label>
         <progress class="task-progress" id="task-progress" value="0" max="100"></progress>
         <h4 class="card-title">${this.title}</h4>
         <div class="text">${this.description}
         </div>
         <div class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
}


let cardN = new Card("Software Sprint", "this is for a software sprint that needs to be shipped ASAP");

cardN.renderCard();


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
    UI.openModal();
    UI.closeModal();
}); 


class UI {

    static tryTasks(){
        const sampleTasks = [
            {
                title: 'Code Sprint',
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
                daysToComplete: 1, // this will be an extra step of complexity for factoring the progress bar. Will have to figure that one out. 
                status: 'started',
                pomodoros: 8,
                tomatoesSquashed: 4,
                percentage: 0
              
            },
            {
                title: 'Site Speed Audit',
                daysToComplete: 3,
                status: 'started',
                pomodoros: 4,
                tomatoesSquashed: 4,
                percentage: 0
            },
            {
                title: 'Refactoring Junior Dev Code',
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
});
        }, 200);
    }

   static openModal() {
    let dialog = document.querySelector('.task-modal');
    const addTask = document.querySelector('.plus');
       addTask.addEventListener("click", () => {
        dialog.showModal();
      });
   }

   static closeModal() {
    let closeButton = document.querySelector('.close-btn');
    let dialog = document.querySelector('.task-modal');
    closeButton.addEventListener("click", () => {
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


    //convert rendercard into this?
    // Add this to sample tasks and add description + title to default fields 


    // static addBookToLibrary(book){
    //     const librarySection = document.querySelector('main');
             
    //     const bookCard = document.createElement('div');
    //     bookCard.classList.add('book-card', 'animated', 'vanishIn');

    //     if(book.status === true){ 
    //         book.status = 'Read'; 
    //         book.process = 'success';
    //         book.summary = 'Completed';
    //     }
    //     else { 
    //         book.status = 'Not read'; 
    //         book.process = 'failure'; 
    //         book.summary = 'On progress';
    //     };

    //     bookCard.innerHTML =  `
    //     <div class="description">
    //         <h2>${book.title}</h2>
    //         <h3>by ${book.author}</h3>
    //         <p>Pages: ${book.pages}</p>
    //     </div>
    //     <div class="action-btns">
    //         <button class="read read-status ${book.process}">${book.status}</button>
    //         <button class="delete">Delete</button>
    //     </div>
    //     <div class="status">${book.summary}</div>`;

    //     librarySection.appendChild(bookCard);

    //     UI.activateBtn();
    //     UI.usageTip();

    //     setTimeout(()=>{bookCard.classList.remove('vanishIn');}, 2000);
    // }

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
