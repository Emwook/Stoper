import styles from './Button.module.scss';

const Button = ({onClick, children}) =>{

    return <button className={styles.button} type="text" onClick={onClick}>{children}</button>
};

export default Button;