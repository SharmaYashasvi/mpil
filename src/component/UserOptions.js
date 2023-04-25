import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";

const UserOptions = () => {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const options = [
    { icon: <PersonIcon />, name: "All Users", func: main },
    { icon: <PersonIcon />, name: "Filter 1", func: filter1 },
    { icon: <PersonIcon />, name: "Filter 2", func: filter2 },
    { icon: <PersonIcon />, name: "Filter 3", func: filter3 },
    { icon: <PersonIcon />, name: "Filter 4", func: filter4 },
  ];


  function main() {
    history.push("/");
  }

  function filter1() {
    history.push("/filter1");
  }
  function filter2() {
    history.push("/filter2");
  }
  function filter3() {
    history.push("/filter3");
  }

  function filter4() {
    history.push("/filter4");
  }
  
  

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
             src={'./Profile.png'}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOptions;
