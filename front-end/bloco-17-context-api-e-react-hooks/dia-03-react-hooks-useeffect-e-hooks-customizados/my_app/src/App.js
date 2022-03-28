import React, { useState } from 'react';
import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  const { number, isMultiple, timer} = useTimer();
  return (
    <div className="App">
      <p>{`Número aleatório: ${number}`}</p>
      <p>{isMultiple && 'Acerto'}</p>
      <p>Tempo: { timer }</p>
    </div>
  );
}

export default App;
