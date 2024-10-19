// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import axios from 'axios'; // Use 'import' instead of 'require'

// Replace these with your actual Hemera API key and base URL
const HEMERA_API_KEY = 'your_hemera_api_key';
const HEMERA_BASE_URL = 'https://api.hemera.com/linea'; // Example base URL

// Function to fetch liquidity data from Linea using Hemera API
const fetchLiquidityData = async() => {
    try {
        const response = await axios.get(`${HEMERA_BASE_URL}/liquidity`, {
            headers: {
                'Authorization': `Bearer ${HEMERA_API_KEY}`, // Corrected Bearer usage
                'Content-Type': 'application/json',
            },
        });

        console.log('Linea Liquidity Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching liquidity data from Linea:', error.message);
    }
};

// Function to fetch interest rates across Linea DeFi protocols using Hemera API
const fetchInterestRates = async() => {
    try {
        const response = await axios.get(`${HEMERA_BASE_URL}/interest-rates`, {
            headers: {
                'Authorization': `Bearer ${HEMERA_API_KEY}`, // Corrected Bearer usage
                'Content-Type': 'application/json',
            },
        });

        console.log('Linea Interest Rates:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching interest rates from Linea:', error.message);
    }
};

// Example usage of the functions
(async() => {
    const liquidityData = await fetchLiquidityData();
    const interestRates = await fetchInterestRates();
})();

// Vite configuration
export default defineConfig({
    plugins: [react()],
});