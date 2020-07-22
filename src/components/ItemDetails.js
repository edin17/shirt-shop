import React, { useState, useEffect } from 'react';
import data from './data';



export const clickedProducts=[];
const items=data.products;

export const cartFun=(id)=>{
    const preProduct=items.find((product)=>product._id===id)
    console.log(preProduct)
    clickedProducts.push(preProduct)
    console.log({clickedProducts})
    setStatus('OPALA')
    
    
  }

let status='idle'
const setStatus=()=>{
    status='in cart'
}


const ItemDetails=(props)=>{
    const [status,setStatus]=useState('Idle')
    const [quantity,setQuantity]=useState('')
    

    
    console.log(props.match.params.id)
    const product=data.products.find(product=>product._id===props.match.params.id);
    console.log(product)
    
    

    const picString='http://localhost:3000/'
    const picLink=picString+product.img;



   
   return <div className="item-details">
        
          
                <img src={picLink} alt="error" className="slika"></img>
            
        <div className="basic-info">
        
    <h1>{product.name}</h1>
    <hr></hr>
    <h2>Size:{product.size}</h2>
    <h2>Price:${product.price}</h2>
    <h2>Rating:</h2><h2 className="stars">{product.note}</h2>

    
        </div>
        <div className="options">
            <h2>Cart Options</h2>
            <form>
                <h4 className="q">Quantity:</h4><input type="number" value={quantity} onChange={e=>setQuantity(e.target.value)}/>
            </form>
            <h4>Status:{status}</h4>
            <h4>Total price:${quantity*product.price}</h4>
               <button onClick={()=>cartFun(product._id)}>Add to cart</button>
               

               

        </div>
     
    </div>
    
        
        
    
}



export default ItemDetails;