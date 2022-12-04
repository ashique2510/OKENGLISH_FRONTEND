import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from "react-router-dom";


export const CallingMode = () => {
  return (
    <Box>
      <Grid container>


        <Grid
          item
          xs={12}
          marginTop={14}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h6">
            Direct Call method
          </Typography>

          <Link to={'/commingsoon'} >
          <Button 
            variant="contained"
            sx={{ width: "260px", height: "60px", borderRadius:'35px' , background: "#25D366" , '&:hover': {
              background: "#25d366",
              opacity:0.7,
            }}}
            endIcon={<LocalPhoneIcon style={{fontSize:'26px'}} />}
          >
            Call
          </Button>
          </Link>

        </Grid>

        <Grid
          item
          xs={12}
          marginTop={8}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h6">
          Call Via Telegram
          </Typography>

          <Link to={'/telegram_setup'} > 
          <Button
            variant="contained"
            sx={{ width: "260px", height: "60px", borderRadius:'35px' , background: "#229ED9" , '&:hover': {
              background: "#229ED9",
              opacity:0.7,
            }}}
            endIcon={<LocalPhoneIcon style={{fontSize:'26px'}} />}
          >
            Call Via Telegram
          </Button>
          </Link>

        </Grid>


      </Grid>
    </Box>
  );
};
