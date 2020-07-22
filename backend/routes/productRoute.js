const router=require('express').Router();
const Product=require('../models/product.model');
import data from '../data'


router.post('/add',async(req,res)=>{
    if(req.files===null){
        return res.status(400).json({msg:'No files upload'})
    }
    
    
    const name=req.body.name;
    const type=req.body.type;
    const size=req.body.size;
    const price=req.body.price;
    const file=req.files.file;

    file.mv(`${__dirname}/frontend/public/img/${file.name} `,err=>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName:file.name,filePath:`/add_product ${file.name}`})
    })
    
    
    const newProduct=new Product({name,type,size,price,file});
    
        newProduct.save()
        .then(()=>res.json('Product added'))
        .catch((err)=>res.status(400).json('Error'+err))
        
    
        
   

    
})

router.get('/',(req,res)=>{
    res.send(data.products)
})

module.exports = router;