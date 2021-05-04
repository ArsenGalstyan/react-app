import react from 'react'

class Test2 extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            tiv: 0,
            pi: ``
        }

        this.gumarelmek = this.gumarelmek.bind(this)
        this.hanelmek = this.hanelmek.bind(this)
        this.x = this.x.bind(this)
    }
    gumarelmek() {
        this.setState({ tiv: this.state.tiv + 1 })
        this.props.plus(this.state.tiv)
    }
    hanelmek() {
        this.setState({ tiv: this.state.tiv - 1 })

    }
    x(e){
        this.setState({pi:e.target.value});
    }
    render() {

        return (
            <div>
                <div onClick={this.gumarelmek}>+</div>
                <p>{this.state.tiv}</p>
                <div onClick={this.hanelmek}>-</div>

                <input type="text" onInput={this.x}/>
                <p>{this.state.pi}</p>
            </div>
        )
    }
}

export default Test2;