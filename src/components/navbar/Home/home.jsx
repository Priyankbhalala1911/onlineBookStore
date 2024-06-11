import React, { useState } from 'react'
import "./home.css"
import Popularbook from './popularBook/popularbook'
import Category from './popularBook/category'
import book from "../Home/data/data.js"
import LogoShow from './slide-show/logoShow.jsx'

const uniqueList = [
  "All",
  ...new Set(
      book.map((curElem)=>{
          return curElem.category;
      })
  ),
  

]

const Home = () => {
  const [Book,setBook] = useState(book);
  const [BookList,setBookList] = useState(uniqueList);

  const filterItem = (category)=>{
    if(category === "All"){
      setBook(book);
      return;
    }

    const updateList=book.filter((curElem)=>{
        return curElem.category === category;
    });

    setBook(updateList);
}
  return (
    <div>
      <h1>Popular Book</h1>
      <Category filterItem ={filterItem} BookList = {BookList}/>
      <Popularbook Book={Book}/>
      <LogoShow/>
    </div>

    
  )
}

export default Home
