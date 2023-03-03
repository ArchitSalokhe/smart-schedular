import React, { Fragment } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import header from './header'
import Todo from './Todo'
import './Todostyle.css'

function App() {
    return (
        <Fragment> 
          <BrowserRouter>
              <Routes>
              <Route path='/' element={<Todo/>}/>
              </Routes>
          </BrowserRouter>
        </Fragment>
    )
  }
  
  export default App