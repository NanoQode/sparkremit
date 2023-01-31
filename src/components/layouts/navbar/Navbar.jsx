import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.scss'; 

 
  

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const open = true;

  const [showClass, setShowClass] = React.useState('');

  const anchorRef = React.useRef(null);

  const handleToggle = () => {

    setShowClass((prevClass) => ((prevClass == '') ? 'show' : ''));

  };

  return (
    <div>
        navbar
    </div>
  );
}
