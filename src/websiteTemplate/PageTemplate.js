import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import MainMenu from './mainMenu'
import {AboutMenu, Company, History, Services, Location} from './AboutMenu'

const PageTemplate = ({children}) => <div className="page">
  <MainMenu/> {children}
</div>

export const About = ({match}) =>
<PageTemplate>
  <section className="about template">
    <Route component={AboutMenu} />
    <Route exact path="/about" component={Company} />
    <Route path="/about/history" component={History} />
    <Route path="/about/services" component={Services} />
    <Route path="/about/location" component={Location} />
  </section>
</PageTemplate>

export const Events = () => <PageTemplate>
  <section className="events template">
    <h1>Events Calendar</h1>
  </section>
</PageTemplate>

export const Products = () => <PageTemplate>
  <section className="products template">
    <h1>Products Catalog</h1>
  </section>
</PageTemplate>

export const Contact = () => <PageTemplate>
  <section className="contact template">
    <h1>Contact Us</h1>
  </section>
</PageTemplate>

export const Whoops = ({location}) => <PageTemplate>
  <div className="whoops-404 template">
    <h1>resource not found at '{location.pathname}'</h1>
  </div>
</PageTemplate>
