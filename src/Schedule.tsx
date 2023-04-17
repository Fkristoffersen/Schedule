import React, { useState } from 'react';

const daysOfWeek = ['Mon 2', 'Tue 3', 'Wed 4', 'Thu 5', 'Fri 6'];
const timePeriods = ['7', '8', '9', '10', '11', '12', '13', '14', '15'];


const Schedule = () => {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});

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
  };


  return (
    <div>
      <h2>January 2023</h2>
      <table>
        <thead>
          <tr>
            <th id='Week'>Uge 1</th>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
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
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
