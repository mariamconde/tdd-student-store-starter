const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

//Create a class to handle logic associated with Store.
class Store {
    //Methods needed for Store model: list products from database
    static async listProducts() {
        //pulling results from database.
        const products = storage.get("products").value();
        return products;
    }

    //From storage, get the products array, find the element with the passed productID, and retrieve the value.
    //Return the product.
    static async fetchProductById(productId) {
        const product = storage.get("products").find({id: Number(productId)}).value()
        return product;
    }
}

module.exports = Store;