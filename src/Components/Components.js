import React, { useState, useEffect } from 'react';
import styles from './Components.module.scss';
import Button from './Button/Button.js';

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

    const formatTime = (time) => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        const ms = time % 1000;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
    };

    return (
        <div className={styles.components}>
            <h3>Time on a black hole <br/>
            with the radius of 2.8x10^24c</h3>
            <h1>{formatTime(time)}</h1>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={stopTimer}>Stop</Button>
            <Button onClick={resetTimer}>Reset</Button>
        </div>
    );
};

export default Components;
