import React from "react";
import '../scss/headerList.css';
import { Link } from "react-router-dom";

const HeaderList = ({linksData, linksClassData: { classListItem, classList } }) => {

  const item = linksData.map(({name, links}) => (
      <li
        className={classListItem}
        key={name}>
        <Link to={links}>{name}</Link>
      </li>
    )
  );

  return (
    <ul className={classList}>
      {item}
    </ul>
  )
}

export default HeaderList;