import { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import reactLogo from './assets/react.svg';
import viteLogo from './vite.svg';
import './App.css';
import { Container, Grid } from "./node_modules/@mui/material";
import TestComponent from './TestComponent';
// API Base URL
const HEMERA_API_BASE = 'https://api.hemera.fi'; // Replace with actual URL

// API Functions
const getDeFiMetrics = async (protocol) => {
  try {
    const response = await axios.get(`${HEMERA_API_BASE}/protocols/${protocol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching DeFi metrics:', error);
    return null;
  }
};

const getCrossProtocolLiquidity = async () => {
  try {
    const response = await axios.get(`${HEMERA_API_BASE}/liquidity`);
    return response.data;
  } catch (error) {
    console.error('Error fetching liquidity data:', error);
    return null;
  }
};

// Child Components
const LiquidityTracker = ({ liquidity }) => {
  if (!liquidity) return <p>Loading liquidity data...</p>;
  return <div>Liquidity: {JSON.stringify(liquidity)}</div>;
};

const LendingBorrowing = ({ metrics }) => {
  if (!metrics) return <p>Loading metrics...</p>;
  return <div>Metrics: {JSON.stringify(metrics)}</div>;
};

const Notifications = () => <div>Notifications go here!</div>;

// Main App Component
function App() {
  const [count, setCount] = useState(0);
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



const App = () => <TestComponent />;


  return (
    <>
      <div className="app-header">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Hello</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>Do anything</p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Container>
        <h2>Dashboard</h2>
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
    </>
  );
}

export default App;
