import React, { Component } from 'react';
import RandomNumber from '../hoc/randomNumHOC';
import Li from './li'
import Context from '../contexts/onecontext'


class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mod: `red`
    }
    this.colorChang = this.colorChang.bind(this)
  }
  colorChang() {
    this.setState(naxordstate => this.state.mod === `red` ? `black` : `red`)
  }
  render() {
    const context = this.context.Provider
    return <div>
      <Context.Provider value={this.state.mod}>
        <button onClick={this.colorChang}>click</button>
        <Li />
      </Context.Provider>
    </div>
  }
}

export default Home;
