// // Team members : 1. Prarthana, 2.Ibtisam, 3. Nandaj, 4.Ayman

import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import "./Team.css";

function Team({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Team, setTeam] = useState([]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="TeamHome">
      <div className="Teamcontainer">
        <div className="MainContent">
          <div className="TeamHeading">
            <p> Team 2023</p>
          </div>
          <div className="Team-container">
          </div>
        </div>
        <div className="Teamidebar"></div>
      </div>
    </div>
  );
}

export default Team;

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import ActiveFOSS from "../ActiveBus/AcitveFOSS";

// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";

// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";

// import "./Team.css";

// function Team({ title }) {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="Home">
//       <div className="container">
//         <Box sx={{ flexGrow: 1 }} className="TeamContainer">
//           <i className="headingg" aria-hidden="true">
//             Write your code here
//           </i>
//         </Box>
//         <ActiveFOSS />
//       </div>
//     </div>
//   );
// }

// export default Team;
