import React, { useState } from 'react';
import axios from 'axios';
import './RequestForm.css';
import { useApi } from '../../context/ApiContext';


const RequestForm = () => {
  const { setApiResponse } = useApi();
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');

  const handleRequest = async () => {
    if(url === ''){
      alert("Please Enter Valid Url")
      return 0;
    }
    try {
      const response = await axios({ method, url });
      setApiResponse(response.data);
    } catch (error) {
      setApiResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="request-section">
      <div className="url-form">
        <div>
          <label>
            URL:
          </label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>  
        <div>
          <label>
            Method:
          </label>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="PUT">PUT</option>
            <option value="POST">POST</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        <button onClick={handleRequest}>Send Request</button>
      </div>
    </div>
  );
};

export default RequestForm;
