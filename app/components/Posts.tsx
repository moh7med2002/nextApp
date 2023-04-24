'use client';
import React, { useState } from 'react'
import {Container , Grid , Button , Box} from '@mui/material'
import { useTheme } from '@mui/material/styles';
import Post from './Post';

type PostsProps = {
    posts:Blogpost[]
}

export default function Posts({posts}:PostsProps) {
    const theme = useTheme();
    const [page , setPage] = useState(20);
  return (
    <Container sx={{paddingY:"20px"}}>
        <Grid container spacing={2}>
            {
                posts.slice(0,page)?.map((item,index)=>
                {
                    return <Grid key={index+'a1'} item xs={3}><Post post={item}/></Grid>
                })
            }
            </Grid>
            <Box sx={{display:"flex" , justifyContent:"center" , marginTop:"30px"}}>
                <Button  sx={{color:theme.palette.text.primary}}
                onClick={()=>setPage(pre=>pre+20)}
                >load more</Button>
            </Box>
    </Container>
  )
}
