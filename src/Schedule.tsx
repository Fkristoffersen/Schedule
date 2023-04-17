import React, { useState, useEffect } from 'react';

interface ScheduleItem {
  id: number;
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

const Schedule = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    fetch('/api/schedule')
      .then(response => response.json())
      .then(data => setSchedule(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map(row => (
          <tr key={row.id}>
            <td>{row.time}</td>
            <td>{row.monday}</td>
            <td>{row.tuesday}</td>
            <td>{row.wednesday}</td>
            <td>{row.thursday}</td>
            <td>{row.friday}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Schedule;
