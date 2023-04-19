import React, { useState } from 'react';
import Table from './Table';
import ColorPicker from './ColorPicker';

const daysOfWeek = ['Mon<span class="blue-circle">2</span>', 'Tue<br>3', 'Wed<br>4', 'Thu<br>5', 'Fri<br>6'];
const timePeriods = ['7', '8', '9', '10', '11', '12', '13', '14', '15'];

const Schedule = () => {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});
  const [color, setColor] = useState('#000000');

  const updateSchedule = (day: string, time: string, subject: string) => {
    const key = `${day}-${time}`;
    setSchedule(prevState => ({ ...prevState, [key]: subject }));
  };

  const handleCellClick = (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const cell = event.currentTarget;
    const day = cell.dataset.day!;
    const time = cell.dataset.time!;
    const subject = schedule[`${day}-${time}`] || '';
    cell.contentEditable = 'true';
    cell.innerText = subject;
    cell.focus();
  };

  const handleCellBlur = (event: React.FocusEvent<HTMLTableCellElement>) => {
    const cell = event.currentTarget;
    const day = cell.dataset.day!;
    const time = cell.dataset.time!;
    const subject = cell.innerText.trim();
    cell.contentEditable = 'false';
    updateSchedule(day, time, subject);
    if (subject) {
      cell.classList.add('filled');
      cell.style.backgroundColor = color;
    } else {
      cell.classList.remove('filled');
      cell.style.backgroundColor = '';
    }
  };
  
  return (
    <div>
      <div className='banner'>
        <h2>January 2023</h2>
        <div className="button-container">
          <button className="small-button">Week</button>
          <button className="small-button">Month</button>
          <button className="small-button">Year</button>
        </div>
      </div>
      <Table daysOfWeek={daysOfWeek} timePeriods={timePeriods} handleCellClick={handleCellClick} handleCellBlur={handleCellBlur} schedule={schedule} />
      <ColorPicker color={color} setColor={setColor} />
    </div>
  );
};

export default Schedule;
