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
            breed:"Dane",
            service:"Grooming"
        },
        {
            name:"Goofy",
            age:10,
            breed:"Mixed",
            service:"Vaccines"
        },
        {
            name:"Speedy",
            age:75,
            breed:"Mixed",
            service:"Nails cut"
        },

    ]
}

function displayPetNames(){   //create the function
    // lets now display each one. 
    for (let i = 0; i < salon.pets.length; i++) {
        console.log(salon.pets.length);
        
    }

}

displayPetNames();   //run the function
