import React, {useEffect} from "react";

const Timer = ({seconds, isActive, submitAnswer, setSeconds}) => {

    let interval = null;


  useEffect(() => {
    if (seconds == 0) {
      submitAnswer();
      return;
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <p>TIme : {seconds}</p>
    </div>
  );
};

export default Timer;
