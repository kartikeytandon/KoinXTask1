import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CryptoList.css';
import Timer from './Timer';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://koinx1.onrender.com/crypto'); 
        setCryptos(response.data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    }
    fetchCryptos()
  }, [])

  return (
    <div>
      <div>
        <Timer />
        <h2 style={{ color: 'blue', fontSize: '24px' }}>Cryptocurrency Data</h2>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map(crypto => (
              <tr key={crypto.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{crypto.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{crypto.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;