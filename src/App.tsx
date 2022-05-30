import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleTable } from './components/SimpleTable';
import MuiApp from './components/MuiApp';

function App() {
  return (
      <>
      <SimpleTable />
      <div style={ { marginTop: '30px' } }></div>
      <MuiApp />
      </>
  );
}

export default App;
