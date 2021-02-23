import { useState, useEffect } from 'react';
import Head from 'next/head';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function stopCountdown() {
    setActive(false);
    setTime(25 * 60);
  }

  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      setActive(false);
      setTime(25 * 60);
    }
  }, [active, time]);

  return (
    <div>
      {active && time > 0 && (
        <Head>
          <title>
            {`${minuteLeft}${minuteRight}:${secondLeft}${secondRight}`} |
            move.it
          </title>
        </Head>
      )}

      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        className={styles.countdownButton}
        onClick={active ? stopCountdown : startCountdown}
      >
        {active ? 'Cancelar o ciclo' : 'Iniciar um ciclo'}
      </button>
    </div>
  );
};

export default Countdown;
