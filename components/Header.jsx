import { useState } from "react";

export default function Header({theme}) {
  const [dark ,setDark] = theme
  return (
    <header className={`header-container ${!dark ? 'dark' : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
          setDark(!dark)
          localStorage.setItem('darkmode',!dark)
        }}>
        <i className={`fa-solid fa-${dark ?'moon':'sun'}`} />
        {/* <i className="fa-solid fa-sun" /> */}
          &nbsp;&nbsp;{dark ? 'Dark Mode': 'light Mode'}
        </p>
      </div>
    </header>
  );
}
