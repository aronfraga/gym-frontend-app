import * as React from 'react';
import { setTokenDefault } from "../../redux/actions/defaultAction";
import { destroyToken } from '../../services/cookies';
import { useAuth0 } from '@auth0/auth0-react';
import styles from "../NavBar/NavBar.module.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';




const pages = ['rutinas', 'staff', 'feedback'];
// const settings = [ 'tienda','seguimiento', 'clases',];

const NavBar = () => {

    const { user, logout } = useAuth0();
    const { id } = useParams()

    const [anchorElNav, setAnchorElNav] = React.useState();
    const [anchorElUser, setAnchorElUser] = React.useState();


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        destroyToken();
        setTokenDefault();
        logout({ returnTo: window.location.origin });
    };
    const handlerCloseUserMenu = () => {
        setAnchorElUser()
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav();
    };


    return (

        <AppBar style={{ margin: 0 }} position="static">
            <Container disableGutters className={styles.mainContainer} maxWidth={false} width="100%">
                <Toolbar className={styles.toolBar} sx={{ gap: '20px' }} >
                    <div className={styles.appGym} >
                        <FitnessCenterIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: 'capitalize'
                            }}
                        >
                            app gym
                            {/* {user.name} */}
                        </Typography>
                    </div>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        App Gym
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', } }}>
                        <Link to={'/'} style={{ textDecoration: 'none' }}  >
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                                INICIO
                            </Button>
                        </Link>
                        {pages.map((page) => (

                            <Link to={`/${page}`} style={{ textDecoration: 'none' }} key={page} >
                                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src={user?.picture} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handlerCloseUserMenu}
                        >
                            {/* <Link to={`/${id}`} style={{ textDecoration: 'none' }} >
                                <MenuItem >
                                    <Typography textAlign="center">Perfil</Typography>
                                </MenuItem>
                            </Link> */}
                            <MenuItem>
                                <Typography onClick={handleCloseUserMenu} textAlign="center">Cerrar Sesion</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Link to="/planes" style={{ textDecoration: 'none' }} >
                        <Button sx={{
                            paddingRight: '25px',
                            paddingLeft: '25px',
                            color: 'white',
                            display: 'flex',
                            borderRadius: '6px',
                            background: '#000FFF',
                            alignItems: "center",
                            "&:hover": { backgroundColor: '#5151519c', transition: "1s" }
                        }}
                        > Mi Plan </Button>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default NavBar;
