import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import instaform from '../instagramFeed/instagramfeed.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '../Card/card';
import CardCss from '../Card/card.css';
import {browserHistory} from 'react-router';


const axios = require('axios');



class InstagramFeed extends React.Component {

    constructor(props) {
        super()
        this.state = {
            userName: ""
        };
    }
    updateUserName(event) {
        // console.log('user name'+ event.target.value);
        this.setState({
            userName: event.target.value
        })
    }

    fetchFeed() {
        console.log('userName ' + this.state.userName)
        browserHistory.push("/post");

        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                // handle success
                console.log(response);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return (
            
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Typography component="div" style={{
                        backgroundColor: 'white', height: '50vh', marginTop: '66%',
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 3,
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
                    }} />
                    <Box component="span" m={1}>

                        <form className="instaform"  noValidate="false" autoComplete="off"  >
                            <h2 style={{ marginTop: "58%", marginLeft: "2%" }}>Instagram</h2>
                            <TextField id="outlined-basic" label="Instagram ID" variant="outlined" onChange={this.updateUserName.bind(this)} /><br /><br />
                            <br/><br/>
                            <Button onClick={this.fetchFeed.bind(this)} type="Submit" variant="contained" color="primary">
                                Submit
      </Button>
                        </form>
                    </Box>

                </Container>
                
                    
            </React.Fragment>
        );
    }
}

export default InstagramFeed;

