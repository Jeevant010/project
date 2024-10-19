import axios from 'axios';

const HEMERA_API_BASE = 'https://api.hemera.fi'; // Replace with actual API URL

export const getDeFiMetrics = async(protocol) => {
    try {
        const response = await axios.get(`${HEMERA_API_BASE}/protocols/${protocol}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching DeFi metrics:', error);
        return null;
    }
};

export const getCrossProtocolLiquidity = async() => {
    try {
        const response = await axios.get(`${HEMERA_API_BASE}/liquidity`);
        return response.data;
    } catch (error) {
        console.error('Error fetching liquidity data:', error);
        return null;
    }
};