import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {

    const [name,setName]=useState('');
    const [type,setType]=useState('');
    const [size,setSize]=useState('');
    const [price,setPrice]=useState('');
    const [file,setFile]=useState('');
    const [fileName,setFileName]=useState('Choose file');
    const [uploadedFile,setUploadedFile]=useState({})



    const onChange = (e) =>{
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    
    const onSubmit = async(e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);

        try{
            const res=formData;

            const {fileName,filePath}=res.data;

            setUploadedFile({fileName,filePath});
        } catch(err){
            console.log(err)
        }
        
    axios.post('/products/add',{
        name:name,
        type:type,
        size:size,
        price:price,
        file:uploadedFile
    })
    .then(console.log('Items added in db'))
    .catch(err=>console.log(err))
    }


    return <div>
        <h1>AdminPanel(Add new product)</h1>

        <form className="product-form" onSubmit={onSubmit}>
            <label><input type="text" className="input-product" value={name} onChange={e=>setName(e.target.value)} placeholder="Name"/></label><br></br>
            <label><input type="text" className="input-product" value={type} onChange={e=>setType(e.target.value)} placeholder="Type"/></label><br></br>
            <label><input type="text" className="input-product" value={size} onChange={e=>setSize(e.target.value)} placeholder="Size"/></label><br></br>
            <label> <input type="number" className="input-product" value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price"/></label><br></br>
            <label><input type="file" className="input-product" onChange={onChange}/></label><br></br>
            <input type='submit' className="input-product submit-btn"></input>
        </form>
    </div>
}



export default AddProduct;