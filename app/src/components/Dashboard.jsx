import React, { useEffect, useState } from 'react';
import LiquidityTracker from './LiquidityTracker';
import LendingBorrowing from './LendingBorrowing';
import Notifications from './Notifications';
import { getDeFiMetrics, getCrossProtocolLiquidity } from '../services/api';
import { Container, Grid } from '@mui/material';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [liquidity, setLiquidity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedMetrics = await getDeFiMetrics('linea');
        const fetchedLiquidity = await getCrossProtocolLiquidity();
        setMetrics(fetchedMetrics);
        setLiquidity(fetchedLiquidity);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false); // Stop loading after fetching or if an error occurs
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loader component if you have one
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if the data fetching fails
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {liquidity ? (
            <LiquidityTracker liquidity={liquidity} />
          ) : (
            <div>No Liquidity Data Available</div>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {metrics ? (
            <LendingBorrowing metrics={metrics} />
          ) : (
            <div>No Metrics Data Available</div>
          )}
        </Grid>
      </Grid>
      <Notifications />
    </Container>
  );
};

export default Dashboard;