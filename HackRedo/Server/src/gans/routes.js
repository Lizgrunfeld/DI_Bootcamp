const { Router } = require('express');
const controller = require('./controller');


const router = Router();

router.get('/', controller.getGans);
router.get('/:id', controller.getGanById);

router.post('/creategan', controller.addGan);

// app.post("/creategan", (req, res) => {
//     console.log(req.body);
//   });

// router.delete('/:id', controller.removeGan);


module.exports = router;