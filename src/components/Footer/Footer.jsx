import styles from './Footer.module.css';
import halcon from '../../assets/images/halcon5.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.brand}> <img src={halcon} alt="HawkByte" className={styles.logo}/> HawkByte!</p>
        <ul className={styles.links}>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#differentials">Diferenciales</a></li>
          <li><a href="#about">Sobre nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
      <p className={styles.copy}>
        © {new Date().getFullYear()} HawkByte. Todos los derechos reservados.
      </p>
    </footer>
  );
}
