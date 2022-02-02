import React, { Component, useEffect } from 'react';
import './authorization.css'
import { authentication } from '../../firebase-config';
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";


export class authorization extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      authActiv: 'authorization_window '
    }

    this.signInWithGoogle = this.signInWithGoogle.bind(this)
  }



  signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) => {
      console.log(re);
      this.setState({authActiv: 'authorization_window authorization_window_passive'})
      // console.log(authentication.currentUser.email);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // async signOutGoogle() {
  //   await authentication.signOut()
  //   .then(() => {
  //     console.log('успешный выход');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  // status() {
  //   console.log(authentication.currentUser.email);
  //   if(authentication.currentUser.emailVerified) {
  //     console.log('почта верная');
  //   } else {
  //     console.log('почта неверная');
  //   }
  // }

  render() {
    return (
      <div className={this.state.authActiv}>
        <div className="authorization_overlay">

          <button className="authorization_login" onClick={this.signInWithGoogle}>
            <img src="./images/google.png" alt="Google" />
            <p>Авторизация</p>
          </button>

          {/* <button className="authorization_login" onClick={this.signOutGoogle}>
            <img src="./images/google.png" alt="Google" />
            <p>Выход</p>
          </button>

          <button className="authorization_login" onClick={this.status}>
            <img src="./images/google.png" alt="Google" />
            <p>Показать аккаунт</p>
          </button> */}

        </div>
      </div>
    )
  }
}

export default authorization


