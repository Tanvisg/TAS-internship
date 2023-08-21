import { products } from "./constants/data.js"
import Product from "./model/product_schema.js"

const DefaultData = async () =>{
    try {
        await Product.insertMany(products);
        console.log("Data inserted!")        
    } catch (error) {
        console.log("Error while inserting data:", error.message)
    }
}

export default DefaultData;