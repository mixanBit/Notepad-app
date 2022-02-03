import React from 'react';
import './header.css'

// Google authentication
import { authentication } from '../../firebase-config';
import { signOut, GoogleAuthProvider } from "firebase/auth";


export class header extends React.Component {

  async signOutGoogle() {
    await authentication.signOut()
    .then(() => {
      console.log('успешный выход');
      localStorage.clear()
      window.location.reload(true)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <header className='header'>
        <div className='header_container'>
          <div className='logo'>
            <img className='btn_darkside' src="./images/btn-dark.png" alt="change" />
            <hr/>
            <h1 className='title_logo'>Notepad</h1>
          </div>

          <div className='search'>
            <img className='search_icon' src="./images/search.png" alt="search" />
            <input className='search_input' type="text" />
          </div>

          <div className='settings'>
            <img className='settings_icon' src='./images/setting.png' alt="settings" />

            <button className='authorization' onClick={this.signOutGoogle}>
              <img className="settings_entrance" src="./images/google.png" alt="entrance" />
              <p className='setting_logout'>Выход</p>
            </button> 

            {/* <img className='settings_icon' src='' alt="settings" />
            <button className='authorization'>
              <img className="settings_entrance" src="./images/entrance.png" alt="entrance" />
              <p className='settings_login'>Login</p>
            </button>  */}
          </div>
        </div>
      </header>
    )
  }
}


export default header;
