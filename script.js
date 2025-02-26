
document.getElementById('menu-icon').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active'); // Toggle class to show/hide the menu
});

// Updated scroll event to change navbar background color
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (taskTitle) {
        // Create a new task card
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-card');
        taskItem.innerHTML = `
            <h3>${taskTitle}</h3>
            <p>${taskDescription}</p>
            <p>Deadline: ${taskDeadline}</p>
            <button class="delete-task">Delete</button>
            <button class="complete-task">Mark as Complete</button>
        `;
        
        // Append the task card to the task list
        document.getElementById('task-list').appendChild(taskItem);
        
        // Clear the form fields after adding a task
        document.getElementById('taskForm').reset();

        // Handle task deletion
        taskItem.querySelector('.delete-task').addEventListener('click', function() {
            taskItem.remove();
        });

        // Handle marking task as complete
        taskItem.querySelector('.complete-task').addEventListener('click', function() {
            taskItem.classList.toggle('completed'); // Toggle completed class
        });
    }
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElememnts = document.querySelectorAll('.hidden');
hiddenElememnts.forEach((el)=>observer.observe(el));