import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import telegramImg1 from '../../assets/telegramImg1.jpeg';
import telegramImg2 from '../../assets/telegramImg2.jpeg';
import telegramImg3 from '../../assets/telegramImg3.jpeg';
import { addTelegramUserName } from '../../utils/ApiRoutes';
import axios from 'axios';
import { useSelector } from 'react-redux';

 const TelegramSetup = () => {
  const [userName, setUserName] = useState('');
  const UserId = useSelector((state) => state.auth.user._id);

  const handleSubmit = (e) => {
    e.preventDefault();

    const addUserName = async () => {
      const res = await axios.post(addTelegramUserName, {
        userName: userName,
        UserId: UserId,
      });
      console.log('response', res);
    };
    addUserName();
  };

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          marginTop={6}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h6">
            Step 1 :
          </Typography>
          <Typography marginBottom={1} color="white" variant="h6">
            Install Telegram if you don't have Telegram on your phone yet
          </Typography>

          <Button
            href="https://play.google.com/store/apps/details?id=org.telegram.messenger"
            variant="contained"
            sx={{
              width: '260px',
              height: '60px',
              borderRadius: '10px',
              background: '#0e5f15 ',
              '&:hover': {
                background: '#33ad2f',
                opacity: 0.7,
              },
            }}
            startIcon={<IoLogoGooglePlaystore style={{ fontSize: '26px' }} />}
          >
            <p style={{ fontSize: '12px', marginRight: '6px' }}>get it on</p>

            <p style={{ fontSize: '16px', fontWeight: 'bolder' }}>
              {' '}
              Google Play
            </p>
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          marginTop={4}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h6">
            Step 2 :
          </Typography>

          <Typography marginBottom={1} color="white" variant="h6">
            Open your Telegram account. Set up a username if you don't already
            have one.
          </Typography>

          <Box marginTop={4}>
            <img
              width="50%"
              style={{ border: '2px solid #ffffffd6', borderRadius: '10px' }}
              src={telegramImg1}
              alt="telegramImag"
            />
          </Box>

          <Box marginTop={4}>
            <img
              width="50%"
              style={{ border: '2px solid #ffffffd6', borderRadius: '10px' }}
              src={telegramImg2}
              alt="telegramImag"
            />
          </Box>

          <Box marginTop={4}>
            <img
              width="50%"
              style={{ border: '2px solid #ffffffd6', borderRadius: '10px' }}
              src={telegramImg3}
              alt="telegramImag"
            />
          </Box>

          <Typography marginBottom={1} marginTop={4} color="white" variant="h6">
            Step 3 :
          </Typography>

          <Typography marginBottom={1} color="white" variant="h6">
            Type your telegram username here. <br />
            <p style={{ fontSize: '17px', color: 'red' }}>
              {' '}
              ( Example : James6061 ){' '}
            </p>
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                style={{
                  background: '#fff',
                  borderRadius: '10px',
                  width: '370px',
                }}
                id="standard-basic"
                label="Please type your telegram username..."
                variant="standard"
              />
            </Box>

            {/* <Link to={'/calling_home'}> */}
            <Button
              type="submit"
              variant="contained"
              sx={{
                width: '160px',
                height: '50px',
                marginTop: '25px',
                marginLeft: '20px',
                marginBottom: '25px',
                borderRadius: '10px',
                background: '#229ED9',
                '&:hover': {
                  background: '#229ED9',
                  opacity: 0.7,
                },
              }}
            >
              Submit
            </Button>
            {/* </Link> */}
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TelegramSetup