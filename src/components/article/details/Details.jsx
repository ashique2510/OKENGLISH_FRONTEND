import React, { useState } from "react"
import "./details.css"
// import "../../components/header/header.css"
// import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { getArticle } from "../../../utils/ApiRoutes"
import { deleteArticle } from "../../../utils/ApiRoutes"

export const Details = () => {
  const { id } = useParams()
  const [article, setArticle] = useState({})
  const [currentUser, setCurrentUser] = useState('')


  const navigate = useNavigate()

  useEffect(()=>{
    const getUsername = async()=>{
      const user =await JSON.parse(localStorage.getItem('user')).email
      setCurrentUser(user)
      }
      getUsername()
  
    },[])

  useEffect(() => {
   
    const getSingleArticle = async ()=>{
          const response = await axios.get(`${getArticle}/${id}`)
          console.log('from single page',response);
          setArticle(response.data)
    }
    getSingleArticle()
  }, [id])


  const handleDelete =async () => {

    try{
      const user= JSON.parse(localStorage.getItem('user'))
      const accessToken = user.token

       await axios.delete(`${deleteArticle}/${article._id}`, {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }})
        
       navigate('/article_home')


    }catch(err){}

   

  }


  return (
    <>
      {article ? (
        <section className='singlePage'>
          <div className='details_container'>
            <div className='left'>
              <img src={article.url} alt='' />
            </div>
            <div className='right'>
         {
          currentUser === article?.username &&

              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button' onClick={handleDelete}>
                  <AiOutlineDelete />
                </button>
              </div>
         }

              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <Link to={`/article_home/?user=${article.username}`} >
              <span className='authorName'>Author: {article.name}</span>
              </Link>
              <p>Date : {new Date(article.createdAt).toDateString()}</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
