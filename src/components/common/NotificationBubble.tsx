import {Snackbar, Alert} from '@mui/material';
import React from 'react';

interface NotificationBubbleProps {
  open: boolean;
  onClose(): void;
  message: string;
}

const NotificationBubble: React.FC<NotificationBubbleProps> = ({
  message,
  onClose,
  open
}) => (
  <Snackbar
    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
    autoHideDuration={2000}
    onClose={onClose}
    open={open}
  >
    <Alert onClose={onClose} severity="success" sx={{width: '100%'}}>
      {message}
    </Alert>
  </Snackbar>
);

export default NotificationBubble;
