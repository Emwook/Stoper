import styles from './FormattedTime.module.scss';

const FormattedTime = ({time}) =>{

    const formatTime = (miliseconds) => {
        const hours = Math.floor(miliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((miliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((miliseconds % (1000 * 60)) / 1000);
        const ms = miliseconds % 1000;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${ms.toString().padStart(3, '0')}`;
    };
    return (
        <div className={styles.component}>
           {formatTime(time)}
        </div>
      );
};

export default FormattedTime;