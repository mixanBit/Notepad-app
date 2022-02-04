import React from 'react';
import './header.css'

// header components
import BtnDarkside from './header-components/btn-darkside'
import SignOut from './header-components/sign-out'

export class header extends React.Component {

  render() {
    return (
      <header className='header'>
        <div className='header_container'>
          <div className='logo'>
            <BtnDarkside />
            <hr/>
            <h1 className='title_logo'>Notepad</h1>
          </div>

          <div className='search'>
            <img className='search_icon' src="./images/search.png" alt="search" />
            <input className='search_input' type="text" />
          </div>

          <div className='settings'>
            <img className='settings_icon' src='./images/setting.png' alt="settings" />
            <SignOut />
          </div>
        </div>
      </header>
    )
  }
}


export default header;
