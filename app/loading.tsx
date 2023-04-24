'use client';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
    return (
        <Box 
    color="error"
    sx={{height:"100vh"  , width:"100%" , display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column" , rowGap:"40px"}}>
        <Box sx={{ width: '30%' }}>
            <LinearProgress />
        </Box>
    </Box>
    )
  }