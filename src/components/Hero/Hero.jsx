/* components/Hero/Hero.tsx */
import styles from './Hero.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <header className={styles.hero}>
      <div ref={ref}>
        <h1 className={styles.heading}>Tu aliado tecnológico para hacer crecer tu empresa</h1>
        <p className={styles.description}>
          En <strong>HalconByte</strong> creamos soluciones
          integrales pensadas para las necesidades reales de tu empresa.
        </p>
      </div>
      <a className={styles.cta} href="#contact">¡Contáctanos!</a>
    </header>
  );
}
