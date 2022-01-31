import React from 'react' 
import './body.css'
import './noteitems-folder/noteitems.css'

import NoteItems from './noteitems-folder/noteitems'

// let array = require('./array.json')

let array = [
  {
    name: 'Заметка 1',
    classItem: 'name_item',
    idClass: "color-1",
    id: 1,
    animation: 'note_item',
    checked: false
  },
  {
    name: 'Заметка 2',
    classItem: 'name_item',
    idClass: "color-2",
    id: 2,
    animation: 'note_item',
    checked: false
  },
  {
    name: 'Заметка 3',
    classItem: 'name_item',
    idClass: "color-3",
    id: 3,
    animation: 'note_item',
    checked: false
  }
]


export class body extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
      inputData: '',
      zeroDate: ''
    }

    this.zeroFunction = this.zeroFunction.bind(this)
    this.fromInput = this.fromInput.bind(this)
    this.createItem = this.createItem.bind(this)
  }

  zeroFunction() {
    this.setState({zeroDate: 'Пустой клочёк данных'})
    console.log(array);
  }

  fromInput(event) {this.setState({inputData: event.target.value})}

  // Добавление новой заметки
  createItem() {
    if(this.state.inputData === '' || this.state.inputData === ' ') {
      console.log('Пустые данные');
    } 
    else {
      let newArray = {
        name: this.state.inputData,
        classItem: 'name_item',
        idClass: `color-${array.length + 1}`,
        id: array.length + 1,
        animation: 'note_item note_item_anim',
        checked: false
      }
      array.unshift(newArray);
    }
    setTimeout(() => {array[0].animation = 'note_item'}, 300)

    // console.log(array);
    
    this.setState({inputData: ''});
  }

  render() {
    return (
      <main className='body'>
        <section className='notes'>
          <div className='notes_settings'>
            <div className='sidebar_option'>
              <img className='btn_sidebar' src="./images/btn-sidebar.png" alt="btn_sidebar" />
              <h2 className='notes_heading'>Заметки</h2>
              <img className="btn_dop_option" src="./images/btn-dop-option.png" alt="dop_option" />
            </div>

            <div className='notes_sort'>
              <img className='sort_icon' src="./images/sort.png" alt="sort" />
              <p className='notes_sort_heading'>Сортировка</p>
            </div>
          </div>

          <div className='create_notes'>
            <button onClick={this.createItem} className='btn_create_box'>
              <img className='btn_create' src="./images/create-notes.png" alt="btn_create" />
            </button>
            <input onChange={this.fromInput} value={this.state.inputData} className='text_create' type="text" maxlength="50" placeholder='Добавить заметку' />
          </div>

          {/* <NoteItems todos={array}/> */}
          <div className='note_items_container'>
            {array.map((array) => {
              return (
                <div className={array.animation}>
                  <div className='note_box'>
                      <input 
                        class="btn_item" 
                        type="checkbox" 
                        id={array.idClass} 
                        name={array.id} 
                        checked={array.checked}
                        onClick={() => {
                          array.checked = !array.checked
                            if(array.checked == true) {
                              array.classItem += ' name_item_active'
                            }
                            else {
                              array.classItem = 'name_item'
                            }
                          console.log(array)
                          this.zeroFunction()
                        }}
                      />
                      <label for={array.idClass}></label>

                    <h2 className={array.classItem}>{array.name}</h2>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    )
  }
}

export default body;
