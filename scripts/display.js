// display cards
console.log("display"); // this line - make sure display is linked to html file


function displayCards(){

    let tmp="";
    //travel the pets array **forloop
    for (let i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
        console.log(pet.name)
        // we need the += to add them to it. 
        tmp+=`  
        <div class="pet">
            <h6>Name: ${pet.name}</h6>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
        </div>
        `
    }
        // create the tmp string **`<div>${} </div>` +

    //insert into the HTML ** innerHTML
    // NO + cus it will add all our array again. 
    document.getElementById("pets").innerHTML=tmp;
};

// call the display function in the validation 


function displayTable(){
    let tr="";
    for (let i = 0; i < salon.pets.length; i++) {
        let pet = salon.pets[i];
        tr+=
        `
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
            </tr>
        `
    }
    document.getElementById("petTable").innerHTML=tr;
}


