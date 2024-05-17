const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
const phoneBtn = document.getElementById('phoneNum');
const emailBtn = document.getElementById('email');
const contact = document.getElementById('contact');
const contactLabel = document.getElementById('contact-label')
const dropbox = document.getElementById('dropbox');
const span = document.getElementById('countryCode');
let i = 0;

let formInfo = {};

emailBtn.addEventListener('click', (e) =>{
    contact.value = '';
    contact.setAttribute('name', 'email');
    contact.setAttribute('type', 'email');
    contact.setAttribute('placeholder', 'Email');
    contact.removeAttribute('onkeydown', 'keypress(event)');
    contact.removeAttribute('maxlength', '10');
    contactLabel.textContent = 'Contact/Email';

    const element1 = document.getElementById('divId1');
    const element2 = document.getElementById('inputId1');
    const element3 = document.getElementById('spanId1');

    element1.remove();
    element2.remove();
    element3.remove();
})

phoneBtn.addEventListener('click', async (e) =>{
    contact.value = '';
    contact.setAttribute('name', 'phoneNumber');
    contact.setAttribute('type', 'tel');
    contact.setAttribute('placeholder', 'Phone');
    contact.setAttribute('maxlength', '10');
    contact.setAttribute('minlength', '5');
    contact.setAttribute('onkeydown', 'keypress(event)');
    contactLabel.textContent = 'Contact/Phone Number';
    
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
})

function keypress(event){
    const value = contact.value
    if(event.key !== "1" & event.key !== "2" & event.key !== "3" & event.key !== "4" & event.key !== "5" & event.key !== "6" & event.key !== "7" & event.key !== "8" & event.key !== "9" & event.key !== "0" & event.key !== "Tab" & event.key !== "Backspace" ) event.preventDefault();
}













form.addEventListener('submit', async (e) => {
    e.preventDefault(e);


    const info = new FormData(form);
    const formData = new URLSearchParams(info);

    for(let [key, value] of formData){
        formInfo[key] = value;
    }

    const control = ({
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInfo),
        method: 'POST',
    })

    const res = await fetch('/a', control);
    const json = await res.json();

    console.log(json);


});


