import React from 'react';
import { Alert } from '@mui/material';

const Notifications = () => (
  <Alert severity="warning">
    Your borrowing position is at risk of liquidation. Take action now!
  </Alert>
);

export default Notifications;
