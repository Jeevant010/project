// src/TestComponent.jsx
import React from 'react';
import { Container, Grid } from 'node_modules/@mui/material';

const TestComponent = () => (
  <Container>
    <Grid container>
      <Grid item xs={12}>
        <h1>Test Component</h1>
      </Grid>
    </Grid>
  </Container>
);

export default TestComponent;
