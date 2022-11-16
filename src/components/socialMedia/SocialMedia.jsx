import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialMedia = () => {
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
            Join our Whatsapp group
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "260px", height: "60px", background: "#25D366" , '&:hover': {
              background: "#25d366",
              opacity:0.7,
            }}}
            endIcon={<WhatsAppIcon  />}
          >
            Click here to join
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          marginTop={6}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h6">
            Join our Telegram group
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "260px", height: "60px", background: "#229ED9" , '&:hover': {
              background: "#229ED9",
              opacity:0.7,
            }}}
            endIcon={<TelegramIcon  />}
          >
            Click here to join
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          marginTop={6}
          textAlign="center"
          justifyContent="center"
        >
          <Typography marginBottom={1} color="white" variant="h6">
             Learn through our Youtube channel
          </Typography>
          <Button href="https://www.youtube.com/channel/UCHHF_53AKUghBECrksafZog/channels"
            variant="contained"
            sx={{ width: "260px", height: "60px", background: "#FF0000", '&:hover': {
              background: "#FF0000",
              opacity:0.7,
            }}}
            endIcon={<YouTubeIcon  />}
          >
            Click here to access
          </Button>
        </Grid>

        <Grid
          item
          xs={12}
          marginTop={6}
          textAlign="center"
          justifyContent="center"
          marginBottom={6}
        >
          <Typography marginBottom={1} color="white" variant="h6">
             Follow our instagram
          </Typography>
          <Button
            variant="contained"
            sx={{ width: "260px", height: "60px", background: 'linear-gradient(45deg, blue, transparent), radial-gradient(red, transparent)'
          }}
            endIcon={<InstagramIcon  />}
          >
            Click here to follow
          </Button>
        </Grid>




      </Grid>
    </Box>
  );
};
