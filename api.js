const express = require('express');
const mongoose = require('mongoose');
const User = require('./schema/schema');
require('dotenv').config();
const url = process.env.MONGODB_URI;
const r = express();

let data = {};

r.listen(5959, console.log('listening at port 5959'))

r.use(express.static('server/form'))
r.use(express.json({limit: '50mb'}))


async function connDB(){
    await mongoose.connect(MONGODB_URI);
    console.log('Database connected')
}
connDB();

r.post('/a', async (req, res) => {
    data = req.body;

    if(data.name !== undefined || data.email !== undefined ){
    res.json({
        Status: 'Recieved'
    })
    } else{
        res.json({
            Status: 'Error'
        })
    }



    const userSave = new User({
        Family_Name: data.name,
        Email: data.email,
        Phone_Number: data.phoneNumber,
        Country_Code: data.countryCode,
        Land_Commission_Award: data.land_commission_award,
        PalaPala_Sila_Nui: data.royal_patent,
        Ahupuaa: data.ahupuaa,
        Site_Place: data.location,
        District: data.district,
        Island: data.island,
        Number_Of_Children: data.keiki,
        Mother: data.mothers_race,
        Father: data.fathers_race,
        Age_Of_Mother: data.mothers_age,
        Age_Of_Fathher: data.fathers_age,
        Fathers_Occupation: data.fathers_occupation,
        Declaration_Of_Truth: data.My_Declaration,

    });
    await userSave.save();
    console.log(data)
    console.log('User ' + data.name + ' saved to the database')
});

r.get('/a', (req, res) => {
    res.json(data)
})
