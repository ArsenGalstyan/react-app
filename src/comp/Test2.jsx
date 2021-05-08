import react from 'react'
import zapros from '../provaider/zaprosner'
import url from '../provaider/Constants'
import {Load} from './loading'

class Test2 extends react.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            loaded: false
        }
    }

    async componentDidMount() {
        const users = await zapros("GET", url + `users`);
        this.setState({ users , loaded : true})
    }
    render() {

        return (
            <div>
                {
                    this.state.loaded ?
                        this.state.users.map((user, i) => <p key={i}>{user.name}</p>)
                        :
                        <Load />
                }
            </div>
        )
    }
}

export default Test2;