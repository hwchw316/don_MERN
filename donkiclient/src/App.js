import React from 'react';
import ReactDOM from 'react-dom';
import {Container , AppBar, Typography, Grow, Grid} from '@material-ui/core';

import imgurllinks from './images/icon1.jpg'

const App = ()=> {
return(
    <Container maxwidth ='lg'>
        <AppBar position = 'static' color = 'inherit'>
            <Typography variant = 'h2' align = 'center '> Don Don Donki </Typography>
            <img src = {imgurllinks} alt= "imgurllinks" height = '60' />
        </AppBar>
       
    </Container>
);
}


export default App;