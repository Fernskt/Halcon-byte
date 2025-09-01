import { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import halcon from '../../assets/images/halcon5.png';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, []);

  const handleToggle = () => setOpen(prev => !prev);

  const scrollTo = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.brand} onClick={() => scrollTo('hero')}>
        <img src={halcon} alt="HawkByte" className={styles.logo} />
        <h2 className={styles.title}>Hawk<span>Byte!</span></h2>
      </div>

      <button
        className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
        aria-label="Toggle menu"
        onClick={handleToggle}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>

      <ul className={`${styles.links} ${open ? styles.open : ''}`}>
        <li onClick={() => scrollTo('about')}>Nosotros</li>
        <li onClick={() => scrollTo('differentials')}>Diferenciales</li>
        <li onClick={() => scrollTo('services')}>Servicios</li>
        <li onClick={() => scrollTo('contact')}>Contacto</li>
      </ul>
    </nav>
  );
}
