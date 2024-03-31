import styles from "./TimeDisplay.module.scss";

const TimeDisplay = ({ miliseconds }) => {
  const formatTime = function (timeInMillis) {
    timeInMillis = Math.floor(timeInMillis);
    const hours = Math.floor(timeInMillis / 3600000);
    const minutes = Math.floor((timeInMillis - hours * 3600000) / 60000);
    const seconds = Math.floor(
      (timeInMillis - hours * 3600000 - minutes * 60000) / 1000
    );
    const milliseconds =
      timeInMillis - hours * 3600000 - minutes * 60000 - seconds * 1000;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
      .toString()
      .padStart(3, "0")}`;
  };

  return <div className={styles.timeDisplay}>{formatTime(miliseconds)}</div>;
};

export default TimeDisplay;
