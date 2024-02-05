import React from 'react';
import { useApi } from '../../context/ApiContext';
import './ResponseDisplay.css';

const ResponseDisplay = () => {
  const { apiResponse } = useApi();

  return (
    <div className="response-section">
      <h2>Response:</h2>
      <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;
