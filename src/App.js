import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './views/Home.js'
import Search from './views/Search.js'
import Provider, {MyContext} from './Provider/index.js'



const books1 = [
  {
    title: "to kill a mockingbird",
    authors: "Author",
    shelf: ""
}
]



class BooksApp extends React.Component {
  

  render() {
    
    return (
      <div className="app">
        <Provider>
         
        <Switch>
          <Route exact path={"/"} component={Home}
          render={()=><MyContext.Consumer>{context=><Home {...context}/>}</MyContext.Consumer>}
          />
          <Route exact path={"/search"} component={Search} 
          render={()=><MyContext.Consumer>{context=><Search {...context}/>}</MyContext.Consumer>}
          />
          </Switch>
          
          </Provider>
      </div>
    )
  }
}

export default BooksApp
