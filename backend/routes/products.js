const express = require('express');
const multer = require('multer');
const Product = require('../models/product');

const router = express.Router();

const upload = multer({dest : 'uploads/'});

router.post('/product/add', upload.array('pictures', 6), async(req, res) => {
    const {name , price, quantity , userId } = req.body;

    if(!name || !price || !quantity){
        return res.status(400).json({error : 'All fields are required'});
    }

    const pictures = req.files && req.files.length > 0 ? req.files.map(file => file.path) : [];

    if (pictures.length === 0) {
        return res.status(400).json({ message: 'No pictures uploaded' });
    }


    try {
        const product = new Product({
            name,
            price,
            quantity,
            pictures,
            userId 
        });

        product.save();

        res.status(201).json({msg : 'Product added successfully', data : product});

    } catch (error) {
        res.status(500).json({error : 'Something went wrong'});
    }
})


module.exports = router;