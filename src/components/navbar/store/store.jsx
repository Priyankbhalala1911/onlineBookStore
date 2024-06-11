import React, { useEffect, useState } from 'react'
// import data from "../Home/data/data"
import "./store.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Card from './card';


const Store = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    // const [dataBook , setDataBook] = useState([]);

    const searchBook = (env) => {
        // console.log("hello")
        if (env.key === "Enter") {
            axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyD8MNtv_YONG6LzccVsKQhIci3TR-nbXeg" + "&maxResults=40")
                .then(res => {
                    setBookData(res.data.items)
                    setSearch("")
                })
                .catch(err => console.log(err))

            // console.log(bookData)

        }
    }
    const clickBook = () => {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyD8MNtv_YONG6LzccVsKQhIci3TR-nbXeg" + "&maxResults=40")
            .then(res => {

                setBookData(res.data.items)
                setSearch("")
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+query+reactjs+flower+love+story&key=AIzaSyD8MNtv_YONG6LzccVsKQhIci3TR-nbXeg&maxResults=40")
        .then(res=>res.json())
        .then(data=>setBookData(data.items))
        .catch(err=>console.log(err))
    
    },[""])

return (
    <>
        <div className="search">
            <input
                type="search"
                name="search"
                id="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBook}
                className="setStyle"
                placeholder="Please enter book name or book author name"
            />
            <button className="setStyle" onClick={() => clickBook()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="black" />
            </button>
        </div>

        <div className="container">
            {(search!== undefined)?<Card book={bookData} />: <Card book={bookData} />}
        </div>

    </>
)
}

export default Store
