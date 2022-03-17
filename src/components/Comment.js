//import Library
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//import Icon
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 


export default function Comment({children}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid>
            <Grid is_flex  margin='0px 10px' width='310px' gap='5px'>
                <Grid is_flex alignItems='center'>
                    <Image width='30px' borderRadius = '5px' height='30px' src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAxMTJfMTkw%2FMDAxNjQxOTgxMjM1MjM4.0qKjMr9rB08fijTC4jQdTXXV8378Vn2hnZsQC4x5U5Qg.x7pc07yAYvAgOgBZq4MqjanOLF3tUj54dhOmAPBnsTMg.JPEG.rmfnxkzh%2Fimage%25A3%25DF580922312.jpg&type=sc960_832'/>
                </Grid>
                <Grid width='250px' height='auto'>
                    <Text fontSize='12px' fontWeight='700'>Nick</Text>
                    <Text>안녕하시오 이건 댓글인데</Text>
                </Grid>
                <Grid is_flex flexDirection='column' alignItems='center' >
                    <IconButton
                        aria-label="more"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        sx={{margin : '0 5px',padding:'0'}}
                    >
                        <MoreHorizIcon />
                    </IconButton>
                    <Grid is_flex alignItems='center' justifyContent='space-evenly'>
                        <FavoriteBorderOutlinedIcon  sx={{width:'10px'}}/>
                        <Text margin='0 2px 1px 2px' fontSize='10px'>32</Text>
                    </Grid>
                    <Menu
                        id="basic-menu"
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            fontSize:"12px",
                            height : "115px",
                            padding : '0',
                            margin : '0',
                        },
                        }}
                    >
                        <MenuItem sx={{ fontSize : "12px", height:'20px', }} onClick={handleClose}>
                            <Text>수정</Text>
                        </MenuItem>
                        <MenuItem sx={{ fontSize : "12px", height:'20px',}} onClick={handleClose}>
                            <Text>삭제</Text>
                        </MenuItem>
                    </Menu>
                </Grid>
            </Grid>
            <Grid is_flex fontSize="10px" color='gray' margin="0px 40px 10px 40px">
                <Text margin='0px 5px 0px 10px'>2022년 03월 27일</Text><Text margin='0px'>(수정됨)</Text>
            </Grid>
    </Grid>
    );
} 

