// Main file that will import and use the other modules

// TODO Import the path built-in module

const path = require("path");

// TODO Import custom modules

const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

// TODO Define the file path for tasks.json
const filePath = path.join(__dirname, "tasks.json");
// __dirname refers to the directory where the current script (app.js) lives. Node.js provides it automatically for each module.

// TODO Load the existing tasks from tasks.json
let tasks = fileHandler.loadTasks(filePath); 

// TODO Add new tasks to the list
// taskManager.addTask(tasks, "Fold the laundry");
// taskManager.addTask(tasks, "Walk the dog");

// TODO List all the tasks
taskManager.listTasks(tasks);

// TODO Save the updated task list back to the file
fileHandler.saveTasks(filePath, tasks);





/* ES Syntax
import path from "node:path";
import { fileURLToPath } from "node:url";
import { addTask, listTasks } from "./taskManager.js";
import { loadTasks, saveTasks } from "./fileHandler.js";

📝 NOTE - Node.js doesn't provide __dirname in ES modules. The const recreates the same value from the current module's URL
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, "tasks.json");

let tasks = loadTasks(filePath);

addTask(tasks, "Complete Node.js lesson");
addTask(tasks, "Review modular programming");

listTasks(tasks);

saveTasks(filePath, tasks); */