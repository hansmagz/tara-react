import React from 'react';
import { Stack, Container, Typography, Button, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Truck from '../assets/truck-hero.png';
import HeroPic from '../assets/Hero.png';
import GooglePlay from '../assets/google-play-button.png';
import Appstore from '../assets/appstore-button.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import Dash from '../assets/dash.svg';
import Reveal from './reveal';
import '../styles/styles.css'

const Hero = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className='heroBox'>
      {/* <Stack mt={16} alignItems={'center'} textAlign={'center'} >
        
      </Stack> */}
      <Grid container justifyContent={'flex-start'}>
        <Grid item md={12} mt={12} textAlign={'-webkit-center'}>
          <Reveal>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <img src={Dash} height={'6px'}></img>
              <Typography variant='h5' color="primary" pb={0} mx={2} lineHeight={'1.1em'}>
                <span style={{ fontWeight: '500', fontStyle: 'italic' }}>Swiftly Yours:</span>{' '}
                <span style={{ fontWeight: '300' }}>Your Ultimate Transport Companion.</span>
              </Typography>
              <img src={Dash} height={'6px'}></img>
            </Stack>
            <Typography variant='h2' fontWeight={100} color={'white'}>
              ALL-IN-ONE TRANSPORT APP
            </Typography>
            <Typography variant="h6" fontWeight={100} fontStyle={'italic'} color={'white'}>
              Expanding soon to Cebu, Davao & Gensan
            </Typography>
          </Reveal>
        </Grid>
        <Grid item md={12} textAlign={'-webkit-center'}>
          <Reveal>
            {/* <div className="truck-picture"></div> */}
            {/* <Box className='truck-picture' sx={{backgroundImage:`url(${Trucks})`, backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>

            </Box> */}
            {/* <img src={Trucks} height={'500'}></img> */}
            <img class="responsive-image" width={1200} src={HeroPic} alt="Responsive Image"></img>
          </Reveal>
        </Grid>
        <Grid container mx={{ md: 8, sm: 4 }} justifyContent={{ md: 'space-between', sm: 'space-between', xs: 'center' }}>
          <Grid item>
            <img src={GooglePlay} height={'50'} style={{ marginRight: '2em' }}></img>
            <img src={Appstore} height={'50'}></img>
          </Grid>
          <Grid item>
            <FacebookIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <InstagramIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <TwitterIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <MailIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
          </Grid>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Hero;