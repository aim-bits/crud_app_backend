const express = require('express')
const mongoose = require('mongoose')
const mongodb = require("mongodb")
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')



const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//ROUTES
app.use('/api/products', productRoute)


app.get('/', (req, res)=>{
    res.send("Hello from Mike API server updat")
})


//GET ALL PRODUCTS
// app.get('/api/products', async(req, res)=>{
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products)
//     } catch (error) {  
//         res.status(500).json({message:error.message})
//     }
// })


//GET a PRODUCT WITH ID
// app.get('/api/product/:id', async(req, res)=>{
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id)
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })



//CREATE A PRODUCT
// app.post('/api/products',async (req, res)=>{
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product)
//     }catch (error){
//         res.status(500).json({message: error.message})
//     }

//     console.log(req.body);
//     res.send(req.body)
// })


// UPDATE PRODUCT
// app.put('/api/product/:id',async (req, res)=>{
//     try {
//         const {id} = req.params
//         const product = await Product.findByIdAndUpdate(id, req.body)

//         if(!product){
//             return res.status(404).json({message:"Product not Found"})
//         }
//         const updatedProduct = await Product.findById(id)
//         res.status(200).json(updatedProduct)

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })


//DELETE A PRODUCT
// app.delete('/api/product/:id', async(req, res)=>{
//     const {id} = req.params
//     const product= await Product.findByIdAndDelete(id)

//     if(!product){
//         return res.status(404).json({message:"Product not Found"})
//     }

//     res.status(200).json({message:"Product deleted"})
// })

mongoose.connect("mongodb+srv://michaelaim17:950Qt6YzYY7Z7D7H@backenddb.afhz0lb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("connected to the database");
    app.listen(3000, () =>{
        console.log('Server is running');
    });
})
.catch(()=>{
    console.log("not connected to the database");
})