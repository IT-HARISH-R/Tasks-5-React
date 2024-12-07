import React, { useEffect, useState } from 'react'
import MainData from './coomponentes/heroData';

const App = () => {


  const [post , setpost] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((respon) => {
        return respon.json();
      })

      .then((data) => {
        setpost(data);    
      })
      .catch((error)=>{
        console.log(error);
      })

  },[]);

  return <>

    <MainData data={post}/>
  </>


}

export default App;