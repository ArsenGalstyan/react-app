import react from 'react'
import zapros from '../provaider/zaprosner'
import url from '../provaider/Constants'

class Test2 extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const users = await zapros("GET", url + `users`);
        this.setState({ users })
    }
    render() {

        return (
            <div>
                {this.state.users.map((user,i)=> <p key={i}>{user.name}</p> )}
            </div>
        )
    }
}

export default Test2;