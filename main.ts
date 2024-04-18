import inquirer from "inquirer";

const input=await inquirer.prompt([
    {
        message:"Enter your sentence:\n",
        type:"String",
        name:"sentence",
    }
]);
const counter=input.sentence.trim().split(" ");
console.log(`Words in your sentence are : ${counter.length}`);
