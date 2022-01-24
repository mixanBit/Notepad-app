import React from 'react';
import './header.css'

import GoogleLogin, { GoogleLogout } from 'react-google-login';

import { useGoogleLogin } from 'react-google-login'
// import { useGoogleLogout } from 'react-google-login'





export class header extends React.Component {

  
  resposeGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
    let name = response.profileObj.name;
  }

  logout=()=>{
    console.log('выход из аккаунта');
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

            <GoogleLogin 
              clientId='101084119038-ro92b6i4fevieqo57pr9tk136pfsnfo6.apps.googleusercontent.com'
              render={renderProps => (
                <button className='authorization' onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img className="settings_entrance" src="./images/google.png" alt="entrance" />
                </button> 
              )}
              buttonText=''
              onSuccess={this.resposeGoogle}
              onFailure={this.resposeGoogle}
              isSignedIn={true}
              cookiePolicy={'single_host_origin'}
            />

            <GoogleLogout 
              clientId='101084119038-ro92b6i4fevieqo57pr9tk136pfsnfo6.apps.googleusercontent.com'
              buttonText='Выход'
              onLogoutSuccess={() => {console.log('выход из аккаунта!!!');}}
            />

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
