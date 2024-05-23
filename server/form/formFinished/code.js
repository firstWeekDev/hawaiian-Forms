const parag = document.getElementById('parag')
const parag1 = document.getElementById('parag1')
const parag2 = document.getElementById('parag2')

async function finsihedForm(){

    const response = await fetch('/a');
    const data = await response.json();

    console.log(data);

    if(data.phoneNumber != undefined){
        parag.textContent = `Thank you for filling this form ` 
        parag1.textContent += `we'll contact you with your phone number at ${data.countryCode}+ ${data.phoneNumber} If further input is needed ` 
        parag2.textContent += `Have a happy Jesus Day ` 
    } else if(data.email = data.email){
        parag.textContent = `Thank you for filling this form ` 
        parag1.textContent = `we'll contact you with your email at ${data.email} If further input is needed ` 
        parag2.textContent = `Have a happy Jesus Day ` 
    }

};
finsihedForm();