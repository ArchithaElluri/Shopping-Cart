import React, { useState } from 'react';
import Countdown from 'react-countdown';

const MyCountdown = () => {
  const countdownDuration = 1000 * (3 * 24 * 60 * 60 + 23 * 60 * 60 + 19 * 60 + 5);

  const [targetDate, setTargetDate] = useState(Date.now() + countdownDuration);

  const handleComplete = () => {
    setTargetDate(Date.now() + countdownDuration);
  };

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin:"20px" }}>
        <table style={{ width: '300px' }}>
          <thead>
            <tr style={{ textAlign: 'left', width:"300px" }}>
              <th>Days  </th>
              <th>Hours </th>
              <th>Minutes </th>
              <th>Seconds </th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '1.8em', fontWeight:600 }}>
            <tr style={{ textAlign: 'left' }}>
              <td>{days}    :</td>
              <td>{hours}     :</td>
              <td>{minutes}    :</td>
              <td>{seconds}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    );
  };

  return (
    <Countdown
      date={targetDate}
      renderer={renderer}
      onComplete={handleComplete} 
    />
  );
};

export default MyCountdown;
