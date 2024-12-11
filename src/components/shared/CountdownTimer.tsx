import React from 'react';
import Countdown from 'react-countdown';
import { BIRTHDAY_DATE } from '../../utils/constants';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="bg-white bg-opacity-75 rounded-lg p-4 shadow-md">
    <span className="text-3xl font-bold text-red-500">{value}</span>
    <p className="text-sm text-gray-600 font-handwriting">{label}</p>
  </div>
);

export default function CountdownTimer() {
  return (
    <Countdown
      date={BIRTHDAY_DATE}
      renderer={({ days, hours, minutes, seconds }) => (
        <div className="grid grid-cols-4 gap-4 text-center">
          <CountdownUnit value={days} label="Days" />
          <CountdownUnit value={hours} label="Hours" />
          <CountdownUnit value={minutes} label="Minutes" />
          <CountdownUnit value={seconds} label="Seconds" />
        </div>
      )}
    />
  );
}