import express from 'express';

const router = express.Router();

const animals = { results : [
    {"animal": "dog", "breeds" : ["husky", "bulldog", "poodle"]},
    {"animal": "cat", "breeds" : ["persian", "ragdoll", "sphynx"]},
    {"animal": "fox", "breeds" : ["fennec", "red", "artic"]}
    ]
    
}
// all routes start with /animals
router.get('/', (req, res) => {
    res.send(animals);

});

export default router;