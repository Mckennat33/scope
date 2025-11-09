import React from 'react'



function NewsCard({ author, content, description, publichedAt, source, title, url, urlToImage }) {
    // let articlesArray = news?.articles
    // if (articlesArray === undefined) return 
    // articlesArray.map(article => console.log(article))

    return (
        <>
        <h1>Newscard</h1>
            <p>Author: { author }</p>
            <p>Content: { content }</p>
            <p>Description: { description }</p>
            {/* published at is a date */}
            <p>Publiched at: { publichedAt }</p> 
            {/* {console.log(publichedAt)} */}
            {/* <p>{ source }</p> */}
            {/* <p>{ title }</p> */}
            {/* <p>{ url }</p> */}
            {/* <img>{ urlToImage }</img> */}

        </>
    )
}

export default NewsCard; 