import React, { useState } from 'react';
import { ChromePicker } from 'react-color';


const daysOfWeek = ['Mon<span class="blue-circle">2</span>', 'Tue<br>3', 'Wed<br>4', 'Thu<br>5', 'Fri<br>6'];
const timePeriods = ['7', '8', '9', '10', '11', '12', '13', '14', '15'];



const Schedule = () => {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});
  const [color, setColor] = useState('#000000');

  const updateSchedule = (day: string, time: string, subject: string) => {
    const key = `${day}-${time}`;
    setSchedule(prevState => ({ ...prevState, [key]: subject }));
  };

  const clearSchedule = () => {
    setSchedule({});
  
    const cells = document.querySelectorAll('td[data-day][data-time]');
    cells.forEach(cell => {
      (cell as HTMLTableCellElement).innerText = '';
    });
  };
  
  const saveSchedule = () => {
    console.log(schedule);
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
      <table>
        <thead>
          <tr>
            <th id='Week'>Uge 1</th>
            {daysOfWeek.map(day => (
              <th key={day} dangerouslySetInnerHTML={{ __html: day }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {timePeriods.map(time => (
            <tr key={time}>
              <td className="number-cell">{time}</td>
              {daysOfWeek.map(day => (
                <td
                  key={`${day}-${time}`}
                  data-day={day}
                  data-time={time}
                  onClick={handleCellClick}
                  onBlur={handleCellBlur}
                ></td>
                
              ))}
            </tr>
          ))}
        </tbody>
        
      </table>
      {color && (
  <div className="color-picker">
    <ChromePicker color={color} onChange={(c) => setColor(c.hex)} />
  </div>
)}
    </div>
  );
};

export default Schedule;
