import React, { Component } from 'react';
import './authorization.css'

export class authorization extends Component {

  render() {
    return (
      <div className='authorization_window'>
        <div className="authorization_overlay">
          <button className="authorization_login">
            <img src="./images/google.png" alt="Google" />
            <p>Авторизация</p>
          </button>
        </div>
      </div>
    )
  }
}

export default authorization


