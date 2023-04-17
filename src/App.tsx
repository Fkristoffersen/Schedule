import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScheduleEditorButton  from './ScheduleEditorModal'

function App() {
  return (
    <div>
      <h1>My App</h1>
      <ScheduleEditorButton isOpen={false} onRequestClose={function (): void {
        throw new Error('Function not implemented.');
      } }   />
    </div>
  );
}

export default App;
