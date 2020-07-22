import React,{useState,useEffect} from 'react';

import {Link} from 'react-router-dom';
import {fClick} from '../App'
import axios from 'axios'


const AdminScreen = (props) => {
    
    const[items,setItems]=useState([])
    




    useEffect(() => {
      const fetchData= async () => {
        const {data} = await axios.get("/products");
        setItems(data);

        
      }

     
      
      fetchData();
      return () => {
        
      };
    }, [])

     



 
    return <div>

        <Link to="/add_product"><div className="AddProduct">Add new Product</div></Link>
         {items.map(item=>{
       
       return <Link to={'/item-details/'+item._id}><div className="item" key={item._id} onClick={()=>fClick(item._id)}>
            
            <img src={item.img} alt="sdasda" className='home-image'></img>
            <h3>{item.name}</h3>
            <div className="item-info">
            <p>Type:</p>
            <p>Size:{item.size}</p>
            <p>Price:${item.price}</p>
            <p></p>
            </div>
          </div></Link>
        
        })}

            
  </div>;

      }


export default AdminScreen;
