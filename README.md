# Notes-app

## About
* This app allows to add and remove notes to a json file via command line arguments in node.js. 
* Yargs package has been used to parse the command line arguments. 
* The file system module has been used for storing the data into JSON format and retrieving it whenever required. 
* Chalk package has been used to enhance the user readability. 

## Functionalities
### Add Note: 
* **Description**: Adds a note with title and body 
* **Command**: node app.js add --title="noteTitle" --body="noteBody"
### Remove Note: 
* **Description**: Removes a note using the note's title
* **Command**: node app.js remove --title="noteTitle"
### List Notes: 
* **Description**: Lists the titles of all the notes saved
* **Command**: node app.js list
### Read Note: 
* **Description**: Reads a note using the note's title
* **Command**: node app.js read --title="noteTitle" 
