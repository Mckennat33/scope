import logo from './logo.svg'
import './App.css';
import Error from './components/Error'
import Header from './components/Header';
import Loader from './components/Loader'
import NewsCard from './components/NewsCard'
import NewsList from './components/NewsList'
import { useEffect, useState } from 'react';


function App() {
  const API_KEY = "4ed321713058453c94b7d1366784440e"
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  const [ newsData, setNewsData ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)
  const [ search, setSearch ] = useState('')
   
  useEffect(() => {
    async function fetchNewsData() {
      const response = await fetch(URL) 
      if (!response.ok) throw new Error(`HTTPS Error! Status: ${response.status}`)
      const results = await response.json()
      setNewsData(results)
      console.log(newsData)
    } 
    fetchNewsData()
  }, [])
 

  const articlesArray = newsData?.articles
  if (articlesArray === undefined) return
  // articlesArray.map((article) => {
  //   const { author, content, description, publichedAt, source, title, url, urlToImage } = article

  // })


// search feature
// filter out what is in search state to match whatever is in the newsdata

  // let content = <p>{article}</p>
  return (
    <div className="App">
      <header className="App-header">
        <div className='search-news'>
          <input 
            type='text'
            className='input'
            onChange={(e) =>  setSearch(e.target.value)}
            placeholder='Search...'
          />
        </div>
        
        {articlesArray.map((article) => {
          const { author, content, description, publichedAt, source, title, url, urlToImage } = article
          return (
            <NewsCard 
              author={author}
              content={content}
              description={description}
              publichedAt={publichedAt}
              source={source}
              title={title}
              url={url}
              urlToImage={urlToImage}
            
            />
          )
          
          // what is one of the items is null? 
          // look at each element to see if null if null return 'unknown'
        })}
        
        <Header  />
        <Error />
        <Loader />
        <NewsList />
      </header>
    </div>
  );
}

    
export default App;
