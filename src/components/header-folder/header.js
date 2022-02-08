import React from 'react';
import './header.css'

// Firebase
import { authentication } from '../../firebase-config';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// header components
import BtnDarkside from './header-components/btn-darkside'
import SignOut from './header-components/sign-out'

const db = getFirestore();

let arrayUsers = [
  {
    user: 'Mihail',
    age: 18,
    pasive: true
  },
  {
    user: 'Bogdan',
    age: 8,
    pasive: false
  },
  {
    user: 'Saha',
    age: 1,
    pasive: true
  }
]

export class header extends React.Component {

  async setData() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        arrayUsers
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

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
            <img onClick={this.setData} className='settings_icon' src='./images/setting.png' alt="settings" />
            <SignOut />
          </div>
        </div>
      </header>
    )
  }
}


export default header;
