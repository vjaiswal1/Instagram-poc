import React from 'react';
import './App.css';
import InstagramFeed from './instagramFeed/instagramfeed';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import Root from './Root/Root'
import { useState } from "react";
import InstaPost from './InstaPost/InstaPost'
import Login from './login/login'
import Register from './Register/Register';
import { UserProvider } from './lib/contextLib'

function App() {

  return (
    <div className="App">
  
  <UserProvider >
  <Router history={browserHistory}>
       <Route path={"/hello-reacts"} component={Root}>
         <IndexRoute component={Root} />
       <Route path={'/login'} component={Login}/>
       <Route path={'/register'} component={Register}/>
       <Route path={'/post'} component={InstaPost} />
       </Route>
       </Router>
</UserProvider>

    </div>
    
  );
}

export default App;
