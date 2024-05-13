import React from 'react';

type Props = {
  statName?: string;
  baseStat: number;
};

const StatProgressBar: React.FC<Props> = ({ statName, baseStat }) => {
  const progressWidth = `${baseStat}%`;

  return (
    <div className="flex items-center gap-5 justify-between">
      <p className="text-sm mb-1">{statName}</p>
      <div className="relative flex items-center bg-gray-200 rounded-full h-3 w-2/3">
        <div
          className="bg-blue-500 rounded-full h-full"
          style={{ width: progressWidth }}
        />
        <p className="absolute text-xs w-full text-center">{baseStat}</p>
      </div>
    </div>
  );
};
const StatProgressBarCompare: React.FC<Props> = ({ baseStat }) => {
  const progressWidth = `${baseStat}%`;

  return (
    <div className="items-center gap-5 justify-between">
      <div className="relative flex items-center bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-500 rounded-full h-full"
          style={{ width: progressWidth }}
        />
        <p className="absolute text-xs w-full text-center">{baseStat}</p>
      </div>
    </div>
  );
};

export { StatProgressBar, StatProgressBarCompare };
