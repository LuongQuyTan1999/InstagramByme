import React from "react";
import { withStyles, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import styles from "./styles";
function Header(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.headerContent}>
          <div className={classes.title}>
            <Link to="/" className={classes.logo}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <InstagramIcon />
                <img
                  className={classes.instagram}
                  alt="Instagram"
                  src={require("../../assets/735145cfe0a4.png")}
                />
              </IconButton>
            </Link>
          </div>

          <div>
            <Link to="/explore">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ExploreOutlinedIcon />
              </IconButton>
            </Link>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FavoriteBorderIcon />
            </IconButton>
            <Link to="/luongquytan">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <PersonOutlineOutlinedIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
