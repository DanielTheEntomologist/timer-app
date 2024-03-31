import TimeDisplay from "../../components/TimeDisplay/TimeDisplay.js";
import Button from "../../components/Button/Button";

import styles1 from "../../styles/global.scss";
import styles from "./Timer.module.scss";

import { useState, useEffect } from "react";

const Timer = () => {
  const [intervalState, setStateInterval] = useState(null);

  const refreshRate = 30;

  const zeroedTimerState = {
    timeDisplayed: 0,
    timeElapsed: 0,
    startTime: 0,
  };

  const [timerState, setTimerState] = useState(zeroedTimerState);

  // clean interval on unmount
  useEffect(() => {
    return () => {
      if (intervalState) {
        clearInterval(intervalState);
      }
    };
  }, []);

  const updateTimer = () => {
    setTimerState((timerState) => {
      return {
        ...timerState,
        timeElapsed:
          performance.now() - timerState.startTime + timerState.timeElapsed,
        timeDisplayed:
          performance.now() - timerState.startTime + timerState.timeElapsed,
        startTime: performance.now(),
      };
    });
  };

  const startTimer = () => {
    setTimerState((timerState) => {
      return {
        ...timerState,
        startTime: performance.now(),
      };
    });

    setStateInterval(setInterval(updateTimer, Math.floor(1000 / refreshRate)));
  };

  const stopTimer = () => {
    if (intervalState) {
      clearInterval(intervalState);
    }
  };

  const resetTimer = () => {
    setTimerState(zeroedTimerState);

    clearInterval(intervalState);
  };

  return (
    <div className={(styles1.container, styles.timer)}>
      <TimeDisplay miliseconds={timerState.timeDisplayed} />
      {/* <div className={styles.timeDisplay} miliseconds={time}> */}

      <div className={styles.controls}>
        <Button onClick={startTimer}>Start</Button>
        <Button onClick={stopTimer}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
};

export default Timer;
