import React from 'react'



function NewsCard({ author, content, description, publichedAt, source, title, url, urlToImage }) {
    // let articlesArray = news?.articles
    // if (articlesArray === undefined) return 
    // articlesArray.map(article => console.log(article))

    return (
        <>
        <h1>Newscard</h1>
            <p>{console.log(author, content)}</p>
            {/* <p>Hello</p> */}

        </>
    )
}

export default NewsCard; 