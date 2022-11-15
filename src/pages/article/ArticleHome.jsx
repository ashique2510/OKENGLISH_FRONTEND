import React, { useEffect, useState } from 'react'
import ArticleNav from '../../components/article/articleNav/ArticleNav'
import { Card } from '../../components/article/blog/Card'
import Category from '../../components/article/category/Category'
import axios from 'axios'
import { getAllArticle } from '../../utils/ApiRoutes'
import { useLocation } from 'react-router-dom'

const ArticleHome = () => {

    const [article, setArticle] = useState([])
    const [like ,setLike] = useState(false)


    const {search} = useLocation()
    console.log('current locaationnnnnnnnn',search);
    
    
    

    useEffect(()=>{
      const fetchArticle= async ()=>{

        const response = await axios.get(`${getAllArticle}/${search}`)
        setArticle(response.data)
        // setLike(response.data)

      }
      fetchArticle()
      console.log('like...',like);
    },[search , like])


  return (
    <div>
       <ArticleNav /> 
       { !search &&
         <Category article={article}/>    
       }   
       <Card article={article} setLike={setLike}/>
    </div>
  )
}

export default ArticleHome