import axios from "axios"
import React, { useEffect, useState } from "react"
// import image from "../../assets/images/input.png"
import "./account.css"
import { addProfilePic } from "../../utils/ApiRoutes"
import { getProfilePic } from "../../utils/ApiRoutes"
import {  useSelector } from "react-redux"


export const Account = () => {

  console.log('hiiiiiiiiiiiiiiii');

  const [url ,setUrl] = useState(false)
  const [uploadingImg, setUploadingImg] = useState(false)
  const [ profilePic, setProfilePic ] = useState('')
  console.log('profile pic',profilePic);


  const profileImage = useSelector( state => state.globalData.profilePicture)
          console.log('profile ppiicctturre',profileImage);


    const UserId = useSelector(
        (state) => state.auth.user._id
      )
  
  function handleOpenWidget(){

        console.log('trigered cloud');
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
console.log('uuurlll',url);

  useEffect(() =>{
    console.log('use Effect One');


     if(url){
    const AddPic = async() => {

      const response = await axios.post(addProfilePic,{ UserId:UserId ,image:url})
      localStorage.setItem('profilePicUrl', response.data.profilePicUrl)

        console.log('responseeeexx',response.data.profilePicUrl);
   }
    AddPic()
  }

  } , [url])


    useEffect(() => {

      const getPic = async() => {
  
             console.log('use Effect Two');
        const response = await axios.get(`${getProfilePic}/${UserId}`)
          console.log('responseeeexx333',response);
          setProfilePic(response.data.profilePicUrl)

     }
      getPic()

    }, [url])


  return (
    <>
      <section className='accountInfo'>
        <div className='account_container BoxItems'>
          <div className="accountInfo_heading">
          <h1>Account Information</h1>
          </div>
          <div className='imgDiv'>
              {!profilePic && (
                <img src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='image'  />
              )}
              {profilePic && (
                <img src={profilePic} alt='image'  />
              )}
            
            </div>

            <div className="cloudinary_button">
            <button type="button" className="cloudinary_imgSet" onClick={()=>handleOpenWidget()} disabled={uploadingImg}>{profilePic ?'Change Profile Picture':'Set Profile Picture'}  </button>
            </div>

          <div className='account_content'>
            <div className='right'>
              <label htmlFor=''>Username</label>
              <input type='text' />
              <label htmlFor=''>Email</label>
              <input type='email' />
              <label htmlFor=''>Password</label>
              <input type='password' />
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
