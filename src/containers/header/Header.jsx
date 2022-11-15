import React, { useEffect } from 'react'
import './header.css'
// import people from '../../assets/people.png'
import dummy1 from '../../assets/shamseerImg1.png'
import dummy2 from '../../assets/shamseerImg2.png'
import dummy3 from '../../assets/shamseerImg3.png'
import announcement from '../../assets/announcment.jpg'
import chatImage from '../../assets/chatimage.jpg'
import article from '../../assets/article.png'
import booking from '../../assets/booking.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getAnnouncement } from '../../utils/ApiRoutes'

import Moment from 'react-moment';
import 'moment-timezone';

  // ....................MODAL......................//

  import { BsFillEmojiHeartEyesFill } from 'react-icons/bs'
  import { GiPartyPopper } from 'react-icons/gi'
  import { HiSpeakerphone } from 'react-icons/hi'
  import Button from '@mui/material/Button';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';
  import { Box, Typography, CardContent, CardActionArea, Card , Grid } from '@mui/material'
  import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getTutorInfo } from '../../redux-toolkit/reducer/tutorReducer'

  // ....................MODAL......................//




const Header = () => {

  console.log('hii');

  const [allImages, setAllImages] = useState([dummy1,dummy2,dummy3])
  const  [selectedImage, setSelectedImage] = useState(0)
  const [announceData, setAnnounceData] = useState('')

  const dispatch = useDispatch()


  // ....................MODAL......................//

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

  
    // ....................MODAL......................//

useEffect (()=>{

  const announement = async() => {
    const announce= await axios.get(getAnnouncement)
    setAnnounceData(announce.data)
    console.log('announcemntttt',announce);
  }
  announement()

},[])

// Get tutors list for booking page

useEffect(() => {

  dispatch(getTutorInfo())

},[])


// useEffect(()=>{
//   setInterval(()=>{
//        setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1 : 0)
//   },4000)
// },[ ])

  return (
    <div className="okEng__header section__padding" id="home">
      <div className="okEng__header-content">
        <h1 className="gradient__text">
          A Platform for your passion to get nourished
        </h1>
        <p>
          We focus on motivating passionate language learners and making them
          confident to speaking like a native
        </p>
        {/* <div className='okEng__header-content__input'>
           <input type='email' placeholder='Enter your email address' />
           <button type='button'>Get Started</button>
        </div>
         <div className='okEng__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
         </div> */}
        <div className="cards" >
          <div className="card_card1"  onClick={handleClickOpen('paper')}>
            <div className="container">
              <img src={announcement} alt="announcement" />
            </div>
            <div className="details">
              <h5>New Announcement</h5>
              
            </div>
          </div>

          <Link to={"/setAvatar"}>
            <div className="card_card2">
              <div className="container">
                <img src={chatImage} alt="chatImage" />
              </div>
              <div className="details">
                <h5>Chat with your new friends</h5>
              </div>
            </div>
          </Link>

      <Link to={'/booking'} >
          <div className="card_card4">
            <div className="container">
              <img src={booking} alt="booking" />
            </div>
            <div className="details">
              <h5>Book your tutor</h5>
            </div>
          </div>
      </Link>

      <Link to={'/article_home'} >
          <div className="card_card3">
            <div className="container">
              <img src={article} alt="article" />
            </div>
            <div className="details">
              <h5>Write your articles & publish</h5>
            </div>
          </div>
          </Link>

        </div>
      </div>

      <div className="okEng__header-image">
        <img src={allImages[selectedImage]} alt="headerImage" />
      </div>

      {/* // ....................MODAL......................// */}



{open &&

        <Box>
      {/* <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className='mainDialog'
      >

        <DialogTitle className='dialogTitle' id="scroll-dialog-title" color={'red'} fontWeight={800} >Announcements <HiSpeakerphone color="#FFAE42" style={{ fontSize:'25px',  }} /> </DialogTitle>
        
        <DialogContent className='dialogContent' dividers={scroll === 'paper'} >
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
        <DialogActions className='dialogFooter'>
          <Button onClick={handleClose} style={{fontWeight:900, color:'#8b0000'}}>Close</Button> 
          {/* <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>

        </Box>

}



    {/* // ....................MODAL......................// */}


         



    </div>
  );
}

export default Header

