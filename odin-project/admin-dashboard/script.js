// use classes for deleting/adding cards to dashboard
// also update local storage to keep dashboard the same?

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
         <h4 class="card-title">${this.title}</h4>
         <div class="text">${this.description}
         </div>
         <div class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                 <title>delete</title>
                 <path
                     d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
             </svg></div>`;

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
        localStorage.getItem('tasks') === null ? tasks = [] : tasks = JSON.parse(localStorage.getItem('tasks'));
        console.log(tasks)
        return tasks;
    }

    static addTask(task) {
        const tasks = Store.getTasks();
        tasks.push(task);

        console.log(task)

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

}


class UI {

    static tryTasks(){
        const sampleTasks = [
            {
                title: 'Code Sprint',
                daysToComplete: 13,
                status: false,
                started: false
            },
            {
                title: 'A/B Test #414',
                daysToComplete: 1,
                status: false,
                started: false
            },
            {
                title: 'Site Speed Audit',
                daysToComplete: 3,
                status: false,
                started: false
            },
            {
                title: 'Refactoring Junior Dev Code',
                daysToComplete: 2,
                status: false,
                started: false
            }
        ]
        const tasks = sampleTasks; 

        setTimeout(()=>{tasks.forEach((task)=> {
            UI.addTaskToStorage(task); 
            Store.addTask(task)});
        }, 200);
    }

    static addTaskToStorage(task){
             
        if(task.status === true){ 
            task.status = 'Read'; 
            task.process = 'success';
            task.summary = 'Completed';
        }
        else { 
            task.status = 'Not read'; 
            task.process = 'failure'; 
            task.summary = 'On progress';
        };
    }
    }

    UI.tryTasks();

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
