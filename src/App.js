import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import {Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Newarrivals from './Components/Newarrivals';
import Cart from './Components/Cart';
import Connection from './Components/Connection';
import SignUp from './Components/SignUp';
import Clothes from './Components/Clothes';
import Shoes from './Components/Shoes';
import Accessories from './Components/Accessories';
import Details  from './Components/Details';
import { v4 as uuidv4 } from 'uuid';
import DressImage from './Components/Images/DressImage.png';
import DImage from './Components/Images/DImage.png';
import BagImage from './Components/Images/BagImage.png';
import ShoesImage from './Components/Images/ShoesImage.png';
import HAImage from './Components/Images/HAImage.png';
import MuleImage from './Components/Images/MuleImage.png';
function App() {
const[products,setProducts]=useState ( 
  [
  {
      _id:uuidv4(),
      name:'Dress',
      image:DressImage,
      sizes: 'S, M, L, XL',
      rating: 4,
      price:'25,00 $',
      colors:'Green, Red, Blue, Yellow',
      qte:'1'
  },
  {
      _id:uuidv4(),
      name:'Dress',
      image:DImage,
      sizes: 'S, M, L, XL',
      rating: 5,
      price:'40,00 $',
      colors:'Black, Red, Blue, Yellow',
      qte:'1'
  },
  {
      _id:uuidv4(),
      name:'Bag',
      image:BagImage,
      sizes: '_',
      rating: 5,
      price:'70,00 $',
      colors:'Beige, Black, White, Red',
      qte:'1'
  },
  {  
      _id:uuidv4(),
      name:'Hair Accessories',
      image:HAImage,
      sizes: '_',
      rating: 4,
      price:'5,00 $',
      colors:'Pink, Red, Blue, White',
      qte:'1'
  },
  {
      _id:uuidv4(),
      name:'Shoes',
      image:ShoesImage,
      sizes: '38, 39, 40, 41',
      rating: 5,
      price:'85,00 $',
      colors:'Black, Red, Green',
      qte:'1'
  },
  {
      _id:uuidv4(),
      name:'Mule',
      image: MuleImage,
      sizes: '38, 39, 40, 41',
      rating: 4,
      price:'50,00 $',
      colors:'Beige, Yellow, Red, Green',
      qte:'1'
  }
]

);
const [clothes, setClothes]=useState(
  [
    {
      _id:uuidv4(),
      name:'Dress',
      image:DressImage,
      sizes: 'S, M, L, XL',
      rating: 4,
      price:'25,00 $',
      colors:'Green, Red, Blue, Yellow'
  },
  {
      _id:uuidv4(),
      name:'Dress',
      image:DImage,
      sizes: 'S, M, L, XL',
      rating: 5,
      price:'40,00 $',
      colors:'Black, Red, Blue, Yellow'
  }
  ]
);
const [shoes, setShoes]=useState([
  {
    _id:uuidv4(),
    name:'Shoes',
    image:ShoesImage,
    sizes: '38, 39, 40, 41',
    rating: 5,
    price:'85,00 $',
    colors:'Black, Red, Green'
},
{
    _id:uuidv4(),
    name:'Mule',
    image: MuleImage,
    sizes: '38, 39, 40, 41',
    rating: 4,
    price:'50,00 $',
    colors:'Beige, Yellow, Red, Green'
}
]);
const [accessories, setAccessories]=useState([
  {
    _id:uuidv4(),
    name:'Bag',
    image:BagImage,
    rating: 5,
    price:'70,00 $',
    colors:'Beige, Black, White, Red'
},
{  
    _id:uuidv4(),
    name:'Hair Accessories',
    image:HAImage,
    rating: 4,
    price:'5,00 $',
    colors:'Pink, Red, Blue, White'
},
]);
const [searchProduct,setSearchProduct]=useState("");
const [cartItems, setCartItems] = useState([]);


const handleAdd=(p)=>{
  // cartItems.push(p);
  console.log(cartItems);
  setCartItems([...cartItems,cartItems.push(p)]);
}

const handleRemove =(p)=>{ 
setCartItems(products.filter((products)=>products.id !== p.id))
};
  return (
    <div className="App" >
    <Header products={products} setSearchProduct={setSearchProduct}/>
    
    <Routes>
     <Route exact path="/" element={<Home products={products}/>} />
     <Route exact path="/Home" element={<Home products={products}/>} />
     <Route path="/ContactUs" element={<ContactUs />} />
     <Route path="/Newarrivals" element={<Newarrivals    
     products ={products.filter((p)=> p.name.toLowerCase().includes(
       searchProduct.toLowerCase().trim()))}/>}
     />
     <Route path="/Cart" element={<Cart products={products} setCartItems={setCartItems} cartItems={cartItems} handleAdd={handleAdd} handleRemove={handleRemove}/>} />
     <Route path="/Connection" element={<Connection />} />
     <Route path="/Connection/SignUp" element={<SignUp />} />
     <Route path="/Products/Clothes" element={<Clothes  clothes={clothes} />} />
     <Route path="/Products/Shoes" element={<Shoes  shoes={shoes} />}/>
     <Route path="/Products/Accessories" element={<Accessories  accessories={accessories} />} />
     <Route path="/Details" element={<Details  products={products} />} />
    </Routes>
   

     
    <Footer/>
      
    </div>
  );
}


export default App;
