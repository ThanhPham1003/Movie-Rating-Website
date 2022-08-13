import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import logo from '../../assets/MainLogo.png'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import "./Header.scss"

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm('')
  }
  return (
    <div className='header'>
      <div className="logo">Movie App</div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type="text" value = {term} placeholder="Search Movie or Shows" onChange={(e) => setTerm(e.target.value)} />
          <button type="submit"><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={logo} alt="user" />
      </div>
    </div>
  )
}

export default Header
