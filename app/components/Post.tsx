'use client';
import React from 'react'
import Image from 'next/image'
import {styled,Typography,Paper} from '@mui/material'
import Link from 'next/link'

type props = {
    post:Blogpost
}

const ReactImage = styled(Image)({
    borderRadius:"8px"
})

export default function Post({post}:props) {
    return (
        // <Link href={`/products/${post.id}`}>
            <Paper sx={{display:"flex",alignItems:"center",flexDirection:"column",padding:"12px"}}>
                {/* <ReactImage src={post.url} alt={post.title} width={200} height={180}/> */}
                <Image src={post.url} height={200} width={200} alt=''/>
                <Typography sx={{textAlign:"center",marginTop:"12px",fontSize:"15px",height:"60px"}}>{post.title}</Typography>
            </Paper>
        // </Link>
    )
}
