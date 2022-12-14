import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import {CgUnavailable} from 'react-icons/cg' 
import {GrStatusGood} from 'react-icons/gr'


const CallingHome = () => {
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

          <Typography marginBottom={1} color="white" variant="h5">
            My Status
          </Typography>

          <Typography marginBottom={1} color="red" variant="h4" fontWeight={800}>
            I am not available right now.
          </Typography>

          <Typography marginBottom={1} color="white" variant="h5">
            Change My Status
          </Typography>

          <Button
          variant="contained"
          sx={{
            width: "190px",
            height: "60px",
            marginRight:'15px',
            borderRadius: "10px",
            background: "#0da043 ",
            "&:hover": {
              background: "#25d366",
              opacity: 0.7,
            },
          }}
          startIcon={<GrStatusGood style={{ fontSize: "26px" }} />}
        >
          <p style={{ fontSize: "15px", fontWeight: "bolder" }}> Available</p>
        </Button>


        <Button
          variant="contained"
          sx={{
            width: "190px",
            height: "60px",
            borderRadius: "10px",
            background: "#ce1a1a ",
            "&:hover": {
              background: "#e02929",
              opacity: 0.7,
            },
          }}
          startIcon={<CgUnavailable style={{ fontSize: "26px" }} />}
        >
          <p style={{ fontSize: "15px", fontWeight: "bolder" }}> Not Available</p>
        </Button>

        </Grid>






      </Grid>
    </Box>
  );
};

export default CallingHome;
