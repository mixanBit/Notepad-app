import React from 'react';

export class btnDarkside extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      statusDarkside: false
    }

    this.colorChange = this.colorChange.bind(this)
  }

  colorChange() {
    if(this.state.statusDarkside || localStorage.getItem('statusDarkside')){
      this.setState({statusDarkside: false})
      localStorage.setItem('statusDarkside', false);
      document.documentElement.style.setProperty('--createNotesBg', '#42275A')
    } else {
      this.setState({statusDarkside: true})
      localStorage.setItem('statusDarkside', true);
      document.documentElement.style.setProperty('--createNotesBg', 'black')
    }
  }

  // Проверка по localStorage
  componentDidMount() {
    if(localStorage.getItem('statusDarkside')) {
      console.log(true);
      this.setState({statusDarkside: false})
      localStorage.setItem('statusDarkside', false);
      this.colorChange()
    } else {
      console.log(false);
      // this.setState({statusDarkside: true})
      // this.colorChange()
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
