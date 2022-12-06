const getGans = "SELECT * FROM schools";
const getGanById = "SELECT * FROM schools WHERE ID = $1";
const checkGanExists = "SELECT g from schools g WHERE g.ganname = $1";
const addNewGan = "INSERT INTO schools (ganname, loccity, locaddress, agelowmonths, agehighmonths, ratio, website, pictures, owner, contactphone, special, fridayclass) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)";
// const removeGan ="DELETE FROM schools WHERE id = $1";


module.exports = {
    getGans,
    getGanById,
    checkGanExists,
    addNewGan
    // removeGan
};