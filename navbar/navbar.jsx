import "./navbar.css"
import React from 'react'
import { useState } from 'react'


const Navbar = ({ style, showInput, color }) => {
  const [showNavBar, setShowNavBar] = useState(false)
  const [indexOfClickedButton, setIndexOfClickedButton] = useState(0)
  const isClicked = (num) => indexOfClickedButton === num && "clicked"

  const click = (index) => () => setIndexOfClickedButton(index)
  const showNav = () => setShowNavBar(prev => !prev)

  return (
    <nav style={style} className={`navbar ${showNavBar && "clicked"}`}>
      <div onClick={showNav}  className="white-line"></div>
      <div className="logo">LOGO</div>
      <input placeholder="search" className="search" />
      <div style={{ color }} className="buttons">
        <a href="#"><div onClick={click(0)} className={"home " + isClicked(0)}>Home</div></a>
        <a href="#"><div onClick={click(1)} className={"About " + isClicked(1)}>About</div></a>
        <a href="#"><div onClick={click(2)} className={"contact " + isClicked(2)}>Contact</div></a>
        <a href="#"><div onClick={click(3)} className={"work " + isClicked(3)}>Work</div></a>
        <a href="#"><div onClick={click(4)} className={"portfolio " + isClicked(4)}>Portfolio</div></a>
      </div>
    </nav>
  )
}

export default Navbar