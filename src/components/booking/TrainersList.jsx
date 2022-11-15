import React, { useEffect, useState } from "react";
import {
 
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Stack, 
} from "@mui/material";
import { AspectRatio, Box, Button, Card, IconButton, Typography } from '@mui/joy'
import { BookmarkAdd } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

const cards = [1];

const TrainersList = () => {

   const [ tutor ,setTutor ] = useState([])
   console.log('tutro data',tutor);

  const tutorData = useSelector((state) => state.tutorInfo.tutorData)



  useEffect(() => {

    setTutor(tutorData)

  },[tutorData])


  return (


    <Box>
    {/* Hero unit */}
    <Box
      sx={{
        // bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          // variant="h2"
          align="center"
           sx={{color:'white', fontSize:'30px'}}        
          gutterBottom
        >
          Find a Tutor
        </Typography>
        <Typography variant="h5" align="center"  sx={{color:'white'}} paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. simply skip over it entirely.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button  sx={{color:'white'}} variant="contained">Main call to action</Button>
          <Button  sx={{color:'white'}} variant="outlined">Secondary action</Button>
        </Stack>
      </Container>

      
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>


        { tutor && (

         tutor.map((item,index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>


       

<Card variant="outlined" sx={{   background:
          'linear-gradient(to bottom right, #b734eb, pink)'}} >
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Name : {item.name}
      </Typography>
      <Typography level="body2">Qualification : {item.education} </Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={item.trainerImgUrl}
          loading="lazy"
          alt="tutorImg"
        />
      </AspectRatio>

      <Box >

         <Rating name="size-medium" defaultValue={4} />
        <div>
          <Typography level="body3">Experience : {item.experience}</Typography>
         
        </div>
        <Link to={`/select_plan/${item._id}`} >
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="tutor details"
          
          sx={{ ml: 'auto', fontWeight: 600 , backgroundColor:'white' , marginTop:'12px'}}
        >
          Show Details
        </Button>
        </Link>
      </Box>
    </Card>



          </Grid>
        )))}

        
      </Grid>
    </Container>
  </Box>





   
  );
};

export default TrainersList;


// <Card sx={{ display: "flex", background:
// 'linear-gradient(to bottom right, #b734eb, pink)' }} >
// <Box sx={{ display: "flex", flexDirection: "column" }}>
//   <CardContent sx={{ flex: "1 0 auto" }}>
//     <Typography component="div" variant="h5">
//       Live From Space
//     </Typography>
//     <Typography
//       variant="subtitle1"
//       color="text.secondary"
//       component="div"
//     >
//       Lizards are a widespread group of squamate reptiles, with over
//       6,000 species, ranging across all continents except Antarctica
//     </Typography>
//   </CardContent>
//   <CardActions>
//   <Button variant="outlined"  >Profile</Button>
//   <Button variant="contained"  >Book Now</Button>

//   {/* <IconButton variant="outlined">
//  <FavoriteBorder />
//   </IconButton> */}

//   </CardActions>
// </Box>
// <CardMedia
//   component="img"
//   sx={{ width: 180 }}
//   image="https://thumbs.dreamstime.com/b/portrait-young-male-teacher-background-school-blackboard-teacher-s-day-knowledge-day-back-to-school-study-159722312.jpg"
//   alt="Live from space album cover"
// />
// </Card>