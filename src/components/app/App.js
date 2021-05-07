import React, {useState} from 'react';
import "./app.css";
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from "react-bootstrap";

import Footer from "../../layout/footer/footer";
import SideBar from "../sideBar/sideBar";
import Header from "../../layout/header/header";
import MainSection from "../mainSection/mainSection";
import NumberFacts from "../mainSection/numberFacts/numberFacts";
import Context from "../context/context";

const App = () => {
  const linksData = [
    {
      links: '/aboutme',
      name: 'About me'
    },
    {
      links: '/education',
      name: 'Education'
    },
    {
      links: '/skills',
      name: 'Skills'
    },
    {
      links: '/randomThings',
      name: 'Random things'
    },
    {
      links: '/contacts',
      name: 'Contacts'
    }
  ];

  const [menuState, setMenuState] = useState(false);
  const openMenu = () => setMenuState((menu) => (menu !== true));

  return (
    <Context.Provider value={openMenu}>
      <Router>
        <Header
          linksData={linksData}/>
        <SideBar
          linksData={linksData}
          menuState={menuState}/>
        <Container>
          <MainSection/>
          <NumberFacts/>
        </Container>
        <Footer/>
      </Router>
    </Context.Provider>
  )
}

export default App;

// error: false

// componentDidCatch(error, errorInfo) {
//     this.setState({
//         error: true
//     })
// }

// if (this.state.error) {
//     return <Error/>;
// }
