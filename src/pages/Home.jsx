import React from 'react'
import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'


function Home() {
    
  const API_KEY = "4ed321713058453c94b7d1366784440e"
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  const [ newsData, setNewsData ] = useState([]) // make sure this is correct 
  const [ isLoading, setIsLoading ] = useState(true)
  const [ search, setSearch ] = useState('')
  const [test, setTest ] = useState('')

  useEffect(() => {
    async function fetchNewsData() {
      const response = await fetch(URL) 
      if (!response.ok) throw new Error(`HTTPS Error! Status: ${response.status}`)
      const results = await response.json()
      setNewsData(results?.articles) // make sure this is correct 
      // console.log(newsData)
    } 
    fetchNewsData()
  }, [])  
    
    return (
        <>
            <h1>Home</h1>
                <div className='search-news'>
                    <input 
                      type='text'
                      className='input'
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='Search...'
                    />
                </div>
            <div>
                {newsData.map((article, index) => {
                const { author, content, description, publichedAt, source, title, url, urlToImage } = article
                    return (
                        <NewsCard 
                            key={index}// added a key 
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
                })}
            </div>
        </>
    )
}

export default Home; 