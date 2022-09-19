const express = require('express');
const router =express.Router()

let {createCollege,getCollege} = require('../Controllers/CollegeControllers')
let {createIntern} = require('../Controllers/InternControllers')

router.post('/colleges',createCollege)
router.post('/interns',createIntern)
router.get('/collegeDetails',getCollege)
module.exports = router;
