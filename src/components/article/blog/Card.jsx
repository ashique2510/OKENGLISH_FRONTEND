import React, { useEffect, useState } from "react"
import "./blog.css"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { AiFillLike } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { addLike } from "../../../utils/ApiRoutes"
import axios from "axios"
import { removeLike } from "../../../utils/ApiRoutes"

export const Card = ({article, setLike}) => {

  let count = 0;
  

const user= JSON.parse(localStorage.getItem('user'))
        const username = user.email

        

    const addUserLikes = async(clickedUserId) => {

        // Remove Like If they clicked
        
                try{

                  const user= JSON.parse(localStorage.getItem('user'))
                  const username = user.email
        
                 const response = await axios.post(`${removeLike}/${clickedUserId}`,{username:username})
                 setLike((prev)=> !prev)

     if(response.data === 'USER NOT FOUND'){

     // Add New Like

      try{
        
        const user= JSON.parse(localStorage.getItem('user'))
        const username = user.email
        const id = user._id
        
        const response = await axios.post(`${addLike}/${clickedUserId}`,{username:username, userId:id})

        console.log('response from ',response);
        setLike((prev)=> !prev)
        
      }catch(err){}


                     }
                     
                    


                }catch(err){}

                

      
    }
    
   

  return (
    <>
      <section className='blog'>
        <div className='card_container grid3'>
          {article.map((item ) => (
            
            <div className='box boxItems' key={item._id}>
              <div className='img'>
                <img src={item.url} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                # <p style={{color:'red',fontWeight:'700',marginLeft:'3px'}}>{item.category}</p>
                </div>
                
                <div className="author_profile">
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="img"  />
                  <div>
                    <p className="author_name">Author : {item.name}</p>
                  </div>
                </div>

                <Link to={`/article_details/${item._id}`} className='link'>
                  <h3>{item.title}</h3>
                <p>{item.description.slice(0, 180)}...</p>
                </Link>
                <div className='date'>

               


                { 
                  item.likes &&

                  item.likes.map((aa)=>{

                    let ab =  aa.username === username
            {    if(ab === true){
              
                 count = count +1;

                 
                  }
                      
             }
                  })

                  
                  
                }

               {
                  count === 0 && 
                  <>
                    <AiFillLike className='icon'  style={{color:'white', fontSize:'30px'}}
                     onClick={() => addUserLikes(item._id)} /> <label htmlFor=''>{item.likes.length}</label>

                     
                  </>
                  
                }

                {
                  count > 0 && 
                  <>
                    <AiFillLike className='icon'  style={{color:'red', fontSize:'30px'}}
                     onClick={() => addUserLikes(item._id)} /> <label htmlFor=''>{item.likes.length}</label>
                 
                  {
                  count > 0 &&(

                  count = 0
                  
                  )
                  }
                  
                  </> 
                }
                
                

               
          

                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{new Date (item.createdAt).toDateString()}</label>
                  {/* <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label> */}
                </div>
                
               

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
