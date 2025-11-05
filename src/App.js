import logo from './logo.svg';
import './App.css';
import Error from './components/Error'
import Header from './components/Header'
import Loader from './components/Loader'
import NewsCard from './components/NewsCard'
import NewsList from './components/NewsList'
import { useEffect, useState } from 'react';





function App() {
  const API_KEY = "4ed321713058453c94b7d1366784440e"
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
   
  useEffect(() => {
    async function fetchNewsData() {
      const response = await fetch(URL) 
      if (!response.ok) throw new Error(`HTTPS Error! Status: ${response.status}`)
      const results = await response.json()
    console.log(results)
    } 

    fetchNewsData()

  }, [])


  return (
    <div className="App">
      <header className="App-header">

        {/* Components */}
        <Header />
        <Error />
        <Loader />
        <NewsCard />
        <NewsList />


        {/* pages */}
        {/* <Home />
        <Profile /> */}

      </header>
    </div>
  );
}

    
export default App;
