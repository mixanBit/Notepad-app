import React from 'react';

export class btnDarkside extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      statusDarkside: 'light'
    }

    this.colorChange = this.colorChange.bind(this)
  }

  // Смена цвета
  colorChange() {
    if(this.state.statusDarkside === 'light'){
      this.setState({statusDarkside: 'dark'})
      localStorage.setItem('statusDarkside', 'dark');
      this.darkSide()
    } else {
      this.setState({statusDarkside: 'light'})
      localStorage.setItem('statusDarkside', 'light');
      this.lightSide()
    }
  }

  lightSide() {
    /* authorization.scss */
    document.documentElement.style.setProperty('--authorizationBg', 'white')
    document.documentElement.style.setProperty('--authorizationLoginColor', '#3D4043')
    document.documentElement.style.setProperty('--authorizationBtnShadow', '0 18px 55px rgb(0 0 0 / 60%)')

    /* body.scss */
    document.documentElement.style.setProperty('--bodyBg', 'white')
    document.documentElement.style.setProperty('--notesHeadingColor', '#3D4043')

    /* header.scss */
    document.documentElement.style.setProperty('--headerBg', 'linear-gradient(45deg, #42275A, #734B6D)')
    document.documentElement.style.setProperty('--headerLogoutHoverColor', 'rgba(255,255,255,.9)')

    /* body.scss */
    document.documentElement.style.setProperty('--createNotesBg', '#42275A')
    document.documentElement.style.setProperty('--createNotesDopColor', '#734B6D')
    document.documentElement.style.setProperty('--createNotesActiveDopColor', '#734B6D')


    /* noteitems.scss */
    document.documentElement.style.setProperty('--nameItemColor', 'white')
    document.documentElement.style.setProperty('--noteitemHoverBg', 'rgba(115,75,109,.8)')

    /* scroll.css */
    document.documentElement.style.setProperty('--scrollBg1', '#734B6D')
    document.documentElement.style.setProperty('--scrollBg2', '#42275A')
  }

  darkSide() {
    /* authorization.scss */
    document.documentElement.style.setProperty('--authorizationBg', '#232323')
    document.documentElement.style.setProperty('--authorizationLoginColor', '#76a9e2')
    document.documentElement.style.setProperty('--authorizationBtnShadow', '0 18px 55px rgb(255 255 255 / 60%)')

    /* body.scss */
    document.documentElement.style.setProperty('--bodyBg', '#191919')
    document.documentElement.style.setProperty('--notesHeadingColor', '#cecfd3')

    /* header.scss */
    document.documentElement.style.setProperty('--headerBg', 'linear-gradient(45deg, #6589bd, #2a2b2d)')
    document.documentElement.style.setProperty('--headerLogoutHoverColor', 'rgba(255,255,255,.9)')
    document.documentElement.style.setProperty('--bodyBg', '#191919')


    /* body.scss */
    document.documentElement.style.setProperty('--createNotesBg', '#6589bd')
    document.documentElement.style.setProperty('--createNotesDopColor', 'rgba(0,0,0,0)')
    document.documentElement.style.setProperty('--createNotesActiveDopColor', '#cecfd3')
    
    /* noteitems.scss */
    document.documentElement.style.setProperty('--nameItemColor', '#cecfd3')
    document.documentElement.style.setProperty('--noteitemHoverBg', 'rgba(35,35,35,1)')

    /* scroll.css */
    document.documentElement.style.setProperty('--scrollBg1', 'rgba(0,0,0,0)')
    document.documentElement.style.setProperty('--scrollBg2', '#6589bd')
  }

  // Проверка по localStorage
  componentDidMount() {
    if(localStorage.getItem('statusDarkside') === 'light') {
      this.setState({statusDarkside: 'light'})
      this.lightSide()
    } else {
      this.setState({statusDarkside: 'dark'})
      this.darkSide()
    }
  }

  render() {
    return (
        <img 
        onClick={this.colorChange}
        className='btn_darkside'
        src="./images/btn-dark.png" 
        alt="change" />  
    )
  }
}

export default btnDarkside;
