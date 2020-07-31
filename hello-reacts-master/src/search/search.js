import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import React from 'react';
import TextFieldCss from '../search/search.css'
import { Container } from "@material-ui/core";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import Grid from '@material-ui/core/Grid';


// render

class Search extends React.Component{
   render(){
       return(
        <form  noValidate autoComplete="off" >

        <Grid container>
                        <Grid container item xs={4} spacing={3}>
                        <SearchOutlined  className="search-icon"/>
                        </Grid>
                        <Grid container item xs={4}  spacing={3}>
                       <input type="text" className="TextFieldCss"></input>
                        </Grid>

                    </Grid>
                    
      </form>
       )
   } 
}

export default Search;