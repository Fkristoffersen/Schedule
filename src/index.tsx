import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Schedule from './Schedule';
import ScheduleEditorModal from './ScheduleEditorModal';
import ScheduleEditorButton from './ScheduleEditorButton'
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Schedule />
    <ScheduleEditorModal isOpen={false} onRequestClose={function (): void {
      throw new Error('Function not implemented.');
    } } />
    <ScheduleEditorButton />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
