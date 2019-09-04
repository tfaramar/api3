//Exercise: implement suppliers sub-router
const express = request('express');

const router = express.Router();

router.use(express.json());

//implement a GET to /suppliers, respond with a message
router.get('/', (req, res) => {
    res.send('you got to /suppliers/')
})

//implement a GET to /suppliers/name that returns the name sent
router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}`)
})

module.exports = router;



