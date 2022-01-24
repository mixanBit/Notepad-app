import React from 'react';
import './noteitems.css'


// export class noteitems extends React.Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     val: array[0].checked
  //   }

  //   this.updatingCheked = this.updatingCheked.bind(this)
  // }

  // updatingCheked = () => {
  //   array[0].checked = !array[0].checked
  //   this.setState({
  //     val: array[0].checked
  //   })

  //   for(let res of array){
  //     console.log(res);
  //   }
  // }
  

//   render() {
//     return (

//       <div className='note_items_container'>
//         {props.todos.map((array) => {
//           return (
//             <div className='note_item'>
//               <div className='note_box'>
//                   <input 
//                     class="btn_item" 
//                     type="checkbox" 
//                     id={array.idClass} 
//                     name={array.id} 
//                     checked={array.checked}
//                     // onChange={this.updatingCheked}
//                   />
//                   <label for={array.idClass}></label>

//                 <h2 className='name_item'>{array.name}</h2>
//               </div>
//             </div>
//           )
//         })}
//       </div>

//     )
//   }
// }

function noteitems(props) {
  return (

    <div className='note_items_container'>
      {props.todos.map((array) => {
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
                    console.log(array);
                    this.props.fromInput()
                    // props.this.fromInput
                  }
                  }
                />
                <label for={array.idClass}></label>

              <h2 className={array.classItem}>{array.name}</h2>
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default noteitems
