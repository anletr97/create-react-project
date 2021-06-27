import React from 'react';
import DateUtils from 'utils/date-utils';

export default function GridHeader(props: any) {
  const noBorderTop = {
    borderTop: 0,
  };
  const noBorderBot = {
    borderBottom: 0,
  };

  return (
    <thead>
      <tr >
        <th rowSpan={2}> Habit name </th>
        {DateUtils.getDaysInMonth(props.year, props.month).map((info) => (
          <td key={info.day} style={noBorderBot} className="grid-header">
            {info.weekDay}
          </td>
        ))}
      </tr>
      <tr>
        {DateUtils.getDaysInMonth(props.year, props.month).map((info) => (
          <td key={info.day} style={noBorderTop} className="grid-header">
            {info.day}
          </td>
        ))}
      </tr>
    </thead>
 
  );
}
