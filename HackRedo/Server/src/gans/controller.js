const pool = require('../../db');
const queries = require('./queries');

const getGans = (req, res) => {
    pool.query(queries.getGans, (error, results) =>{
        if (error) throw error;
        res.status(200).json(results.rows)
    })
};

const getGanById = (req, res) =>{
    const id = parseInt(req.params.id);
    pool.query(queries.getGanById, [id], (error, results) =>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })

};

const addGan = (req,res) =>{
    const {
        ganname,
        loccity,
        locaddress,
        agelowmonths,
        agehighmonths,
        ratio, website,
        pictures,
        owner,
        contactphone,
        special,
        fridayclass } = req.body;

    pool.query(queries.checkGanExists, [ganname], (error, results) =>{
        if (results.rows.length) {
            res.send("Gan already exists.");
        }
        pool.query(queries.addNewGan, [ganname, loccity, locaddress, agelowmonths, agehighmonths, ratio, website,
            pictures, owner, contactphone, special, fridayclass], (error, results)=>{
                if(error) throw error;
                res.status(201).send("Gan added for Review!");
                console.log("Gan Created")

            })
    });
};

// const removeGan = (req, res) =>{
//     const id = parseInt(req.params.id);
//     pool.query(queries.removeGan, [id], (error, results) => {
//         const noGanFound = !results.rowCount.length;
//         if(noGanFound){
//         res.send("Gan does not exist in Database, could not remove");
//         }
        
//         pool.query(queries.removeGan, [id], (error, results) =>{
//             if(error) throw error;
//             res.status(200).send("Gan removed successfully");
//         })
//     });

// }

module.exports = {
    getGans,
    getGanById,
    addGan
    // removeGan
};
