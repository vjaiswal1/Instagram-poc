
import React, { useCallback } from 'react';
import InstaPostCss from '../InstaPost/InstaPost.css'
import saloon1 from '../InstaPost/saloon1.jpg'
import saloon2 from '../InstaPost/saloon2.jpg'
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import UserContext from "../lib/contextLib";
import { Redirect } from "react-router-dom"


class InstaPost extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super()
    this.state = {
      userName: '',
      mediaId: '',
      imageId: [],
      imageUrl: []
    };

  }


  componentDidMount() {
    this.fetchPost();
    this.fetchImage();
  }


  fetchPost() {
    // Make a request for a user with a given ID
    axios.get('https://graph.instagram.com/17841438945925077?fields=id,username,account_type,media&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
    .then(response=> {
        // console.log(response.data.username)
      const userName = response.data.username;
    //   console.log(response.data.media.data[0].id)
     // const media=response.data.media
      this.setState({userName});
      this.setState({
          mediaId:response.data.media.data[0].id
      })
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
  }

  fetchImage() {
    axios.get('https://graph.instagram.com/17863725979977364?fields=id,media_type,media_url,username,timestamp,children&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
    .then(response=> {
        // console.log(response.data.children.data)
      const imageId = response.data.children.data;
    //   console.log(response.data.children.data[0].id)
     // const media=response.data.media
      this.setState({imageId});
    this.fetchImageUrl();

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
    }

  fetchImageUrl() {
    console.log("inside fetcimageUrl method")
    axios.get('https://graph.instagram.com/17863725979977364?fields=id,media_type,media_url,username,timestamp,children&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
    .then(response=> {

        this.state.imageId.map((item, i) =>{
            console.log("fetching image url for image"+i+"with imageId "+item.id);

          axios.get('https://graph.instagram.com/'+item.id+'?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYcVZAaTkoyWHZA2Sm9ZARFJVdTg0LWpWNHNXajFnMi1mTzdzdU41NWpwZADUxMXF3ZA0QxNnBQM1QxLWg2RVFJelg0Q3paYjgwVE9ya2NQOUtIYWhZAY0NfbnJ6X0F2U0kxX09MUHhR')
          .then(response=> {
          console.log("media url for item "+i+" "+response.data.media_url)
            const imageUrl = response.data.media_url;

            //this.setState({imageUrl:imageUrl});

            this.setState({
              imageUrl: [...this.state.imageUrl, imageUrl]
            })
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })

        })

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })

  }



  render() {
    const userName = this.state.userName;
    const imageUrl = this.state.imageUrl;
    const { isAuthenticated, setAuthenticated } = this.context

    if(isAuthenticated!==true){
      return  <Redirect to="/" />;
    }
    return (
          <div>
        <h2>Instagram Profile</h2>
        <label>User Name : {userName}</label><br />
       
      <div className="Carousel">
            <Carousel showArrows={true} autoPlay>
            {this.state.imageUrl.map(url =><div>
                    <img src={url} />
                    <p className="legend">Legend 1</p>
                </div>
                )} 
            </Carousel>
            </div>
      </div>
    );
  }
}

export default InstaPost;