import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import '../Pages/Search.css';
import axios from "axios"
export default function Search() {
  const [searchResult, setSearchResult] = useState([])
  const [key, setKey] = useState("")
  useEffect(() => {
    const search = async () => {
      try {
        if(!key.trim()){
          setSearchResult([])
          return
        }
        const res = await axios.get("http://localhost:3000/about", {params: {key : key, limit : 5}})
        setSearchResult(res.data.data)
        console.log(res)
      } catch (error){
        console.log(error)
      }
    }
    search()
  },[key])
  return (
    <form>
      <div className="Search-wrapper">
        <button className="Search-btn">
          <BsSearch />
        </button>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Searching..."
            value={key}
            onChange={(e)=> setKey(e.target.value)}
          />
        </div>
          {searchResult && searchResult.length > 0 && (
            <div className='search-result'>
              {searchResult.map(book => (
                <div className='result-item' key={book._id}>
                  <div className='img'>
                    <img src={book.imageUrl} alt = "" />
                  </div>
                  <div className='book-info'>
                    <p className='name'>{book.name}</p>
                    <p>{book.author.name}</p>
                  </div>
                </div>
              ))}
              </div>
          )}
          </div>
    </form>
  );
}