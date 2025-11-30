import styles from '../assets/Header.module.css';

const Header = () => {
  return (
    <>
    <div className={styles.header}>
        <h1>Pizzeria Mamma Mia!</h1>
        <p>Las mejores pizzas de origen Italiano en Santiago</p>
    </div>
    </>
  )
}

export default Header