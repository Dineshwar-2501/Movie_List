import React, { useState, useEffect } from "react";
import MovieDetail from "./pages/MovieDetail";
import Home from './pages/Home';
import Error from './pages/ErrorPage';
import Favourite from './pages/Favourite';
import Images from './pages/Images';
import { UserBackpack } from "./context/UserBackpack";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
const[apidata,getApiData]=useState([])
// 1. Initialize state from localStorage or empty array
const [favourite, getFavourite] = useState(() => {
  const stored = localStorage.getItem("datas");
  return stored ? JSON.parse(stored) : [];
});

// 2. Save to localStorage whenever favourite changes
useEffect(() => {
  localStorage.setItem("datas", JSON.stringify(favourite));
}, [favourite]);


  useEffect(() => {

    const url = import.meta.env.VITE_API_URL;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_KEY,
        'x-rapidapi-host': import.meta.env.VITE_RAPID_HOST,
      }
    };
    const getApidata = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        getApiData(result.results);
      } catch (error) {
        console.error(error);
      }
    }
    getApidata()

  }, [])


  return (
    <UserBackpack.Provider value={{apidata,getApiData,favourite,getFavourite}}>
      <BrowserRouter basename="/Movie_List">
      <Routes>
        <Route path="/" index exact element={<Home/>} />
        <Route path="/favourite" element={<Favourite/>}/> 
        <Route path="/movies/:id" element={<MovieDetail/>} />
        <Route path="/images" element={<Images/>} />
        <Route  path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>

    </UserBackpack.Provider>
  );
};

export default App;
