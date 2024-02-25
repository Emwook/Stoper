import styles from './Components.module.scss';
import Button from './Button/Button.js';
import { useState } from 'react';
import { useEffect } from 'react';


const Components = props =>{
    const [time, setTime] = useState(0);

    const updateTime = () =>{
        setTime(prevValue => prevValue + 1);
    };
    const timer = setInterval(updateTime, 1000);

    useEffect(() => {
        return () => {
           if(timer) clearInterval(timer);
        };
      }, []);

    return (
        <div className={styles.components}>
            <h1>{time}</h1>
            <Button>start</Button>
            <Button>stop</Button>
            <Button>reset</Button>
        </div>
    );
};

export default Components;
