import React from 'react';
import ReactDOM from 'react-dom/client';
import message from './message.js'; 

const App = () => {
  return (
    <div>
      <h1>Shubham Ghaturle</h1>
      <p>Description: - Export message from message.js file and import it into the index.js file, and display the output on the user screen.</p>
      <p>{message()}</p>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
