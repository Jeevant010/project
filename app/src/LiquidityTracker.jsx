import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const LiquidityTracker = ({ liquidity }) => {
  if (!liquidity) return <div>Loading liquidity data...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Cross-Protocol Liquidity Tracker</Typography>
        <Typography>Total Liquidity: ${liquidity.totalLiquidity}</Typography>
        <Typography>TVL: ${liquidity.totalValueLocked}</Typography>
        <Typography>Protocols: {liquidity.protocols.length}</Typography>
      </CardContent>
    </Card>
  );
};

export default LiquidityTracker;
