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
  const [ wait , setWait ] = useState(false)
  const [ imgCheck ,setImgCheck] = useState(false)

  const navigate = useNavigate()

    
    const userDetails = useSelector(
      (state) => state.auth
      )
    


  const handleSubmit = async (e) => {
      
      setImgCheck(true)

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
               
          setWait(true)

          var myWidget = window.cloudinary.createUploadWidget({
            cloudName: 'dtldzc9tg', 
            uploadPreset: 'd43vjlly'}, (error, result) => { 
              if (!error && result && result.event === "success") { 
                console.log('Done! Here is the image info: ', result.info);
                setUrl(result.info.url) 
                setUploadingImg(true)
                setWait(false)
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
            {/* <input type='text' placeholder='Category' onChange={e => setCategory(e.target.value)} /> */}
             <select className="select_category" onChange={e => setCategory(e.target.value)}>
             <option disabled selected value> Select a Category  </option>
              <option value="Lifestyle">Lifestyle</option>
             <option value="Educational">Educational</option>
             <option value="Travel">Travel</option>
             <option value="Technology">Technology</option>
             <option value="Food">Food</option>
             <option value="Sports">Sports</option>
             <option value="Music">Music</option>
             <option value="Movie">Movie</option>
             <option value="Art">Art</option>
             <option value="Books">Books</option>
             <option value="Politics">Politics</option>
             <option value="Country">Country</option>
             <option value="Adventures">Adventures</option>
             <option value="Personal">Personal</option>
             <option value="Childhood">Childhood</option>
             <option value="Cooking">Cooking</option>
             <option value="School_Life">School_Life</option>
             <option value="College_Life">College_Life</option>
             <option value="Story">Story</option>
             <option value="Memories">Memories</option>
             <option value="Achievments">Achievments</option>
             <option value="Goals">Goals</option>
             <option value="Others">Others</option>
            </select>

            <textarea placeholder="Type content here.." onChange={e => setDescription(e.target.value)} name='description'  cols='30' rows='10'></textarea>
            {/* <JoditEditor ref={editor} onChange={(content) => setDescription(content)}  /> */}

         <div>

            {!url && imgCheck && <p style={{color:'red',fontSize:'large',fontWeight:'bold'}}>Please Upload an image before publishing your article !!</p>}

        </div>
            
            {wait && (
              <p style={{color:'green',fontSize:'large',fontWeight:'bold'}}>Please Wait Few Seconds !!</p>
            )}

            <button type="button" className="cloudinary_imgUpload_btn" onClick={()=>handleOpenWidget()} disabled={uploadingImg}> Upload Image </button>
          <div className="image_preview">
            { url &&
                   <img src={url} alt="img" />
            }
          </div>


            <button className='publish_button' type="submit"  >Publish Article</button>

          </form>


        </div>
        
       
      </section>
    </>
  )
}

export default Create