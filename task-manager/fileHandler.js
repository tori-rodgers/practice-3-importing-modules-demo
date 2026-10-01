// Custom module for saving and reading tasks from a file 

const fs = require("fs"); 

// TODO Use the fs (File System) built-in module to define and export the following functions

function saveTasks(filePath, tasks) {
    // Writes the tasks to a file in JSON format

     // - filePath: the location/name of the file to write to (e.g. "tasks.json"), defined in app.js
    // - tasks: the array of task strings to save

    fs.writeFileSync(filePath, JSON.stringify(tasks));
    // writeFileSync() creates or overwrites the file at filePath
    // JSON.stringify() converts the JS array → a JSON string so it can be stored as text
    // e.g. ["Buy milk", "Walk dog"] → '["Buy milk","Walk dog"]'

    console.log("Tasks saved successfully!");

}


function loadTasks(filePath) {
    // - filePath: the location of the file to read from (e.g. "tasks.json")

    if (fs.existsSync(filePath)) {
        // existsSync() checks if the file exists before trying to read it
		// Skips the read entirely if the file isn't there yet (e.g. first run)

        const data = fs.readFileSync(filePath, "utf-8");
        // readFileSync() reads the file and returns its contents as a string
		// "utf-8" tells Node to decode the raw bytes into readable text

        return JSON.parse(data); // JSON.parse() converts the JSON string back into a JS array

    } else {
        return []; 
    }
}
/* 
1. Reads and parses the tasks from the file. 
2. If the line doesn't exist, return an empty array. */

// Common JS syntax
module.exports = { saveTasks, loadTasks };

/* ES syntax
export { saveTasks, loadTasks};

OR 

add export in front of the function name:
export function saveTasks */
