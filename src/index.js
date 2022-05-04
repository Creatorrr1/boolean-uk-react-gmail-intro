import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './app'

import './styles/styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)

// import rubbishButton from './assets/icons/rubbish-bin-delete-button.png'
// import Header from './Header.js'
// import Nav from './Nav.js'
// import Main from './Main.js'

      {/* <Header/>
      <Nav/>
      <Main/> */}

