import React from 'react'
import react from 'react'

class Info extends react.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ``
        }

        this.poxelInp = this.poxelInp.bind(this)
        this.submit = this.submit.bind(this)

        this.type = react.createRef()
    }

poxelInp(e){
    this.setState(naxordstate =>{
        return {username: e.target.value}
    })
}
submit(e){

    console.log(this.state.username);
    e.preventDefault()
   setTimeout(()=>{
    console.log(this.type.current.getAttribute(`type`));
   },3000)
}

render() {

    return (
        <div>
            <form onSubmit={this.submit} action="">
            <input ref={this.type} type="password" value={this.state.naxnakan} onInput={this.poxelInp} />
            <button type="submit">login</button>
            </form>
        </div>
    )
    }
}

export default Info;