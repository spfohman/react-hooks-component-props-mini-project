import React from 'react';
import Article from './Article';

function ArticleList({blogData}){
    console.log({blogData})
   const postBlogs= blogData.map(eachPost=>{
       return<Article key={eachPost.id} title={eachPost.title} date= {eachPost.date} preview= {eachPost.preview}/>
   })
    return(
    <main>
        {postBlogs}
        
    </main>
    )
}
export default ArticleList;