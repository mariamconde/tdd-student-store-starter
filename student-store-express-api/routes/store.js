const express = require("express");
// const Store = require("../models/store");
// const { NotFoundError } = require("../utils/errors");
const router = express.Router();

//List all products. When /store is read, pull up list of products from Store class/module.
//Serve array of 
//Display products as a json object. If fails, returns error.



router.get("/store", async (req, res, next) => {
    res.status(200).json({ping: "pong"});
    // try {
    //     const products = await Store.listProducts();
    //     res.status(200).json({ products });
    // } catch (err) {
    //     next(err);
    // }
});

//Get product by ID.
// router.get("/:productId", async(req, res, next) => {
//     try {
//         //Get product ID from req.params.productId. Call the fetch function on the ID, and return.
//         const productId = req.params.productId;
//         const product = await Store.fetchProductById(productId);
//         if(!productId) {
//             throw new NotFoundError("Transaction not found");
//         }
//         res.status(200).json({ product })
//     } catch(err) {
//         next(err);
//     }
// });

module.exports = router;