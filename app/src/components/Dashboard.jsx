import React, { useEffect, useState } from 'react';
import LiquidityTracker from './LiquidityTracker';
import LendingBorrowing from './LendingBorrowing';
import Notifications from './Notifications';
import { getDeFiMetrics, getCrossProtocolLiquidity } from '../services/api';
import { Container, Grid } from '@mui/material';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [liquidity, setLiquidity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMetrics = await getDeFiMetrics('linea');
      const fetchedLiquidity = await getCrossProtocolLiquidity();
      setMetrics(fetchedMetrics);
      setLiquidity(fetchedLiquidity);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <LiquidityTracker liquidity={liquidity} />
        </Grid>
        <Grid item xs={12} md={6}>
          <LendingBorrowing metrics={metrics} />
        </Grid>
      </Grid>
      <Notifications />
    </Container>
  );
};

export default Dashboard;
