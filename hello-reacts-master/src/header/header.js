import Box from '@material-ui/core/Box';
import React from 'react';
import Container from '@material-ui/core/Container'
import HeaderCss from '../header/header.css'
import Search from '../search/search.js';
import SearchLocation from '../search-location/search-location';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router';
import UserContext from "../lib/contextLib";
import {Auth} from 'aws-amplify';


class Header extends React.Component {
    static contextType = UserContext

    handleLogOut= async event =>{
        event.preventDefault();
        await Auth.signOut();
        let { isAuthenticated,user, setAuthenticated,setUser } = this.context
       isAuthenticated=false;
       setAuthenticated(isAuthenticated);
       setUser(null);
       console.log("after logout isauthentication"+isAuthenticated)
    }
   
    render() {
        const { isAuthenticated,user, setAuthenticated,setUser } = this.context        
        console.log("user inside header :"+user)
        console.log("usre insdie header isautheticated :"+isAuthenticated)
        return (
            <Box component="span" m={1}>
                <Container className="HeaderCss" maxWidth="ex lg sm">
                    <div className="row">
                        <div xs={3}>
                            <h1>Bookish</h1>
                            <pre>Be Confident-Be yourself</pre>

                        </div>

                        {isAuthenticated==true && user &&(
                           <div className="Header-Links" xs={9}>
                        <label >Hello {user}</label>&nbsp;&nbsp;
                        <Link to={"/hello-reacts"} onClick={this.handleLogOut}>Log Out</Link>
                           
                           </div>
                    
                         )} 
                            {isAuthenticated==false&&(
                           <div className="Header-Links" xs={9}>
                          
                           <Link to={"/login"} >Login</Link>&nbsp;&nbsp;
                           
                           <Link to={"/register"}>Sign Up</Link>
                           </div>
                    
                         )} 

                        
                    </div>


                </Container>
            </Box>
        );
    }
}

export default Header;