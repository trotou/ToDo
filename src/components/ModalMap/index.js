import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import BingMapsReact from "bingmaps-react";
import { useServices } from '../../Providers/Services';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const {open, setOpen} = useServices()  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
        <BingMapsReact
              bingMapsKey="Au9m_nz5mrOODSqFbFXqi1WXNlphoeQKltJOQFB-nKpM9aXnrfoGfobXlhgm9zED"
              height="500px"
              mapOptions={{
                navigationBarMode: "square",
              }}
              width="500px"
              viewOptions={{
                center: { latitude: 42.360081, longitude: -71.058884 },
                mapTypeId: "grayscale",
              }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>          
        </DialogActions>
      </Dialog>
    </div>
  );
}
