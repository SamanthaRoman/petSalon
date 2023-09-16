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
let x = 0;
function Pet(name,age,gender,breed,service,phone){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.phone=phone;
    this.id=x++ //this automatically adds the id so we can use this
    // to delete the element when we click our delete button.
}
// create inputs const variables so we can reuse them to clear the form ar for form validation
// so we aren't typing over and over. 
const inputName = document.getElementById("txtName");
const inputAge = document.getElementById("txtAge");
const inputGender = document.getElementById("txtGender");
const inputBreed = document.getElementById("txtBreed");
const inputService = document.getElementById("txtService");
const inputPhone = document.getElementById("txtPhoneNum");

function isValid(aPet){
    let validation = true; // assuming its all fine. 
    // now we need to have them remove the error class upon validation
    inputName.classList.remove("alert-error");
    inputAge.classList.remove("alert-error");
    inputBreed.classList.remove("alert-error");
    inputGender.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    inputPhone.classList.remove("alert-error");

    if(aPet.name==""){
        validation=false;
        // alert("Please add your pets name");;
        inputName.classList.add("alert-error"); // this line displays the alert error
    }
    if(aPet.age==""){
        validation=false;
        // alert("Please add your pets name");;
        inputAge.classList.add("alert-error"); // this line displays the alert error
    }
    if(aPet.breed==""){
        validation=false;
        // alert("Please add your pets name");;
        inputBreed.classList.add("alert-error"); // this line displays the alert error
    }
    if(aPet.gender==""){
        validation=false;
        // alert("Please add your pets name");;
        inputGender.classList.add("alert-error"); // this line displays the alert error
    }
    if(aPet.service==""){
        validation=false;
        // alert("Please add your pets name");;
        inputService.classList.add("alert-error"); // this line displays the alert error
    }
    if(aPet.phone==""){
        validation=false;
        // alert("Please add your pets name");;
        inputPhone.classList.add("alert-error"); // this line displays the alert error
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
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputPhone)
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
        displayCards();
        displayTable();
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
    inputPhone.value="";
}

function deletePet(petId){
    // console.log("deleting", petId); 
    let deleteIndex;
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        if(petId==pet.id){
            deleteIndex = i; // assigning the id to the variable deleteIndex. 
        }
    }
    document.getElementById(petId).remove(); //remove from html
    salon.pets.splice(deleteIndex,1);
    // splice delete that id and only one element. 
}

function search(){
    let inputSearch = document.getElementById("txtSearch").value;
    console.log(inputSearch);
    for(let i=0;i<salon.pets.length;i++){
        let pet=salon.pets[i];
        if(inputSearch.toLowerCase()==pet.name.toLowerCase()){
            // what do you want to do it if its found
            document.getElementById(pet.id).classList.add("alert-search");
        }else{
            document.getElementById(pet.id).classList.remove("alert-search");
        }
        ;
}

}
function init(){
    let pet1 = new Pet("Scooby", 60, "Male", "Dane", "Grooming", "223-454-6577");
    let pet2 = new Pet("Scrappy", 30, "Female", "Corso", "Nail Trim",  "122-437-0098");
    let pet3 = new Pet("Milo", 10, "Male", "Yorkie", "Vaccines", "457-098-6543");
    // push your pets into the pets array
    salon.pets.push(pet1,pet2,pet3);
    console.log(pet1,pet2,pet3); // display them in console.
    displayCards();
    displayTable();
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