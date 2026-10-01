// Custom module for managing tasks

// NOTE We're using CommonJS syntax in this practice. If we were using ES modules, we would need to create the package.json (npm init -y) and change "type" to "module".


// TODO Define and export the following functions

function addTask(tasks, task) {
    // Adds a new task to the task list
    tasks.push(task);
    console.log(`Task "${task}" added!`);
}

function listTasks(tasks) {
    // Logs all tasks to the console
    console.log("Current Tasks: ");

    tasks.forEach(
        (task, index) => 
        console.log(`${index + 1}. ${task}`)
    ); 
}
module.exports = { addTask, listTasks }