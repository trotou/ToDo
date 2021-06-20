import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useServices } from "../../Providers/Services";
import { IconButton } from "@material-ui/core";
import FormDialog from "../ModalToDo";
import { useListStyles } from "../../Helpers/makestyles";

export default function CheckList({ list, user }) {
  const { setOpen } = useServices();
  const classes = useListStyles();
  const [checked, setChecked] = useState([0]);

  const handleToggle = (i) => () => {
    const currentIndex = checked.indexOf(i);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(i);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {list.map((value, i) => {
        const labelId = `checkbox-list-label-${i}`;
        return (
          <ListItem
            key={i}
            role={undefined}
            dense
            button
            onClick={handleToggle(i)}
          >
            <ListItemIcon>
              {value.completed ? (
                <Checkbox
                  edge="end"
                  checked={value.completed}
                  inputProps={{ "aria-labelledby": user }}
                />
              ) : (
                <Checkbox
                  edge="end"
                  checked={checked.indexOf(i) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              )}
            </ListItemIcon>

            <ListItemText id={labelId} color="secondary">
              {value.title}
            </ListItemText>
          </ListItem>
        );
      })}
      <IconButton>
        <AddCircleOutlineIcon onClick={() => setOpen(true)} />
        <FormDialog />
      </IconButton>
    </List>
  );
}
