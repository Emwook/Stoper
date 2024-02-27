import React, { useState, useEffect } from 'react';
import styles from './Components.module.scss';
import Button from './Button/Button.js';
import FormattedTime from './FormattedTime/FormattedTime.js';


const Components = props => {
    const [time, setTime] = useState(0);
    const [timer, setTimer] = useState(false);

    useEffect(() => {
        if (timer) {
            const intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1);
            return () => clearInterval(intervalId);
        }
    }, [timer]);

    const startTimer = () => {
        if (!timer) {
            setTimer(true);
        }
    };

    const stopTimer = () => {
        if (timer) {
            setTimer(false);
        }
    };

    const resetTimer = () => {
        setTime(0);
    };

    return (
        <div className={styles.components}>
            <h3 className={styles.title}>Time on a black hole <br/>
            with the radius of 2.8x10^24c</h3>
            <FormattedTime time={time}/>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={stopTimer}>Stop</Button>
            <Button onClick={resetTimer}>Reset</Button>
        </div>
    );
};

export default Components;
