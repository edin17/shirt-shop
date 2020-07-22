import React ,{useState}from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import data from './components/data';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import itemDetails from './components/ItemDetails';
import './App.css';
import HomeScreen from './components/HomeScreen';
import SignIn from './components/SignIn';
import {clickedProducts} from './components/ItemDetails'
import Register from './components/Register'
import AdminScreen from './components/AdminScreen';
import AddProduct from './components/AddProduct'





const items=data.products 

export const fClick = (id) =>{
  items.find(item=>item._id===id);

}

function App(props) {
 





 const [toggle,setToggle]=useState(false);

 const toggleFun = () => {
   setToggle(!toggle)
 }





  return (

    
    <div className="App">

      
     <BrowserRouter>


  
     
     
     <div className="grid-container">
      <header> 
        
      <div className="ti">

        <Link to='/'><h1 href="#">ShirtShop</h1></Link>

        
      </div>
        <div className="links">
            <FaShoppingCart className="cart" onClick={toggleFun}/>
            <Link to="/signin"><h3 className="signin-link">Sign in</h3></Link>
        </div>
        

      </header>

      <main>
          {toggle && <div className="cart-div">
          <h2>My Cart</h2>
           {clickedProducts.map(cpro=>{
             return<div key={cpro._id}>
            
            <h4>{cpro.name}</h4>
            <h4>{cpro.size}</h4>
            <h4>${cpro.price}</h4>
            
            
            </div>
          })}
            </div>}
      
          
              <Route path="/" exact={true} component={HomeScreen}/>
          <Route path="/admin" component={AdminScreen}/>
            <Route path="/add_product" component={AddProduct}/>
            <Route path="/signin" component={SignIn}/>
      
          <Route path="/register" component={Register}/>
          
           <Route path="/item-details/:id" component={itemDetails}/>
           
          
      </main>

      <footer>
        <h3>All rights reserved</h3>
      </footer>
    </div>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
