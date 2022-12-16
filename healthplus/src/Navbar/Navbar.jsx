// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";

// function TextLinkExample() {
//   return (
//     <div style={{ backgroundColor: "rgb(77, 204, 244)" }}>
//       <Navbar bg>
//         <Container>
//           <Navbar.Brand href="#home">
//             <Link to="/" >
//             <img
//               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB6VBMVEX//////f9xuBT9////+//6/////f7///3/+f/8/f/3//8Iedf0///7/v/UAyny///7//v//fe3AB7r///JACXWAC7WdYX/+vj///IIedi9ACPYACf509/FNlX/9/j/8fitACv94e49hr4Hed0Ab7/z//nNACfGACiyACXQ7fgAcNIGe9PScIfPACPTAzHnr7nWiZO0Fje5AC6hy90AeuX//ez22+LGQ1b/8f6jABGyAB78/+TcmqZvug+9ABzEACzJXW+6Lkm8OVWIqij0ztPW//+TtcpyrdJ9qcfi7/QAb8Tn/vabzNiOzuYsgMSEweMKcLgFY4zI6u6aTVOrADSwcYGQACShGDWOEjYPcanXf5f2rr64JEr15eepACELesrJh5nMmJfQWHQAd+3jt8W9UGIEaahipd16rtipPVPw/93a//Hn9sLH4Jycv2+GplpypxG1Vm7HHj/Xao7k/MPJbn10qC67WXTikK+JpcauyYCVwVq815X/3PLfvMSGt0m71qGgxWDbMVnv+8/tzce7aW7LeG/I5ZuhymG9ZUWwTCbO8pS83Yz5z8roACSJnzCRQiXEjZ+NAAPFrLKOPzvV3epjj7oARXCtvsc7f6BMkeCs2vePpLCW3uxPns1cgpkAW7O09v99lqo0ytbUAAAVTklEQVR4nO2biXcTR57HVe6qPopudbVbstqWUPugWxY+ZFtIGEv4GvngMo5CYAyxSRibgNewDoM9M5DgsCST2Vn2mN0lCxtCjr90f9VqH+KwDW/y4LH1fdiYViPVp393dTsSERISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhL6fy9LkRSLaIplKdrbXsuvI4lQRZGA0GGa9LYX86uIEG5EBgIrvu3F/CoyLIuYlJq6TvX31IaWNTk1PT0FX9Mn3vZifhWZxGxvPnnywOHDJw9l3zM3lQMZit3e3NHR3Nxx4GQ2OPi21/X3U41QAcIDQHig48ChbERG7xFgKCW0YUj4PpmQS5IikrWDUJJkfux9kVSTUkcIHcB7RRh5zkv5kdcEhEuUYJ4HHQOpc3CiKPwofMn4dT2fO5KMNZWq2kuiBsuM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"
//               width="60"
//               height="60"
//               className="d-inline-block align-top"
//               alt="React Bootstrap logo"
//               style={{ borderRadius: "50%" }}
//             /></Link>
//           </Navbar.Brand>
//         </Container>
//         <h3>Welcome: Vikas</h3>
//       </Navbar>
//     </div>
//   );
// }

// export default TextLinkExample;



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['About', 'Pricing', 'Blog'];
const settings = ['Profile'];

function TextLinkExample() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <div style={{backgroundColor: "orange"}}>
    <AppBar position="static" style={{backgroundColor: "rgb(77, 204, 244)"}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HEALTH-Minus
          </Typography>

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
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HEALTH-PLUS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
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
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
    </>
  );
}
export default TextLinkExample;
