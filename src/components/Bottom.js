//import Lidrary
import React, { useEffect } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

//import MUI
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//import Icon
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WidgetsIcon from '@mui/icons-material/Widgets';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

//import elements
import { Button, Grid, Input, Image, Text } from "../elements" 

//import Actions
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

export default function Bottom(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [value, setValue] = React.useState(0);

    const _user = useSelector(state => state.user);
    console.log(_user);
    React.useEffect(()=>{
        if(!_user.is_login){
            dispatch(userActions.check());
        }
    },[])

    const addBtn=()=>{
        console.log('push!');
        dispatch(postActions.getAll());
    }

    return (
        <Grid position="absolute" bottom="0px" zIndex="1" borderRadius="10px 10px 0 0" >
            <Grid is_flex backgroundColor='#6454FF' borderRadius="10px 10px 0 0" alignItems="center" justifyContent="space-around" width="320px" >
                {props.thisPage==="main"?       <Text color="white"><WidgetsIcon /></Text>              : <Text color="white" onClick={()=>navigate('/')}><WidgetsOutlinedIcon/></Text>}
                {props.thisPage==="book"?       <Text color="white"><BookmarkOutlinedIcon/></Text>      : <Text color="white"><BookmarkBorderOutlinedIcon/></Text>}
                {props.thisPage==="add"?        <Text color="white"><AddCircleOutlinedIcon/></Text>     : <Text color="white" onClick={addBtn}><AddCircleOutlineOutlinedIcon/></Text>}
                {props.thisPage==="postList"?   <Text color="white"><HomeIcon/></Text>                  : <Text color="white" onClick={()=>navigate('/postlist')}><HomeOutlinedIcon/></Text>}
                
                {_user.is_login?<Image margin='0 0 4px 0' is_circle width='25px' height='25px' src={_user.user.userProfileImage}/>:props.thisPage==="userPage"?     <Text color="white"><PersonIcon/></Text>                : <Text color="white" onClick={()=>navigate('/mypage')}><PersonOutlineOutlinedIcon/></Text>}
            </Grid>
        </Grid>
    );
} 

