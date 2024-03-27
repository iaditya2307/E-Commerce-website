const mongoose =require('mongoose')
const Product=require('./models/Product')


const products=[
{
    name:"Iphone 14 pro max",
    img:"https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZTE0cHJvbWF4fGVufDB8fDB8fHww",
    price:130000,
    desc:"very costly,aukat ke bahar"},
{
    name:"Macbook m2 pro",
    img:"https://images.unsplash.com/photo-1592919933511-ea9d487c85e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1hYm9vayUyMG0yJTIwcHJvfGVufDB8fDB8fHww",
    price:250000,
    desc:"Bilkul hi aukat ke bahar"},
{
    name:"I-Watch",
    img:"https://images.unsplash.com/photo-1579811216948-6f57c19376a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aSUyMHdhdGNofGVufDB8fDB8fHww",
    price:51000,
    desc:"mast time batati hai"},
{
    name:"Ipad pro",
    img:"https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZCUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    price:660000,
    desc:"Bhadiya hai bhai leke dekho"},
{
    name:"Airpods Pro",
    img:"https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGFpcnBvZHMlMjBwcm98ZW58MHx8MHx8fDA%3D",
    price:25000,
    desc:"Mast gaane sunne ka bhidu"}
]

 async function seedDB(){
  await  Product.insertMany(products);
    console.log("Data Seeded Successfully")
}
module.exports=seedDB;