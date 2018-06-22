import React, { Component } from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import {About, Events, Products, Contact, Whoops} from './PageTemplate'
import {AboutMenu, Company, History, Services, Location} from './AboutMenu'
// 无状态函数和component一致
class NavLinkRouter extends Component {
  render() {
    return (
      <HashRouter>
        <article className="main">
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Redirect from="/history" to='/about/history'></Redirect>
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
