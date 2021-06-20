import { makeStyles } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

export const useHomeStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.2rem",
    color: "darkblue",
    fontFamily: "Yanone Kaffeesatz",
  },
  name: {
    marginBottom: "4%",
    fontSize: "1.5rem",
    color: "darkblue",
    fontFamily: "Yanone Kaffeesatz",
  },
  text: {
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
  },
  title: {
    color: "black",
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export const usesTopBarStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: "1.2rem",
  },
  title: {
    flexGrow: 1,
  },
}));

export const useListStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#ffffff",
    color: "black",
    fontFamily: "Oswald",
  },
}));
