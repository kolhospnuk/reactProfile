import React, {useState} from "react";
import useDarkMode from 'use-dark-mode';
import './scss/header.css';
import HeaderList from "./components/headerList";


const Header = ({ linksData }) => {
  const linksClassData = {
    classList: 'header-content-list',
    classListItem: 'header-content-list-item'
  };

  const [name, setName] = useState('Dark');
  const darkMode = useDarkMode(false); // добавляет в боди клас

  const toggleChange = () => {
    console.log(darkMode);
    darkMode.toggle();
    name === 'Dark' ? setName('Light') : setName('Dark');
  }

  return (
    <div className='header'>
      <div className="header-line"/>
      <div className="container">
        <div className="header-content">
          <div className="header-content-name">
            <h1>Anton Momot</h1>
            <h2>React Developer</h2>
          </div>
          <button type='button'
                  className="header-content-btn"
                  onClick={toggleChange}>
            {name}
          </button>
          <HeaderList
            linksData={linksData}
            linksClassData={linksClassData}/>
        </div>
      </div>
    </div>
  )
}

export default Header;
