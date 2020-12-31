import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

function Notification(props) {
  const [open, setOpen] = React.useState(props.notification.open);

  return (
    <Collapse in={open}>
      <Alert
        variant="filled"
        severity="info"
        // action={
        //   <IconButton
        //     aria-label="close"
        //     color="inherit"
        //     size="small"
        //     onClick={() => {
        //       setOpen(false);
        //     }}
        //   >
        //     <CloseIcon fontSize="inherit" />
        //   </IconButton>
        // }
      >
        {props.notification.message}
      </Alert>
    </Collapse>

  );
}

export default Notification;
