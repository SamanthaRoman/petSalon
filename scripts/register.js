// object literal 

let salon = {
    name:"The Fashion Pet",
    phone:"555-555-5555",
    address:{
        street:"12 & Imperial",
        zip:"22900",
        number:"34A"
    },
    // name:"Scooby",
    // age:60,
    // gender:"Male",
    // breed:"Dane",
    // service:"In & Out Grooming"
    pets:[],
}

// constructor funciton with all the properties we want to assign to the function.
// then we pass each property to the function so we can test it and hardcode the values 
// using the init function. 
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
// create inputs const variables so we can reuse them to clear the form ar for form validation
// so we aren't typing over and over. 
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputGender = document.getElementById("txtGender");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");

function isValid(aPet){
    let validation = true; // assuming its all fine. 

    if(aPet.name==""){
        validation=false;
        alert("Please add your pets name");;
    }

    return validation;

    // if the pet name is empty display an alert. we will call this function inside the register 
    // so when the button is clicked if this is empty the alert will display to the user. 
}
function register(){
// provide an opportunity for the user to register their own pet. 
// 1. create your form on the register html first with a button. 
// 2. create your button with a click event calling your register function. 
        // then what do you want when you click the button. 
// 3. get the values from the HTML by first creating a const variable and storing the input there
        // so we can reuse them. 
// 4. then console.log the values to display them on the console.
    console.log(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value)
// 5. create a new pet create a let variable to store the new pet into. 
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value)
    console.log(newPet, "Im the new pet")
// 6. push the new pet to the pets array inside the salon
    // salon.pets.push(newPet);
// now to fix the user experience we need to now clear the form inputs by creating another 
// function to clear inputs field.
// 7. creat the cleariputs function.
// 8. call the clear inputs function inside the register funciton so once it is clicked and all data 
        // saved it will automatically call the clear inputs function and clear it for the user. 
    // clearInputs();
// create a validation function to make sure that each element has data.
    if(isValid(newPet)==true){
        //now we can push the new pet to the array and then clear the input.
        salon.pets.push(newPet);
        clearInputs();
    }
}

function clearInputs(){
    // use the variable for each input and add a clear value string.
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
}

function init(){
    let pet1 = new Pet("Scooby", 60, "Male", "Dane", "Grooming");
    let pet2 = new Pet("Scrappy", 30, "Female", "Corso", "Nail Trim");
    let pet3 = new Pet("Milo", 10, "Male", "Yorkie", "Vaccines");
    // push your pets into the pets array
    salon.pets.push(pet1,pet2,pet3);
    console.log(pet1,pet2,pet3); // display them in console.
}

console.log(salon.pets); // display the array with pets added to it.

window.onload=init; // waiting to render the HTML then work java script 


// my original code
// function petsRegistered(){   //create the function

//     // display each one.
//     for (let i = 0; i < salon.pets.length; i++) {
//         document.getElementById("petsName").innerHTML+=`
//         <p class="box-shadow">${i+1}. ${salon.pets[i].name}</p>
//         `
//         numPets();
//         console.log(salon.pets[i].name);       
//     }

// }
// petsRegistered();

// function numPets(){
//     document.getElementById("totalPets").innerHTML=`
//     <p>${salon.pets.length}</p>`
// };