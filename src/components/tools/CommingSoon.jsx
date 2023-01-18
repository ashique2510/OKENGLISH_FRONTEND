import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";



 const CommingSoon = () => {


  return (
    <Box>
      <Grid container>


        <Grid
          item
          xs={12}
          marginTop={40}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h3">
            Comming Soon ...
          </Typography>

        </Grid>

       
      </Grid>
    </Box>
  );
};


export default CommingSoon
