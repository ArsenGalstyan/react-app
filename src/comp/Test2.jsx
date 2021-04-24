import react from 'react'

class Test2 extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
        let x = [this.props.name,this.props.age]
        return (<div>
                <ul>
                    {x.map( (el,i) => <li key={i}>{el}</li> )}
                </ul>
        </div>
        )
    }
}

export default Test2;