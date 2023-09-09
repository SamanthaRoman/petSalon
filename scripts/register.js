// object literal 
// object literal

let salon = {
    name:"The Fashion Pet",
    phone:"555-555-5555",
    address:{
        street:"12 & Imperial",
        zip:"22900",
        number:"34A"
    },
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"In & Out Grooming"
        },
        {
            name:"Scrappy",
            age:12,
            gender:"Female",
            breed:"Cane Corso",
            service:"Deshedding"
        },
        {
            name:"Milo",
            age:22,
            gender:"Pug",
            breed:"Dane",
            service:"Nail Triming"
        },
    ],
}

// function register(){
//     console.log("registered Pet working");
//     let pet = document.getElementById("txtPetName").value 
//     console.log(pet)
// }


function petsRegistered(){   //create the function

    // lets now display each one.
    var textName; 
    for (let i = 0; i < salon.pets.length; i++) {
        var result = document.getElementById("petsName").innerHTML+=`
        <p class="box-shadow">${i+1}. ${salon.pets[i].name}</p>
        `
        numPets();
        console.log(salon.pets[i].name);       
    }

}
petsRegistered();

function numPets(){
    let total = document.getElementById("totalPets").innerHTML=`
    <p>${salon.pets.length}</p>`
};