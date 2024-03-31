import styles from "./TimeDisplay.module.scss";

const TimeDisplay = ({ hours, minutes, seconds, miliseconds }) => {
  return (
    <div className={styles.timeDisplay}>
      {hours}:{minutes}:{seconds}:{miliseconds}
    </div>
  );
};

export default TimeDisplay;
