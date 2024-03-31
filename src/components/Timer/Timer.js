import TimeDisplay from "../../components/TimeDisplay/TimeDisplay.js";
import Button from "../../components/Button/Button";

import styles1 from "../../styles/global.scss";
import styles from "./Timer.module.scss";

import { useState, useEffect } from "react";

const Timer = ({ children, onClick }) => {
  const [timeDisplayed, setTimeDisplayed] = useState(0);

  return (
    <div className={(styles1.container, styles.timer)}>
      <TimeDisplay miliseconds={timeDisplayed} />
      {/* <div className={styles.timeDisplay} miliseconds={time}> */}

      <div className={styles.controls}>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;
