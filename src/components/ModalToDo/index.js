import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useServices } from "../../Providers/Services";

export default function FormDialog() {
  const [value, setValue] = useState("");
  const { open, setOpen, todoRegister, user } = useServices();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    todoRegister({ title: value, id: user, completed: false });
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
