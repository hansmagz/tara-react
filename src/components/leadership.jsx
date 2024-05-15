import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from './reveal';
import Default from '../assets/default.jpg';
import Pier from '../assets/pier2.jpg';
import Leader1 from '../assets/leader1.jpg';
import Leader2 from '../assets/leader2.jpg';
import Leader3 from '../assets/leader3.jpg';
// import Leader4 from '../assets/leader4.jpg';
import Leader4 from '../assets/IMG_4742.png';
import Leader6 from '../assets/IMG_4721.png';
import Leader5 from '../assets/Jonash.jpg';
import '../styles/styles.css'

const Section = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container
        bgcolor={'#3D3D3D'}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        py={'10em'}
        color={'white'}
        px={{ xs: '2em', md: '4em', lg: '8em' }}
      sx={{backgroundImage:`url(${Pier})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}
      // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
      // justifyContent="space-between"
      // alignItems="center"
      // spacing={4}
      >
        <Grid item md={8} mdOffset={2} sm={12} xs={12} mb={'6em'} textAlign={'-webkit-center'}>
          <Reveal>
            <span style={{ fontSize: `${isSmScreen ? '4rem' : '6rem'}`, fontFamily: 'Coolvetica' }}>LEADERSHIP</span>
            <Typography variant="h6" textAlign={'justify'}>Meet the visionaries behind the Tara app – our dynamic founders who sparked the idea, fueled the innovation and steered us toward revolutionizing transportation. With a blend of expertise in technology, business, and a shared passion for enhancing user experiences, they've crafted a platform that seamlessly connects you to the future of mobility. Tara sa pagunlad ng transportasyon!</Typography>
          </Reveal>
        </Grid>
        <Grid container md={12} sm={12} xs={12} mb={8}>
          {/* <Grid item md={1} sm={0} xs={0}>

          </Grid> */}
          <Grid item lg={3} md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={isSmScreen ? '500px' : '350px'} sx={{ backgroundImage: `url(${Leader2})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Marc Bundalian</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>President & CEO</Typography>
                {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography> */}
              </Reveal>
            </Grid>
          </Grid>
        </Grid>
        <Grid container md={12} sm={12} xs={12} mb={8}>
          <Grid item lg={3} md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={isSmScreen ? '500px' : '350px'} sx={{ backgroundImage: `url(${Leader6})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Marco Gregorio</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>COO & Vice President</Typography>
                {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography> */}
              </Reveal>
            </Grid>
          </Grid>
        </Grid>
        <Grid container md={12} sm={12} xs={12} mb={8}>
          <Grid item lg={3} md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={isSmScreen ? '500px' : '350px'} sx={{ backgroundImage: `url(${Default})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Marvin Manzon</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>Director</Typography>
                {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography> */}
              </Reveal>
            </Grid>
          </Grid>
        </Grid>
        <Grid container md={12} sm={12} xs={12} mb={8}>
          <Grid item lg={3} md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={isSmScreen ? '500px' : '350px'} sx={{ backgroundImage: `url(${Leader5})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Jonash Bundalian</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>CTO</Typography>
                {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography> */}
              </Reveal>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container my={8}>
          <Grid container spacing={2} md={12} sm={12} xs={12} mb={{ md: 0, sm: 8, xs: 8 }}>
            <Grid item>
              <Reveal>
                <div style={{ width: '350px', height: '350px', backgroundColor: 'white', paddingInline: '1em', paddingBlock: '3em', borderRadius: '16px' }}></div>
              </Reveal>
            </Grid>
            <Grid item md={6} sm={12} xs={12} container direction="column" justifyContent={'space-between'}>
              <Grid item xs>
                <Reveal>
                  <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                    <span style={{ fontSize: '3rem' }}>Marc Bundalian</span>
                  </div>
                  <Typography variant='h5' lineHeight={'0.8em'} mt={1}>Title</Typography>
                  <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container mb={8}>
          <Grid container spacing={2} md={12} sm={12} xs={12} mb={{ md: 0, sm: 8, xs: 8 }}>
            <Grid item>
              <Reveal>
                <div style={{ width: '350px', height: '350px', marginLeft: `${isSmScreen ? '0em' : '20em'}`, backgroundColor: 'white', paddingInline: '1em', paddingBlock: '3em', borderRadius: '16px' }}></div>
              </Reveal>
            </Grid>
            <Grid item xs container direction="column" justifyContent={'space-between'}>
              <Grid item xs>
                <Reveal>
                  <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                    <span style={{ fontSize: '3rem' }}>Bjorn Mayrina</span>
                  </div>
                  <Typography variant='h5' lineHeight={'0.8em'} mt={1}>Title</Typography>
                  <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid container md={12} sm={12} xs={12} mb={8}>
          <Grid item lg={3} md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={isSmScreen ? '500px' : '350px'} sx={{ backgroundImage: `url(${Leader1})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Rayner Lorenzo</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>Director</Typography>
                {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography> */}
              </Reveal>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid container md={12} sm={12} xs={12} mb={8}>
          <Grid item md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={'500px'} sx={{ backgroundImage: `url(${Leader1})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Rayner Lorenzo</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>Director</Typography>
              </Reveal>
            </Grid>
          </Grid>
        </Grid> */}
        <Grid container md={12} sm={12} xs={12} mb={8}>
          <Grid item lg={3} md={4} sm={12} xs={12} mr={{ md: 2, sm: 0, xs: 0 }} height={isSmScreen ? '500px' : '350px'} sx={{ backgroundImage: `url(${Leader4})`, backgroundSize: 'cover', backgroundPosition: 'top', borderRadius: '16px' }}></Grid>
          <Grid item xs container direction="column" mt={2} justifyContent={'space-between'}>
            <Grid item xs>
              <Reveal>
                <div style={{ backgroundColor: '#DF9146', paddingInline: '0.3em', paddingBlock: '0.1em', borderRadius: '8px', display: 'inline-block' }}>
                  <span style={{ fontSize: '3rem' }}>Manny Pacquiao</span>
                </div>
                <Typography variant='h5' lineHeight={'0.8em'} mt={1}>Director</Typography>
                {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography> */}
              </Reveal>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;