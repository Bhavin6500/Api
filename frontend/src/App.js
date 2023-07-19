import React from 'react';
import Deals from './components/Deals';
import Contacts from './components/Contacts'
import PowerBI from './components/PowerBI'

const App = () => {
  return (
    <div>
      <h1>My HubSpot App</h1>
      <Deals />
      <Contacts />
      <PowerBI />
    </div>
  );
};

export default App;
