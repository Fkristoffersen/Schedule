import React from 'react';

interface Props {
  daysOfWeek: string[];
  timePeriods: string[];
  handleCellClick: (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => void;
  handleCellBlur: (event: React.FocusEvent<HTMLTableCellElement>) => void;
  schedule: { [key: string]: string };
}

const Table: React.FC<Props> = ({ daysOfWeek, timePeriods, handleCellClick, handleCellBlur, schedule }) => {
  return (
    <table className="schedule">
      <thead>
        <tr>
          <th></th>
          {daysOfWeek.map((day, index) => (
            <th key={index} dangerouslySetInnerHTML={{ __html: day }}></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timePeriods.map((time, index) => (
          <tr key={index}>
            <th>{time}</th>
            {daysOfWeek.map((day, index) => (
              <td
                key={index}
                data-day={day.substring(0, 3)}
                data-time={time}
                onClick={handleCellClick}
                onBlur={handleCellBlur}
                contentEditable={false}
              ></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
