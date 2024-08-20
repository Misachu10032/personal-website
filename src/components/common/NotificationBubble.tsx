import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface NotificationBubbleProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const NotificationBubble: React.FC<NotificationBubbleProps> = ({
  open,
  onClose,
  message,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default NotificationBubble;
