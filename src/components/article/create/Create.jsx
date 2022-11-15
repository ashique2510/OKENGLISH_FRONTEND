import React, { useEffect, useState } from "react"
import "./create.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import JoditEditor from 'jodit-react'
import { useRef } from "react"
import axios from 'axios'
import { createArticle } from "../../../utils/ApiRoutes"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'


 const Create = () => {

  const editor = useRef(null)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  // const [image, setImage] = useState(null)
  const [username , setUsername] = useState('')
  const [url ,setUrl] = useState('')
  const [uploadingImg, setUploadingImg] = useState(false)
  const [name , setName] = useState('')

  const navigate = useNavigate()


    
    const userDetails = useSelector(
      (state) => state.auth
      )
    


  const handleSubmit = async (e) => {
        e.preventDefault();
       
        setUsername(userDetails.user.email)
        setName(userDetails.user.name)

       const  newArticle = {
        title,
        description,
        username,
        url,
        name,
        category
       }
        
        if(!title || !description || !username || !url || !category){
          return alert('Images,Title, and Descriptions are Required !!! ')
        }else{
              try{

                const response = await axios.post(createArticle , newArticle)
                console.log(response);
                navigate('/article_home')

              }catch(err){

              }
        }
  }

        function handleOpenWidget(){


          var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dtldzc9tg', 
            uploadPreset: 'd43vjlly'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info);
                setUrl(result.info.url) 
                setUploadingImg(true)
              }
            }
          )
          // Open widget
          myWidget.open();
        }


  return (
    <>
      <section className='newPost'>
        <div className='creat_container boxItems'>
          <div className='img '>
            <img src='https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/11/23170628/Content-Writer-Resume.jpg' alt='image' class='image-preview' />
          </div>

          
          <form onSubmit={handleSubmit}>
            <div className='inputfile flexCenter'>
              <input type='text' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Title' onChange={e => setTitle(e.target.value)} />
            <input type='text' placeholder='Category' onChange={e => setCategory(e.target.value)} />

            {/* <textarea name='' id='' cols='30' rows='10'></textarea> */}
            <JoditEditor ref={editor} onChange={(content) => setDescription(content)}  />

         <div>

            {!url && <p>Please Upload an image before publishing your article</p>}

        </div>

            <button type="button" className="cloudinary_imgUpload" onClick={()=>handleOpenWidget()} disabled={uploadingImg}> Upload Image </button>
          <div className="image_preview">
            { url &&
                   <img src={url} alt="img" />
            }
          </div>


            <button className='create_button' type="submit"  >Publish Article</button>

          </form>


        </div>
        
       
      </section>
    </>
  )
}

export default Create