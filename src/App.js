import React from 'react';
import RequestForm from './components/RequestForm/RequestForm';
import ResponseDisplay from './components/ResponseDisplay/ResponseDisplay';

const App = () => {
  return (
    <div className="container">
      <h2>REST Client Application</h2>
      <div className="app-content">
        <RequestForm />
        <ResponseDisplay />
      </div>
    </div>
  );
};

export default App;
