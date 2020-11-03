import express from 'express';

const router = express.Router();

const results = { results : [
    {"breed": "husky",
    "name":"Stephen",
    "age": 2, 
    "location" : "52101", 
    "picture": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/26155623/Siberian-Husky-standing-outdoors-in-the-winter.jpg",
    "description": "This is the best husky in the world. Loyal, Friendly, and Crazy, he will be the greatest partner you could ever ask for"},
    {"breed": "bulldog",
    "name":"Johnny",
     "age": 5, 
    "location" : "20000", 
    "picture": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg",
    "description": "This is the best bulldog in the world. Loyal, Friendly, and Crazy, he will be the greatest partner you could ever ask for."},
    {"breed": "poodle",
    "name":"Karen",
    "age": 9, 
    "location" : "10000", 
    "picture": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225538/Poodle-On-White-03.jpg",
    "description": "This is the best poodle in the world. Loyal, Friendly, and Crazy, he will be the greatest partner you could ever ask for."},
    {"breed": "husky",
    "name":"Emily",
    "age": 9, 
    "location" : "52101", 
    "picture": "https://www.thesprucepets.com/thmb/VJpRmcCyJCRbVmox-yx3FqUJWZ8=/1000x1000/smart/filters:no_upscale()/breed_profile_husky_1118000_hero_690-0158e427a4734e0fae59e2e91a7fe6e4.jpg",
    "description": "This is the best poodle in the world. Emily is Loyal, Friendly, and Kind, she will be the greatest partner you could ever ask for."}
    ]
    
}
// all routes start with /animals
router.get('/', (req, res) => {
    res.send(results);

});

export default router;