//Variables for future use

const form = document.getElementById('form');
const phoneBtn = document.getElementById('phoneNum');
const emailBtn = document.getElementById('email');
const contact = document.getElementById('contact');
const contactLabel = document.getElementById('contact-label')
const dropbox = document.getElementById('dropbox');
const span = document.getElementById('countryCode');
const submitBtn = document.getElementById('submit-button');
const formSub = document.getElementById('form-submitted');
const spanGroup = document.getElementById('span-group');
const ccHidden = document.getElementById('cc-hider');
let i = 0;
let cc = false;

//Empty Arrays for json

let formInfo = {};
let statusInfo = {};

//Email contact button selection

emailBtn.addEventListener('click', (e) =>{
    contact.value = '';
    contact.setAttribute('name', 'email');
    contact.setAttribute('type', 'email');
    contact.setAttribute('placeholder', 'Email');
    contact.removeAttribute('onkeydown', 'keypress(event)');
    contact.removeAttribute('maxlength', '10');
    contactLabel.textContent = 'Contact/Email';


    if(cc === true){
    const element1 = document.getElementById('divId1');
    const element2 = document.getElementById('inputId1');
    const element3 = document.getElementById('spanId1');

    element1.remove();
    element2.remove();
    element3.remove(); 
    cc = false;
    } else{
        return
    };


});

//Phone contact button selection

phoneBtn.addEventListener('click', async (e) =>{
    contact.value = '';
    contact.setAttribute('name', 'phoneNumber');
    contact.setAttribute('type', 'tel');
    contact.setAttribute('placeholder', 'Phone');
    contact.setAttribute('maxlength', '10');
    contact.setAttribute('minlength', '5');
    contact.setAttribute('onkeydown', 'keypress(event)');
    contactLabel.textContent = 'Contact/Phone Number';
    
    if(cc === false){
    const root = document.createElement('span');
    const div = document.createElement('div');
    const input = document.createElement('input');

    root.setAttribute('id', 'spanId1');
    input.setAttribute('id', 'inputId1');
    div.setAttribute('id', 'divId1');
    div.textContent = 'Country Code';
    root.setAttribute('class', 'contactCall');
    input.setAttribute('maxlength', '7');   
    input.setAttribute('type', 'number');
    input.setAttribute('name', 'countryCode');
    input.setAttribute('class', 'inputCode');

    span.append(root, input);
    root.append(div); 
    cc = true;
    } else{
        return
    };



});

// Phone number Digit keypress limiter

function keypress(event){
    const value = contact.value
    if(event.key !== "1" & event.key !== "2" & event.key !== "3" & event.key !== "4" & event.key !== "5" & event.key !== "6" & event.key !== "7" & event.key !== "8" & event.key !== "9" & event.key !== "0" & event.key !== "Tab" & event.key !== "Backspace" ) event.preventDefault();
}

// Send Form to API Return Status to redirect to specified pages

form.addEventListener('submit', async (e) => {
    e.preventDefault(e);

    const info = new FormData(form);
    const formData = new URLSearchParams(info);

    for(let [key, value] of formData){
        formInfo[key] = value;
    }

    let control = ({
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInfo),
        method: 'POST',
    })

    const res = await fetch('/a', control);
    statusInfo = await res.json();

    console.log(statusInfo.Status)

    if(statusInfo.Status === 'Recieved'){
        submitBtn.setAttribute('type', 'button')
        window.location = './formFinished/submitted.html'
    } else if(statusInfo.Status === 'Error'){
        alert(`Sorry there has been an error in our server. Please Redo the form`);
    }

});

// reset page if user rolls back to form

formSub.addEventListener('click', (e) => {
    if(statusInfo.Status === 'Recieved'){
    location.reload(e);
}
});