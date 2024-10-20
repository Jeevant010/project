import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const LendingBorrowing = ({ metrics }) => {
  if (!metrics) return <div>Loading lending metrics...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Lending & Borrowing Metrics</Typography>
        <Typography>Interest Rate: {metrics.interestRate}%</Typography>
        <Typography>Borrowing Capacity: ${metrics.borrowingCapacity}</Typography>
        <Typography>Liquidation Risk: {metrics.liquidationRisk}%</Typography>
      </CardContent>
    </Card>
  );
};

export default LendingBorrowing;
