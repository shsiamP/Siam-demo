// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'




function Header() {

  return (
    
    <header className="header">
      <img src="public/react-1-logo-png-transparent.png" className="nav-logo" width="40px" alt="React-logo"/>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>

        </ul>
      </nav>
    </header>

    
  )
}

function MainContent() {
  return (
    <main>
      <h1> Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library,so I will be able to fit in with all the coolest devs out there!😊</li>
        <li> I am more likely to get a job as a front end developer if I know React</li>
      </ol>
    </main>
  )    

}

function Footer() {
  return (
    <footer>
      <small>
        <FontAwesomeIcon icon={faCopyright} /> 2024 Ziroll development. All rights reserved.
      </small>
    </footer>
  )
}


export default function App() {
  return (
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  )
}