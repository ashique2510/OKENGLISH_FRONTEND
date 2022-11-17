import React, { useEffect, useState } from "react"
import "./blog.css"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { AiFillLike } from 'react-icons/ai'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { addLike } from "../../../utils/ApiRoutes"
import axios from "axios"
import { removeLike } from "../../../utils/ApiRoutes"

import Moment from 'react-moment';
import 'moment-timezone';
import { toast } from 'react-toastify';


 // ....................MODAL......................//

 import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
 import { GiPartyPopper } from 'react-icons/gi'
 import { FaCommentDots } from 'react-icons/fa'
 import Button from '@mui/material/Button';
 import Dialog from '@mui/material/Dialog';
 import DialogActions from '@mui/material/DialogActions';
 import DialogContent from '@mui/material/DialogContent';
 import DialogContentText from '@mui/material/DialogContentText';
 import DialogTitle from '@mui/material/DialogTitle';
 import { Box, Typography, CardContent, CardActionArea, Card , Grid } from '@mui/material'
// import { useDispatch } from 'react-redux'
// import { getTutorInfo } from '../../redux-toolkit/reducer/tutorReducer'

 // ....................MODAL......................//


//  chat input send

 import { IoMdSend } from "react-icons/io";
 import styled from "styled-components";
 import InputEmoji from 'react-input-emoji'
 


export const Cards = ({article, setLike}) => {


  const navigate = useNavigate()


// ....................MODAL......................//

const [announceData, setAnnounceData] = useState('')

const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState('paper');


const handleClickOpen = (scrollType) => () => {
    console.log('trigered');
      
  setOpen(true);
  setScroll(scrollType);
};

const handleClose = () => {
  setOpen(false);
};

const descriptionElementRef = React.useRef(null);
React.useEffect(() => {
  if (open) {
    const { current: descriptionElement } = descriptionElementRef;
    if (descriptionElement !== null) {
      descriptionElement.focus();
    }
  }
}, [open]);


  // ....................MODAL end......................//



  // ............chat send input start.............//


  const [msg, setMsg] = useState("");
  console.log('message',msg);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emojiObject) => {
    console.log('emojiiiiiiiii',emojiObject);
    
   
  };
 

  const sendChat = (event) => {
    console.log('event',event);
    event.preventDefault();
    if (msg.length > 0) {
      // handleSendMsg(msg);
      setMsg("");
    }
  };


  // ............chat send input end ...........//

   const [userName, setUserName] =useState('')

  let count = 0;
  
       useEffect(() => {

        const user= JSON.parse(localStorage.getItem('user'))
        if(user){
          const username = user.email
          setUserName(username)
        }

      } , [])

    const addUserLikes = async(clickedUserId) => {

        // Remove Like If they clicked
        
                try{

                  const user= JSON.parse(localStorage.getItem('user'))
                  if(!user){
                    toast.error('Please register or login before liking this post !!', {
                      position: toast.POSITION.TOP_CENTER
                      });
                    navigate('/signUp')
                  }else{
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
                  item.likes && userName &&

                  item.likes.map((aa)=>{

                    let ab =  aa.username === userName
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
                  </> 
               }

               <div style={{color:'black'}}>

                {  count = 0 }
                  
               </div>
                  
                  
                  <AiOutlineComment onClick={handleClickOpen('paper')} className='icon' /> <label htmlFor=''>0</label>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{new Date (item.createdAt).toDateString()}</label>
                  {/* <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label> */}
                </div>
                
               

              </div>
            </div>
          ))}
        </div>

                  {/* // ....................MODAL Started......................// */}



{open &&

<Box>

<Dialog
open={open}
onClose={handleClose}
scroll={scroll}
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
className='mainDialog'
>

<DialogTitle className='dialogTitlexxxxxx' id="scroll-dialog-title" color={'black'} fontWeight={800} >Comments <FaCommentDots color="black" style={{ fontSize:'25px',marginLeft:'10px'  }} /> </DialogTitle>

<DialogContent className='dialogContentxxxxx' dividers={scroll === 'paper'} >
  <DialogContentText
    id="scroll-dialog-description"
    ref={descriptionElementRef}
    tabIndex={-1}
  >
    
      
      { 
        announceData &&
        
        announceData.map((item,index) => (
          // console.log('from map',item.announcementArray.announcement);
       <Grid container marginTop={6} key={index}>
<Grid item xs={12} >
  <Box display="flex" alignItems="center" justifyContent="center">
          <Card style={{background:'#db3bab85'}}>
            <CardActionArea>
              <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                  <Typography  > <Moment format="DD/MM/YYYY - hh:mm A" >{ item.announcementArray.date }</Moment> </Typography>
                  <Typography marginBottom={1}><Moment fromNow>{ item.announcementArray.date }</Moment></Typography>

                 < GiPartyPopper color='#1403f8' style={{ fontSize:'30px',  }}/> <BsFillEmojiHeartEyesFill color='#FFAE42' /> {item.announcementArray.announcement}
                </Typography>
                
              </CardContent>

             
            </CardActionArea>
          </Card>
        </Box>
        </Grid>
       </Grid>
        ))                           
      }


  </DialogContentText>
  </DialogContent>

   {/* ....chat send input start..... */}


   <Container>
      <div className="chat-button-container">
        <div className="emoji">
          
        </div>
      </div>
      <form className="chat-input-container" onSubmit={(event) => sendChat(event)}>
       
        <InputEmoji
          value={msg}
          onChange={setMsg}
          cleanOnEnter
          onEnter={handleEmojiClick}
          placeholder="Type here.."
          
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>



   {/* ....chat send input end...... */}



<DialogActions className='dialogFooterxxxxxx'>
  <Button onClick={handleClose} style={{fontWeight:900, color:'#8b0000'}}>Close</Button> 
  {/* <Button onClick={handleClose}>Subscribe</Button> */}
</DialogActions>
</Dialog>

</Box>

}



{/* // ....................MODAL End......................// */}


      </section>
    </>
  )
}



const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 100%;
  background-color: #b5a9fa;
  /* padding: 0 2rem; */
  /* @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  } */
  .chat-button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
    .emoji {
      position: relative;
      
      svg {
        font-size: 1.5rem;
        color: #ffff00c8;
        cursor: pointer;
      }
      
    }
  }
  .chat-input-container {
    width: 100%;

    border-radius: 2rem;
    display: flex;
    align-items: center;
    /* gap: 2rem; */
    background-color: #ffffff34;
    flex-direction: row;


    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      @media screen and (max-width:550px){
       
        padding: 0.2rem 0.8rem;
        margin-right: 8px;
        margin-left: -8px

      }
      svg {
        font-size: 2rem;
        color: #9a86f3;
      }
    }
  }

  
`;
