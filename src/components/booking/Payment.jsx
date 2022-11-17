import React from 'react'
import { Box, Button, Grid } from '@mui/material'
import { AccountBalance } from '@mui/icons-material'
import { paymentOrder , paymentVerify} from '../../utils/ApiRoutes'
import axios from 'axios'
import { useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'

import Moment from 'react-moment';
import 'moment-timezone';
import { useEffect } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'



export const Payment = () => {

  const navigate = useNavigate()

               const [ userData ,setUserData ] = useState({})

	const planDetails = useSelector( state => state.choosedPlan.planSummary)
	const userDetails = useSelector((state) => state.auth.user)
  const ProfilePic = localStorage.getItem('profilePicUrl');

  useEffect(() => {
        const user= JSON.parse(localStorage.getItem('user'))
            if(!user){
              toast.error('Please register or login before continuing !!', {
                position: toast.POSITION.TOP_CENTER
                });
              navigate('/signUp')
            }
  }, [])


  useEffect(() => {

    if(ProfilePic){
      const Datas = {...userDetails, ProfilePic }
      setUserData(Datas)
      
    }

  } ,[ProfilePic])



  const [book, setBook] = useState({
		name: "OK ENGLISH",
		author: "John Green",
		img: "https://res.cloudinary.com/dtldzc9tg/image/upload/v1668714369/20220725_165815_0000_tzvjts.png",
		price: planDetails.totalAmount ,
	});


  const initPayment = (data) => {
		const options = {
			key: process.env.RAZ_KEY_ID,
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response) => {
				try {
					const { data } = await axios.post(paymentVerify, {response:response ,planDetails:planDetails, userDetails:userData });
					console.log('response after verify',data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const { data } = await axios.post(paymentOrder, { amount: book.price });
			console.log('from razorpay back end',data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};


  return (
    <Box>

    <Grid container marginTop={6} alignItems="center" justifyContent="center">
        <Grid item xs={9} md={6} marginBottom={3}>

     <TableContainer component={Paper}  >
      <Table  aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3} sx={{fontSize:'25px',fontWeight:600,color:'green'}}>
              Details
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2} sx={{fontSize:'20px',fontWeight:500,color:'red'}} >Plans</TableCell>
            <TableCell align="right" sx={{fontSize:'20px',fontWeight:500,color:'red'}}>Agenda</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

			{/*  */}
      <TableRow>
            <TableCell colSpan={2}>Tutor Name :</TableCell>
            <TableCell align="right">{planDetails.tutorName}</TableCell>
          </TableRow>
			<TableRow>
            <TableCell colSpan={2}>Duration :</TableCell>
            <TableCell align="right">{planDetails.radioMonth}</TableCell>
          </TableRow>

		  <TableRow>
            <TableCell colSpan={2}>Day per Week :</TableCell>
            <TableCell align="right">{planDetails.radioDays}</TableCell>
          </TableRow>

           <TableRow>
            <TableCell colSpan={2}>Minutes per Day :</TableCell>
            <TableCell align="right">{planDetails.radioMinutes}</TableCell>
          </TableRow>

		  <TableRow>
            <TableCell colSpan={2}>Start Date :</TableCell>
            <TableCell align="right"><Moment format="DD/MM/YYYY" >{ planDetails.startDate }</Moment> </TableCell>
          </TableRow>

		  <TableRow>
            <TableCell colSpan={2}>Preferred Time :</TableCell>
            <TableCell align="right"><Moment format="hh:mm A" >{ planDetails.startDate }</Moment> </TableCell>
          </TableRow>

{/*  */}

          <TableRow>
		    <TableCell align="center" colSpan={3} sx={{fontSize:'20px',fontWeight:600,color:'green'}}>
              Total Amount
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2} sx={{fontSize:'18px',fontWeight:600,color:'red'}}>Amount :</TableCell>
            <TableCell align="right" sx={{fontSize:'18px',fontWeight:600,color:'red'}}>₹ { planDetails.totalAmount } /-</TableCell>
          </TableRow>



        </TableBody>
      </Table>
     </TableContainer>

	 </Grid>
	 </Grid>


      <Grid container alignItems="center" justifyContent="center" >
        <Grid item xs={6} md={4} marginTop={1} marginBottom={5}  >
          <Button variant="contained" onClick={handlePayment} color="success" sx={{ fontSize: '20px', fontWeight: '600' ,borderRadius:'25px' }} endIcon={<AccountBalance />} fullWidth>Make Payment</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
