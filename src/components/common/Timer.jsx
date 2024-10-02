import { useEffect, useState } from "react";

const Timer = ({ hours = 0, minutes = 0, seconds = 0, onFinish }) => {
  const [time, setTime] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const countDownDate = new Date();
    countDownDate.setHours(countDownDate.getHours() + hours);
    countDownDate.setMinutes(countDownDate.getMinutes() + minutes);
    countDownDate.setSeconds(countDownDate.getSeconds() + seconds);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTime({ hours: 0, minutes: 0, seconds: 0 });

        if (onFinish) {
          onFinish(true);
        }
      } else {
        const hrs = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((distance % (1000 * 60)) / 1000);

        setTime({
          hours: hrs,
          minutes: mins,
          seconds: secs,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds, onFinish]);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <span>
      {hours > 0
        ? `${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(
            time.seconds
          )}`
        : `${formatTime(time.minutes)}:${formatTime(time.seconds)}`}
    </span>
  );
};

export default Timer;
