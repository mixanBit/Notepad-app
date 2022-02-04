import React, { Component } from 'react';
import './authorization.css'

// Google authentication
import { authentication } from '../../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export class authorization extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      authActiv: 'authorization_window ',
      onlineAuth: false
    }

    this.signInWithGoogle = this.signInWithGoogle.bind(this)
  }


  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) => {
      console.log(re);
      this.setState({authActiv: 'authorization_window authorization_window_passive'})
      localStorage.setItem('onlineAuth', this.state.onlineAuth = true);
      // console.log(authentication.currentUser.email);
    })
    .catch((err) => {
      console.log(err);
      localStorage.setItem('onlineAuth', this.state.onlineAuth = false);
    })
  }

  // Проверка по localStorage
  componentDidMount() {
    if(localStorage.getItem('onlineAuth')) {
      this.setState({authActiv: 'authorization_window authorization_window_passive'})
    } else {
      this.setState({authActiv: 'authorization_window '})
    }
  }

  render() {
    return (
      <div className={this.state.authActiv}>
        <div className="authorization_overlay">

          <button className="authorization_login" onClick={this.signInWithGoogle}>
            <img src="./images/google.png" alt="Google" />
            <p>Авторизация</p>
          </button>
        </div>
      </div>
    )
  }
}

export default authorization


