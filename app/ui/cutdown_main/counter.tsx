export const Counter = ({ days, hours, minutes, seconds, hidden = "" }) => {
  return (
    <div className={`flex gap-6 ${hidden}`}>
      <div className="flex flex-col justify-center items-center">
        <span className="text-3xl">{days}</span>
        <span className="text-sm text-gray-400">days</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-3xl">{hours}</span>
        <span className="text-sm text-gray-400">hours</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-3xl">{minutes}</span>
        <span className="text-sm text-gray-400">mins</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-3xl">{seconds}</span>
        <span className="text-sm text-gray-400">secs</span>
      </div>
    </div>
  );
};
