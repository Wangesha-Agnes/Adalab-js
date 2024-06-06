// function addition(array){
//     let sum = 0
//     for(let i=0;i<array.length;i++){
//         sum +=array[i]
//     }
//     console.log(sum)
// }
// // let numbers=[1,2,3,4,5,6]
// // addition(numbers)

// class Task {
//     constructor(taskName, priority, dueTime) {
//         this.taskName = taskName;
//         this.priority = priority;
//         this.dueTime = new Date(dueTime);
//     }

//     // Method to compare tasks based on priority and due time
//     compareTo(otherTask) {
//         if (this.priority!== otherTask.priority) {
//             return this.priority - otherTask.priority;
//         }
//         return this.dueTime.getTime() - otherTask.dueTime.getTime();
//     }
// }

// // Function to sort tasks array
// function sortByPriority(tasks) {
//     return tasks.sort((a, b) => a.compareTo(b));
// }

// // Main function to manage tasks
// function manageTasks() {
//     let tasks = [];

//     // Example tasks
//     tasks.push(new Task("Buy groceries", 3, "2024-05-20"));
//     tasks.push(new Task("Finish report", 1, "2024-05-18"));
//     tasks.push(new Task("Call client", 2, "2024-05-19"));

//     // Sort tasks by priority and due time
//     const sortedTasks = sortByPriority(tasks);

//     // Output sorted tasks
//     console.log("Sorted Tasks:");
//     sortedTasks.forEach(task => console.log(`${task.taskName} (${task.priority}) - Due: ${task.dueTime}`));
// }

// manageTasks();





// // function checkSum(arr){
// //     let sum = 0
// //     for(let num of arr){
// //         sum +=1
// //     }
// // }
// // return sum

// function checkVowelsAndConsonant(word){
//     let vowels = ['a','e','i','o','u'];
//     let words = word.toLowerCase().split('')
//     for (let i=0; i<words.length; i++){
//     if(vowels.includes(words[i])){
//     console.log (`${words[i]} is a vowel`)
//     }

//     else{
//         console.log(`${words[i]} is a consonant`)
//     }
// }
// }
// checkVowelsAndConsonant('Agnes')

// function isPrime(num) {
//     if (num < 2) 
//     return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(29)); // Output: true
// console.log(isPrime(33)); // Output: false

// // function yearsUntilRetirement(x){
// //     let retirement=50
// //     let currentAge = 50-x
// //     const retirements=retirementAge.reduce(retirementAge)
// // }


// // class Bank{
// //     constructor(){
// // this.balance=800000
// // }
// // checkBalance(accountNo){
// // console.log(`${accountNo}current balance is ${this.balance}`);
// // }
// // deposit(amount){
// // const depositedAmount= this.balance+amount
// // console.log(`You have withdrawn${amount} and the current balance is ${withdrawnAmount}`);
// // }
// // withdraw(amount){
// // if (this.balance>=amount){
// //      const withdrawnAmount=this.balance-amount;
// // console.log(`You have withdrawn ${amount} and the current balance is ${withdrawnAmount}`);
// //    }
// //    else{
// //        console.log(`You have insufficient balance. Please TOP UP!`);

// // }
// // }
// // }
// // const adam = new Bank()
// // adam.checkBalance("9876876")
// // adam.deposit(2000)
// // adam.withdraw(10800)

// // class UserAuthentication {
// //     constructor() {
// //         this.user-authentication details = [];
 //     }
//     register(username, password) {
 //         let alphaNumeric = /[a-z0-9]/;
 //         const credentials = { userName: userName, password: password };
 //         if (credentials.password.match(alphaNumeric)) {
 //             this. user-authentication details.push(credentials);
 //             console.log("Credentials added successfully.");
 //         } else if(!credentials.password.match(alphaNumeric)) {
//             console.log("The password should include both numbers and letters.");
 //         }
//     }
// }
// const userAuthenticationDetails = new UserAuthentication();
// const userName = "John";
// const password = "JohnOn123";
// const password = "john123"
 // userAuthenticationDetails.register(userName, password);

 // Create dictionaries for reserved and available rooms
// const reservedRooms = {
//     101: { name: "Alice", checkInDate: "2024-05-15" },
//     102: { name: "Bob", checkInDate: "2024-05-16" },
// };

// const availableRooms = {
//     103: "Single",
//     104: "Double",
//     105: "Suite",
// };

 // Function to check if a room is reserved
// function isRoomReserved(roomNumber) {
//     return reservedRooms.hasOwnProperty(roomNumber);
// }

// // Function to display available rooms
// function displayAvailableRooms() {
//     console.log("Available rooms:");
// }

// console.log(isRoomReserved(105))

// class taskManager{
//     constructor(){
//         this.listOfTasks=[]

//     }
//     addTasks(tasks,urgency){
//         const newTask={
 //             tasks:tasks,
//             urgency:urgency
//         }
//         this.listOfTasks.push(newTask)
//         this.scheduleTasks()

        
//     }


// }

 //    scheduleTasks(){
 //     this.listOfTasks.forEach(task => {
 //         console.log(`scheduling ${newTask.tasks}`);

//    } )
 // ``}

// const manager= new taskManager()
 // addTasks.
   
// class TaskManager {
//     constructor() {
//         this.tasks = [];
//     }

//     addTask(taskName, urgency, callback) {
//         const task = { name: taskName, urgency };
//         this.tasks.push(task);
//         this.executeTasks();
//     }

//     executeTasks() {
//         this.tasks.forEach(task => {
//             console.log(`Executing ${task.name}`);
//         });
//     }
// }

// const scheduler = new TaskManager();

// scheduler.addTask("High Urgency Task", "High", () => console.log("Executing High Urgency Task"));
// scheduler.addTask("Low Urgency Task", "Low", () => console.log("Executing Low Urgency Task"));

// console.log("Scheduling tasks...");


function Task(name, priority) {
    this.name = name;
    this.priority = priority;
    
}

const tasks = [
    new Task('Codding website', 3),
    new Task('Finish report', 1),
    new Task('Going to the market', 2),
    new Task('Eating', 3)

];


tasks.sort((a, b) => a.priority - b.priority);


console.log('Sorted Tasks:');
tasks.forEach(task => console.log(`${task.name} (${task.priority}) `));


