import React, { Component } from 'react';

// Google authentication
import { authentication } from '../../../firebase-config';
import { signOut } from "firebase/auth";


export class signOutGoogle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userImg: './images/google.png'
    }

    this.signOutGoogle = this.signOutGoogle.bind(this)
  }

  async signOutGoogle() {
    // this.setState({userImg: authentication.currentUser.photoURL})
    await authentication.signOut()
    .then(() => {
      console.log('успешный выход');
      // localStorage.clear()
      localStorage.removeItem('onlineAuth');
      window.location.reload(true)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <button className='authorization' onClick={this.signOutGoogle}>
        <img className="settings_entrance" src={this.state.userImg} alt="entrance" />
        <p className='setting_logout'>Выход</p>
      </button> 
    )
  }
}


export default signOutGoogle;
