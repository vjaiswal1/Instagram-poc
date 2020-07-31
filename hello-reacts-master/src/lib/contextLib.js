import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
  // Context state
  state = {
    isAuthenticated: false,
    user:""
  }

  // Method to update state
  setAuthenticated = (isAuthenticated) => {
      this.setState({
      isAuthenticated:isAuthenticated
    })
  }

  setUser = (user) => {
    this.setState({
    user:user
  })
}


  render() {
    const { children } = this.props
    const { isAuthenticated,user} = this.state
    const { setAuthenticated,setUser} = this
  

    return (
      <UserContext.Provider
        value={{isAuthenticated,user,setAuthenticated,setUser}}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

export default UserContext

export { UserProvider }
