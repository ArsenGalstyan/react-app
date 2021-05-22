import react from 'react'
import Context from '../contexts/onecontext'



class List extends react.Component {
    render() {

    let Consumer = Context.Consumer
      return (
        <Consumer>

            {
                (mod)=>{
                    return <li style={{color:mod}}>Lorem ipsum dolor sit amet.</li>
                }
            }
            
        </Consumer>
      )
    }
  }
  
  export default List ;
  