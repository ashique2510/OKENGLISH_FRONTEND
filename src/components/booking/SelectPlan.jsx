import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CalendarMonth , DoubleArrow} from "@mui/icons-material";
import axios from 'axios'
import { getBaseAmount } from "../../utils/ApiRoutes";
import { Link, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes"
import { Payment } from "./Payment";

import Moment from 'react-moment';
import 'moment-timezone';
import { useDispatch, useSelector } from "react-redux";
import { addPlans } from "../../redux-toolkit/reducer/bookingReducer";



const SelectPlan = () => {

  

  const [minutesAmount ,setMinutesAmount] = useState('')
  const [daysAmount ,setDaysAmount] = useState('')
  const [ showAmount , setShowAmount ] =useState('')
  const [baseAmount ,setBaseAmount ] = useState('')
  const [daysCount , setDaysCount ] = useState('')
  const [radioMinutes , setRadioMinutes] = useState('')
  const [radioDays , setRadioDays ] = useState('')
  const [radioMonth , setRadioMonth] = useState('')
  const [totalAmount , setTotalAmount ] = useState('')
  const [startDate, setStartDate] = useState('');
  const [ checkAllField, setCheckAllField ] = useState(false)
  const [clickAndContinue , setClickAndContinue] = useState(false)


const navigate = useNavigate()
const dispatch = useDispatch()

const [ tutorArray, setTutorArray ] = useState([])
const [ selectedTutor, setSelectedTutor ] = useState([])
const [ tutorName, setTutorName ] = useState('')
const [ tutorId, setTutorId ] = useState('')

const tutorData = useSelector((state) => state.tutorInfo.tutorData)
console.log('tutor data',tutorData);
const { id } = useParams()


     useEffect(() => {

      setTutorArray(tutorData)

     }, [tutorData])


       useEffect(() => {

          if(tutorArray){
        const result = tutorArray.filter(item => item._id === id);
        setSelectedTutor(result)
          }

       } , [tutorArray, id])

console.log('selected tutor',selectedTutor);

       useEffect(() => {

          if(selectedTutor && selectedTutor.length !== 0){
             setTutorName(selectedTutor[0].name)
             setTutorId(selectedTutor[0]._id)
          }

       }, [selectedTutor])

  
useEffect(() => {

  setDaysAmount(daysCount)

} ,[daysCount])


  function handleChangeMinutes (e){

    if(e.target.value === 'fifteenMinutes'){
      setMinutesAmount(baseAmount)
       setDaysAmount(daysCount)
       setRadioMinutes('15 Minutes Per Day')
    }else{
      setMinutesAmount(baseAmount*2)
      setDaysAmount(daysCount)
      setRadioMinutes('30 Minutes Per Day')
    }
  }


  useEffect(() =>{


    function handleChangeDays (){


      if(minutesAmount && daysAmount){

           if(daysAmount === '3_daysPerWeek'){
            setDaysAmount(minutesAmount*12)
            setRadioDays('3 Days Per Week')
           }else if (daysAmount === '4_daysPerWeek'){
            setDaysAmount(minutesAmount*16)
            setRadioDays('4 Days Per Week')
           }else if (daysAmount === '5_daysPerWeek'){
            setDaysAmount(minutesAmount*20)
            setRadioDays('5 Days Per Week')
          }else if (daysAmount === '6_daysPerWeek'){
            setDaysAmount(minutesAmount*24)
            setRadioDays('6 Days Per Week')
          }
      }
  }
  handleChangeDays()
  
} , [daysAmount , minutesAmount ])




  useEffect(() => {

const showUpdate = () =>{
    if(minutesAmount && daysAmount){
        setShowAmount(daysAmount)
    }
  }
  showUpdate()

  } , [minutesAmount ,daysAmount , showAmount])


useEffect(() => {
  const fetchBaseAmount = async() => {

    const baseAmount = await axios.get(getBaseAmount)
    setBaseAmount(baseAmount.data.baseAmount)

  }
  fetchBaseAmount()
},[])

          useEffect(() => {
              
            if(radioMonth === '1 Month'){
              console.log('1 Month', showAmount);
              setTotalAmount(showAmount)
            }else if(radioMonth === '2 Month'){
              console.log('2 Month', showAmount*2);
              setTotalAmount(showAmount*2)
            }else if (radioMonth === '3 Month'){
              console.log('3 Month', showAmount*3);
              setTotalAmount(showAmount*3)
            }
            
          }, [radioMonth, radioMinutes, radioDays, totalAmount, startDate])
          
            


          useEffect(() => {
                 
            if(radioMonth && radioMinutes && radioDays && totalAmount && startDate){

              setCheckAllField(true)
              setClickAndContinue(false)
            }

          }, [radioMonth, radioMinutes, radioDays, totalAmount, startDate])


       function continueButton () {

          if(!radioMonth || !radioMinutes || !radioDays || !totalAmount || !startDate){

            setClickAndContinue(true)

            }
            
            if(radioMonth && radioMinutes && radioDays && totalAmount && startDate){
                     
                 const datas = {radioMonth, radioMinutes, radioDays, totalAmount, startDate ,tutorName ,tutorId }

                 dispatch(addPlans(datas))
             
                 navigate('/booking_payment')
  
              }

          }

console.log('selectedTutor',selectedTutor);

  return (
    <Box >
      <Typography variant="h3" color="white" textAlign="center">
        Private Plans
      </Typography>
      <Typography variant="h5" color="white" textAlign="center">
        Start learning English with a private tutor today!
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center" marginTop={4}>
        <Box>
          {
            selectedTutor && selectedTutor.length !== 0 &&(
                <img src={selectedTutor[0].trainerImgUrl} alt="tutorImg"
               width='120px' height='120px' style={{borderRadius:'50%', border:'3px solid orange'}} 
               />
            )
          }
        </Box>
      </Box>
       <Box>
              {
                 selectedTutor && selectedTutor.length !== 0 &&(
                  <Typography  variant="h5" color="red" fontWeight={700} textAlign="center">{selectedTutor[0].name}</Typography>
                 )
              }
        </Box>

      <Grid container marginTop={6}>
        <Grid item xs={12} sm={6} marginBottom={3}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Grid item xs={9}>
              <Typography
                variant="h5"
                color="white"
                textAlign="center"
                marginBottom="10px"
              >
                Set your weekly agenda
              </Typography>
              <Box sx={{ display: "flex" }}>
                <CalendarMonth sx={{ fontSize: "60px", color: "#fd7455" }} />

                <FormControl
                  fullWidth
                  variant="filled"
                  sx={{ backgroundColor: "#fcccc3", borderRadius: "10px" }}
                  
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Minutes per Day
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    // value={minutesAmount}
                    onChange={handleChangeMinutes}
                  >
                    <MenuItem value="">
                      <em>Minutes per Day</em>
                    </MenuItem>
                    <MenuItem value={'fifteenMinutes'}>15 minutes per day</MenuItem>
                    <MenuItem value={'thirtyMinutes'}>30 minutes per day</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Box sx={{ display: "flex", marginTop: "40px" }}>
                <CalendarMonth sx={{ fontSize: "60px", color: "#fd7455" }} />

                <FormControl
                  fullWidth
                  variant="filled"
                  sx={{ backgroundColor: "#fcccc3", borderRadius: "10px" }}
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Days per Week
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    // value={setDaysCount}
                    onChange={ (e) => setDaysCount(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Days per Week</em>
                    </MenuItem>
                    <MenuItem value={'3_daysPerWeek'}>3 days per week</MenuItem>
                    <MenuItem value={'4_daysPerWeek'}>4 days per week</MenuItem>
                    <MenuItem value={'5_daysPerWeek'}>5 days per week</MenuItem>
                    <MenuItem value={'6_daysPerWeek'}>6 days per week</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <Typography
                variant="h5"
                color="white"
                textAlign="center"
                // marginTop="10px"
                marginTop={7}
              >
                Select Your Start Date and Time
              </Typography>
              {/* sm: {height:'60px'} */}
             <Box  sx={{ display: "flex", marginTop: "10px" }}>
             <CalendarMonth sx={{ fontSize: "60px", color: "#fd7455" }} />

           <Styles>

             <DatePicker
             isClearable
       placeholderText="Select Your Start Date and Time"
       showTimeSelect
       dateFormat="MMMM d, yyyy h:mmaa"
       selected={startDate}
       selectsStart
       startDate={startDate}
       minDate={new Date()}
       excludeDates={[new Date('2022-10-28'), new Date('2022-10-30') , new Date('2022-11-02') ]}
       excludeTimes={[ setHours(setMinutes(new Date(), 0), 18) , setHours(setMinutes(new Date(), 30), 11) ]} 
             onChange={date => setStartDate(date)}
      
     />
       
       </Styles>
     
             </Box>

             {/* <Box color={'white'}>Selected start date={startDate ? startDate.toString() : null}</Box> */}


             

            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            marginBottom="10px"
          >
            Pick a commitment level
          </Typography>

          <Box display="flex" alignItems="center" justifyContent="center"  >
            <FormControl sx={{width:'70%'}}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                // value={value}
                onChange={(e) => setRadioMonth(e.target.value)}
              >

                <Box marginBottom={2} >
                  <Card style={{background:'#fcccc3'}}>
                    <CardActionArea>
                      <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                          1 Month
                        </Typography>
                        <Typography variant="body1" color="green" textAlign={"center"}>
                          {
                            showAmount&&(
                              <h1>{ `₹ ${showAmount}` }</h1>
                            )
                          }
                        </Typography>
                      </CardContent>

                      <Box marginLeft={2} >
                        <FormControlLabel
                          value="1 Month"
                          control={<Radio />}
                          label="Please select"
                        />
                      </Box>
                    </CardActionArea>
                  </Card>
                </Box>

                <Box marginBottom={2}>
                  <Card style={{background:'#fcccc3'}}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          2 Month
                        </Typography>
                        <Typography variant="body1" color="green" textAlign={"center"}>
                        {
                            showAmount&&(
                              <h1>{ `₹ ${showAmount*2}` }</h1>
                            )
                          }
                        </Typography>
                      </CardContent>

                      <Box marginLeft={2}>
                        <FormControlLabel
                          value="2 Month"
                          control={<Radio />}
                          label="Please select"
                        />
                      </Box>
                    </CardActionArea>
                  </Card>
                </Box>

                <Box marginBottom={2}>
                  <Card style={{background:'#fcccc3'}}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          3 Month
                        </Typography>
                        <Typography variant="body1" color="green" textAlign={"center"}>
                        {
                            showAmount&&(
                              <h1>{ `₹ ${showAmount*3}` }</h1>
                            )
                          }
                        </Typography>
                      </CardContent>

                      <Box marginLeft={2}>
                        <FormControlLabel
                          value="3 Month"
                          control={<Radio />}
                          label="Please select"
                        />
                      </Box>
                    </CardActionArea>
                  </Card>
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
      </Grid>

            
      
      <Grid container  alignItems="center" justifyContent="center">
        

       <Grid item xs={9} md={6} sx={{backgroundColor:'skyblue'}} marginBottom={5} marginTop={4} borderRadius={4}>
            { checkAllField &&
            <>
            <Typography variant="h4" color="red" fontWeight={600} textAlign="center" marginTop={3} marginBottom={2} >Plan Summary</Typography>
            

            <Typography variant="h5" color="back" marginBottom={2} textAlign="center">{radioMinutes} | {radioDays} | {radioMonth}</Typography>
            <Typography variant="h5" color="green" fontWeight={900} textAlign="center">Total Amount : ₹ {totalAmount}</Typography><br/>
             
            <Typography variant="h5" color="red" marginBottom={2} textAlign="center">Start Date and Time : <Moment format="DD/MM/YYYY - hh:mm A" >{ startDate }</Moment></Typography> 
 
            </>
            }
         
       </Grid>

      </Grid>

      {
        clickAndContinue &&

        <Typography variant="h5" fontWeight={600} color="red" textAlign="center"> Please Select All The field !! </Typography>

      }

      <Grid container  alignItems="center" justifyContent="center" >

      <Grid item xs={6} md={4} marginTop={1} marginBottom={5}  >
          <Button onClick={continueButton} variant="contained" color="success" sx={{fontSize:'20px',fontWeight:'600', borderRadius:'25px'}} endIcon={<DoubleArrow />} fullWidth>Continue</Button>
      </Grid>
      </Grid>

    </Box>



  );
};

export default SelectPlan;


const Styles = styled.div`

 .react-datepicker-wrapper,
 .react-datepicker__input-container,
 .react-datepicker__input-container input {
   width: 100%;
   height: 60px;
   border-radius: 10px;
   font-size: large;
   background-color: #fcccc3;
 }

 .react-datepicker__close-icon::before
 .react-datepicker__close-icon::after {
   background-color: red;
 }

 .react-datepicker__header {
  text-align: center;
  background-color: #3e82cf;
  border-bottom: 0px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding-top: 8px;
  position: relative;

}

.react-datepicker__today-button {
  background: #3e82cf;
  border-top: 0px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}
/* For the calendar area you can use: */

.react-datepicker {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  background-color: #a66;
  color: #000;
  border: 0px;
  border-radius: 0;
  display: inline-block;
  position: relative;
}

.react-datepicker__time-box{
  background-color: #a66;

}




`;
