const list = document.getElementById('info-list');
const p = document.getElementById('p');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');
const p13 = document.getElementById('p13');
const p14 = document.getElementById('p14');
let data = {};


async function getData() {
    const response = await fetch('/a');
    data = await response.json();
    
    console.log(data)

    p.textContent = data.name
    p1.textContent = data.email
    p2.textContent = data.land_commission_award
    p3.textContent = data.royal_patent
    p4.textContent = data.location
    p5.textContent = data.ahupuaa
    p6.textContent = data.district
    p7.textContent = data.island
    p8.textContent = data.keiki
    p9.textContent = data.mothers_race
    p10.textContent = data.fathers_race
    p11.textContent = data.mothers_age
    p12.textContent = data.fathers_age
    p13.textContent = data.fathers_occupation
    p14.textContent = data.my_declaration

}
getData();