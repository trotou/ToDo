import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useServices } from "../../Providers/Services";
import { useHistory } from "react-router-dom";
import { usesTopBarStyles } from "../../Helpers/makestyles";

export default function ButtonAppBar() {
  const classes = usesTopBarStyles();
  const { user, username } = useServices();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            Home
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          {user && (
            <Button
              color="inherit"
              edge="end"
              onClick={() => history.push("/user")}
            >
              {username}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
