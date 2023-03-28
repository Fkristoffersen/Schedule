import React, { useState } from 'react';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timePeriods = ['7-8', '8-9', '9-10', '10-11', '11-12', '12-13'];

const Schedule = () => {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});

  const updateSchedule = (day: string, time: string, subject: string) => {
    const key = `${day}-${time}`;
    setSchedule(prevState => ({ ...prevState, [key]: subject }));
  };

  const clearSchedule = () => {
    setSchedule({});
  
    // Reset the content of all cells
    const cells = document.querySelectorAll('td[data-day][data-time]');
    cells.forEach(cell => {
      (cell as HTMLTableCellElement).innerText = '';
    });
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
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timePeriods.map(time => (
            <tr key={time}>
              <td>{time}</td>
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
      <button onClick={clearSchedule}>Clear Schedule</button>
    </div>
  );
};

export default Schedule;
