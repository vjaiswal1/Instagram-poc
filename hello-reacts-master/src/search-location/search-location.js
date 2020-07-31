import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import React from 'react';
import { Container } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Grid from '@material-ui/core/Grid';
import TextFieldCssLocation from '../search-location/search-location.css'

class SearchLocation extends React.Component{
   render(){
       return(
        <form  noValidate autoComplete="off" >

        <Grid container>
                        <Grid container item xs={4} spacing={3}>
                        <SearchOutlined  className="search-icon-location"/>
                        </Grid>
                        <Grid container item xs={4}  spacing={3}>
                       <input type="text" className="TextFieldCssLocation"></input>
                        </Grid>

                    </Grid>
                    
      </form>
       )
   } 
}

export default SearchLocation;