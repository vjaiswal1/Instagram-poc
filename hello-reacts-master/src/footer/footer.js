import Box from '@material-ui/core/Box';
import React from 'react';
import Container from '@material-ui/core/Container'
import FooterCss from '../footer/footer.css'



class Footer extends React.Component {
    render() {
       return (
        <Box component="span" m={1}>
        <Container className="FooterCss" maxWidth="ex lg sm">
        <h3>Contact us</h3>

        </Container>
      </Box>
       );
    }
 }

 export default Footer;