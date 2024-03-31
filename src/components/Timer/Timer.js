import TimeDisplay from "../../components/TimeDisplay/TimeDisplay.js";
import Button from "../../components/Button/Button";

// import React from "react";
import styles from "../../styles/global.scss";

const Timer = ({ children, onClick }) => {
  return (
    <div className={(styles.container, styles.timer)}>
      <TimeDisplay hours="00" minutes="00" seconds="00" miliseconds="00" />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
  );
};

export default Timer;
