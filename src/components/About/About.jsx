import styles from './About.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Squares from './Squares';
import DecryptedText from '../Hero/DecryptedText';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} id="about" className={styles.about}>
      <Squares
        speed={0.5}
        squareSize={40}
        direction='diagonal'
        borderColor='#edededff'
        hoverFillColor='#edededff'
      />
      <h2 className={styles.title}>Sobre Nosotros</h2>
    
      <p className={styles.paragraph}>
        En un mundo donde la tecnología avanza a pasos agigantados, contar con un equipo confiable,
        ágil y con visión estratégica marca la diferencia. En <strong>HawkByte</strong>,
        ofrecemos soluciones integrales tecnológicas pensadas para las necesidades reales de tu empresa.
      </p>

      <h3 className={styles.subtitle}>¿Por qué elegirnos?</h3>
      <p className={styles.paragraph}>
        Porque te escuchamos, entendemos tu negocio y transformamos tus ideas en soluciones tecnológicas sólidas.
        Ya sea que necesites una nueva web, una aplicación interna, automatizar procesos o implementar herramientas
        que potencien tu rendimiento, tenemos la experiencia, el equipo y la actitud para lograrlo.
      </p>

      <p className={styles.cta}>
        📩 <a href="#contact">Contactanos</a> y conversemos tu próximo proyecto. La solución que estás buscando,
        ya la estamos construyendo.
      </p>
    </section>
  );
}
