const mongoose = require('mongoose')

const Users = mongoose.Schema({
    Family_Name: String,
    Email: String,
    Phone_Number: Number,
    Country_Code: Number,
    Land_Commission_Award: String,
    PalaPala_Sila_Nui: String,
    Site_Place: String,
    Ahupuaa: String,
    District: String,
    Island: String,
    Number_Of_Children: String,
    Mother: String,
    Father: String,
    Age_Of_Mother: String,
    Age_Of_Father: String,
    Fathers_Occupation: String,
    Declaration_Of_Truth: String,
    Time_When_Submitted: Number,
});

module.exports = mongoose.model('FormUsers', Users)