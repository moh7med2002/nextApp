'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { changeMode } from '../redux/modeSlice';
import { useTheme } from '@mui/material/styles';




function Navbar() {
 
  const {mode} = useSelector((s:RootState) => s.mode);
  const theme = useTheme();
  const dispatch = useDispatch();
  


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              flexGrow:1,
              display: 'flex' ,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href={'/'}>LOGO</Link>
          </Typography>
          <Button onClick={()=>dispatch(changeMode({mode:"light"}))} sx={{color:theme.palette.text.primary}}>
            light
          </Button>
          <Button onClick={()=>dispatch(changeMode({mode:"dark"}))} sx={{color:theme.palette.text.primary}}>
            dark
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;