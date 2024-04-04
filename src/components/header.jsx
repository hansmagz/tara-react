import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Link,
    Box,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Drawer,
    Button,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from "react-router-dom";
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../assets/logo.png';
import '../styles/styles.css'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DownloadIcon from '@mui/icons-material/Download';

const Header = (props) => {

    const ColorButton = styled(Button)(({ theme }) => ({
        // color: theme.palette.getContrastText(purple[500]),
        // backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: '#DF9146',
            color: '#212121'
        },
    }));

    const [scrolled, setScrolling] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(window.scrollY / 500);
                // console.log(window.scrollY / 500);
            } else {
                setScrolling(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const links = [
        { id: 1, route: 'Home', url: '/' },
        { id: 2, route: 'About', url: '/about' },
    ];

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {links.map((link) => (
                    <ListItem button key={link.id} component={RouterLink} to={link.url}>
                        <ListItemText primary={link.route} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <AppBar
                elevation={scrolled > 0.5 ? 4 : 0}
                sx={{
                    backgroundColor: `rgba(33, 33, 33, ${scrolled / 2 > 0.5 ? 0.5 : scrolled / 2})`,
                    WebkitBackdropFilter: `blur(${scrolled * 10 > 10 ? 10 : scrolled * 10}px)`,
                    backdropFilter: `blur(${scrolled * 10 > 10 ? 10 : scrolled * 10}px)`,
                }}
            >
                <Toolbar className='toolBar'>
                    {/* {matches ? (
                        
                    ) : <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexGrow: '0.1',
                            height: '100%',
                            // alignSelf: 'center'
                        }}
                    >
                        {links.map((link) => (
                            // <Link
                            // // sx={{ "&:hover": { backgroundColor: "#DF9146" } }}
                            // component={RouterLink} to={link.url} underline="none" key={link.id} className='header-item'>
                            //     <Typography className='link'>{link.route}</Typography>
                            // </Link>
                            <ColorButton variant="text" key={link.id} component={RouterLink} to={link.url} className='header-button'>
                                {link.route}
                            </ColorButton>
                        ))}
                    </Box>} */}

                    {/* <Box width={200}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon className='menuIcon' fontSize="" style={{ fill: '#DF9146' }} />
                        </IconButton>

                        <Drawer
                            anchor="left"
                            open={state['left']}
                            onClose={toggleDrawer('left', false)}
                        >
                            {list('left')}
                        </Drawer>
                    </Box> */}

                    {matches ? (
                        <Box width={matches ? 100 : 200}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer('right', true)}
                            >
                                <MenuIcon className='menuIcon' fontSize="" style={{ fill: '#E3C263' }} />
                            </IconButton>

                            <Drawer
                                anchor="right"
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                        </Box>
                    ) : <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexGrow: '0.1',
                            height: '100%',
                            // alignSelf: 'center'
                        }}
                    >
                        {links.map((link) => (
                            // <Link
                            // // sx={{ "&:hover": { backgroundColor: "#E3C263" } }}
                            // component={RouterLink} to={link.url} underline="none" key={link.id} className='header-item'>
                            //     <Typography className='link'>{link.route}</Typography>
                            // </Link>
                            <ColorButton variant="text" key={link.id} component={RouterLink} to={link.url} className='header-button'>
                                {link.route}
                            </ColorButton>
                        ))}
                    </Box>}

                    {/* <Box width={200}>

                    </Box> */}

                    <Box width={matches ? 100 : 200} textAlign={'center'}>
                        <Link href="#" underline="none">
                            {/* <Typography variant="h5" className='logo'>
                                Logo
                            </Typography> */}
                            <img src={Logo} className='logo'
                            // style={{ opacity: scrolled }}
                            ></img>
                        </Link>
                    </Box>

                    <Box width={matches ? 100 : 200} textAlign={'right'}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: '24px' }}
                            endIcon={<ArrowDropDownIcon />}
                        >
                            {matches ? <DownloadIcon /> : <Typography fontSize={'20px'} fontWeight={'bold'} color={'black'} fontFamily={'Coolvetica'}>Download App</Typography>}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;