import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MeleItem from './MeleItem'
import Recipe from './Recipe'

import './Style.css'

const Male = () => {

 
  const [url,setUrl]=useState('https:/www.themealdb.com/api/json/v1/1/search.php?f=a')
  const [item,setItem]=useState();
  const [show,setShow]=useState(false)
  const [search,setSearch]=useState()

  useEffect(()=>{
     fetch(url).then(res=>res.json())
     .then((data)=>{
      console.log("data",data);
      setItem(data.meals);
      setShow(true);
     })
  },[url])

  const setIndex=(alpha)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
  }
  const searchRecipe=(evt)=>{
  if(evt.key=="Enter"){
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s= ${search}`)
  }
  }
  
  return (
    <div className='male'>
        <div className="heading">
            <h1>Search Your Food Recipe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quia inventore sequi quasi nostrum laborum minima tempora 
                quidem assumenda voluptate veritatis fugiat voluptatibus,
                 similique dolore, aliquid ad amet.</p>
        </div>
        <div className="search-box">
            <input type="search" className='search-bar' onChange={(e)=>setSearch(e.target.value)} onKeyPress={searchRecipe} placeholder='Enter  here' />
        </div>
        <div className="container">
           {
            show? <MeleItem data={item}/>:"Not Found"
           }
        </div>
        <div className="indexCompo">
         <Recipe alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div>
        {
          
        }
    </div>
  )
}

export default Male