//Koden definerer en React-komponent ved navn "Schedule", 
//som håndterer en tidsplan (schedule) og viser en tabel med dage i ugen og tidspunkter. 
//Komponenten bruger React-hooks til at håndtere sin tilstand ved hjælp af useState-hooket.

import React, { useState } from 'react';

//Konstanten "daysOfWeek" og "timePeriods" definerer de forskellige dage og tidspunkter, der skal vises i tabellen.
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const timePeriods = ['7-8', '8-9', '9-10', '10-11', '11-12', '12-13'];


//Funktionen "updateSchedule" tager dag, tid og emne som input og opdaterer tidsplanen ved at tilføje emnet 
//til det pågældende tidspunkt og dag. Funktionen bruger setSchedule-hooket til at opdatere tilstanden.
const ScheduleEditor = () => {
  const [schedule, setSchedule] = useState<{ [key: string]: string }>({});

  const updateSchedule = (day: string, time: string, subject: string) => {
    const key = `${day}-${time}`;
    setSchedule(prevState => ({ ...prevState, [key]: subject }));
  };
//Funktionen "clearSchedule" nulstiller tidsplanen og nulstiller indholdet af alle celler i tabellen ved hjælp af querySelectorAll-metoden og forEach-loopen.
  const clearSchedule = () => {
    setSchedule({});
  
    // Reset the content of all cells
    const cells = document.querySelectorAll('td[data-day][data-time]');
    cells.forEach(cell => {
      (cell as HTMLTableCellElement).innerText = '';
    });
  };
  
  // Gemmer data
  const saveSchedule = () => {
    console.log(schedule);
  };


//Funktionen "handleCellClick" og "handleCellBlur" håndterer klik og blur-events for hver celle i tabellen. 
//"handleCellClick" gør cellen redigerbar og viser det eksisterende emne i cellen. 
//"handleCellBlur" gemmer emnet i tidsplanen, når cellen mister fokus og gør cellen ikke-redigerbar igen.
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


  //ostKomponenten returnerer en HTML-tabellayout og en "Clear Schedule" -knap, der udløser "clearSchedule" -funktionen, når den klikkes.
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
      <button onClick={saveSchedule}>Save Schedule</button>
      <button onClick={clearSchedule}>Clear Schedule</button>
    </div>
  );
};

export default ScheduleEditor;
