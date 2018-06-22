import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import {Home, About, Events, Products, Contact, Whoops} from './page'
// 无状态函数和component一致
class NavLinkRouter extends Component {
  render() {
    return (
      <HashRouter>
        <article className="main">
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/events" component={Events}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route component={Whoops}></Route>
          </Switch>
        </article>
      </HashRouter>
    )
  }
}

export default NavLinkRouter
