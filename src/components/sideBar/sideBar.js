import React from "react";
import './sideBar.css';
import Context from "../context/context";
import HeaderList from "../../layout/header/components/headerList";

const SideBar = ({ linksData, menuState }) => {
  const linksClassData = {
    classList: 'sidebar-list',
    classListItem: 'sidebar-list-item'
  };
  let classSidebar = "sidebar";

  if (menuState) {
    classSidebar = classSidebar + ' active';
  }

  return (
    <div className={classSidebar}>
      <div className="sidebar-cross">
        <span/>
        <span/>
      </div>
      <HeaderList
        linksData={linksData}
        linksClassData={linksClassData}/>
    </div>
  )
}

// SideBar.contextType = Context;
export default SideBar;
