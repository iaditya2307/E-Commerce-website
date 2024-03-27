const express = require("express");
const router = express.Router(); //mini instance
const Product = require("../models/Product");
const Review = require("../models/Review");
const { validateReview } = require("../middleware");

router.post("/products/:id/review",validateReview, async (req, res) => {

    try {
        let { id } = req.params; //id bhi chahiya hogi na product ki jis par review daal ra hu
        let { rating, comment } = req.body;
        const product = await Product.findById(id); //abhi product find kia jisme review dalna hai
        const review = new Review({ rating, comment });
        product.reviews.push(review); //product ke schema me review ka array hai usme push kar dia review
        await review.save();
        await product.save();
        req.flash('success','Review added successfully')
        res.redirect(`/products/${id}`); 
    } catch (e) {
       res.status(500).render('error',{err:e.message}); 
    }
  
});

module.exports = router;
