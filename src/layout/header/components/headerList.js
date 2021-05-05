import React from "react";
import {Link} from "react-router-dom";

const HeaderList = () => {
  const classListItem = 'header-content-list-item';
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

  const item = linksData.map(({name, links}) => (
      <li
        className={classListItem}
        key={name}>
        <Link to={links}>{name}</Link>
      </li>
    )
  );

  return (
    <ul className="header-content-list">
      {item}
    </ul>
  )
}

export default HeaderList;