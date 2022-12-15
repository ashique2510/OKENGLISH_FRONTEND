import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import { CgUnavailable } from "react-icons/cg";
import { GrStatusGood } from "react-icons/gr";
import { IoCall } from "react-icons/io5"; 
import { AiOutlineMessage } from "react-icons/ai"; 

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Slide from '@mui/material/Slide';
import SendIcon from '@mui/icons-material/Send';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const CallingHome = () => {



// ......Ask modal Started.....

const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

// ......Ask modal Ended.....




  return (
    <Box>
      <Grid container alignItems="center" justify="center">
        <Grid
          item
          xs={12}
          marginTop={2}
          textAlign="center"
          justifyContent="center"
        >

          <Box  margin={2} borderRadius={3} paddingTop={2} paddingBottom={2}  sx={{ marginBottom:'50px',background: 'linear-gradient(45deg, #740491, transparent), radial-gradient(red, transparent)'
          }} >

                       <Typography marginBottom={1}>NOTIFICATIONS</Typography>

                <Badge color="success" overlap="circular" badgeContent="0">
                  < NotificationsActiveIcon style={{
                          fontSize: "33px",
                          color: "#f7c82d",
                        }} />

                </Badge>

          <Typography marginBottom={1} color="white" fontSize='17px'>
          Please click this button if you are available
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "40px",
              marginRight: "15px",
              borderRadius: "10px",
              background: "#0da043 ",
              "&:hover": {
                background: "#25d366",
                opacity: 0.7,
              },
            }}
            startIcon={<GrStatusGood style={{ fontSize: "26px" }} />}
          >
            <p style={{ fontSize: "10px", fontWeight: "bolder" }}> Available</p>
          </Button>

          <Button
            variant="contained"
            sx={{
              width: "150px",
              height: "40px",
              borderRadius: "10px",
              background: "#ce1a1a ",
              "&:hover": {
                background: "#e02929",
                opacity: 0.7,
              },
            }}
            startIcon={<CgUnavailable style={{ fontSize: "26px" }} />}
          >
            <p style={{ fontSize: "10px", fontWeight: "bolder" }}>
              {" "}
              Not Available
            </p>
          </Button>

          <Typography marginTop="12px" marginBottom={1} color="white" variant="h6">
            My current Status
          </Typography>

          <Typography color="#fa0606" bgcolor='#f7e0e0' display={"inline"} borderRadius={2} padding='5px' fontSize="24px"  fontWeight={900}>
            I am not available right now
          </Typography>


          </Box>




          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Ashique C
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>


          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://upload.wikimedia.org/wikipedia/commons/e/ee/Unknown-person.gif' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Shamseer mohammed
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>



         


          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid red'}} src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" aria-label="recipe" />
                      
                    <Typography color="black" marginLeft={1}>
                      Ashique Mohammed C
                    </Typography>

                    <Box marginLeft="auto">
                      
                    <Button onClick={handleClickOpen}
            variant="contained"
            sx={{ width: "80px", height: "35px", borderRadius:'35px' , background: "#088536" , '&:hover': {
              background: "#15a84b",
              opacity:0.7,
            }}}
            endIcon={<AiOutlineMessage style={{fontSize:'18px'}} />}
          >
            Ask
          </Button>

                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>




          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Jabir
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>



          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Ashique C
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>


          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Ashique C
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>



          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Ashique C
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>


          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Ashique C
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>


          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            margin="20px"
          >
            <Card style={{ background: "#fff", minWidth: "350px" }}>
              <CardActionArea>
                <CardContent>
                  <Box display="flex" alignItems="center" >
                    <Avatar sx={{width:'55px', height:'55px', border:'2px solid green'}} src='https://i.pinimg.com/736x/c9/e3/e8/c9e3e810a8066b885ca4e882460785fa.jpg' aria-label="recipe" />
                     
                    <Typography color="black" marginLeft={1}>
                      Ashique C
                    </Typography>

                    <Box marginLeft="auto">
                      <IoCall
                        style={{
                          fontSize: "33px",
                          color: "green",
                        }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
      

{/*.................. Ask modal Start.................*/}


<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Send a request"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Hello, Ashique Mohammed C, I would like to talk to you, let me know if you have time.
          </DialogContentText>
        </DialogContent>
        <DialogActions>

          <Typography onClick={handleClose} color='green' fontWeight={700} >SEND</Typography>

          < SendIcon onClick={handleClose} style={{
                          fontSize: "33px",
                          color: "green",
                          marginRight:'10px',
                          marginLeft:'7px'
                        }}/>
        </DialogActions>
      </Dialog>

{/*.................. Ask modal End.................*/}




        </Grid>
      </Grid>
    </Box>
  );
};

export default CallingHome;
